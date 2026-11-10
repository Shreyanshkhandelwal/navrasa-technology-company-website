import { contactForm } from "../src/data/site";

type EnquiryMode = "contact" | "project";
type EnquiryFields = {
  mode: EnquiryMode;
  name: string;
  company: string;
  email: string;
  phone: string;
  building: string;
  type: string;
  budget: string;
  timeline: string;
  message: string;
};

const googleFormResponseUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSe5qKD93-EzKeq4igm73ii860k-IlyO_otAo21bjkcSx0eR7g/formResponse";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const limits: Record<Exclude<keyof EnquiryFields, "mode">, number> = {
  name: 120,
  company: 160,
  email: 254,
  phone: 30,
  building: 4000,
  type: 80,
  budget: 80,
  timeline: 80,
  message: 4000,
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function parseEnquiry(value: unknown): EnquiryFields | null {
  if (!isRecord(value) || (value.mode !== "contact" && value.mode !== "project")) return null;

  const fields: EnquiryFields = {
    mode: value.mode,
    name: readString(value.name),
    company: readString(value.company),
    email: readString(value.email),
    phone: readString(value.phone),
    building: readString(value.building),
    type: readString(value.type),
    budget: readString(value.budget),
    timeline: readString(value.timeline),
    message: readString(value.message),
  };

  if (!fields.name || !fields.email || !emailPattern.test(fields.email)) return null;
  if (fields.phone) {
    const digits = fields.phone.replace(/\D/g, "").length;
    if (digits < 7 || digits > 15) return null;
  }
  if (fields.mode === "project" && (!fields.building || !contactForm.projectTypes.includes(fields.type))) return null;
  if (fields.mode === "contact" && !fields.message) return null;
  if (fields.budget && !contactForm.budgets.includes(fields.budget)) return null;
  if (fields.timeline && !contactForm.timelines.includes(fields.timeline)) return null;
  if (Object.entries(fields).some(([key, field]) => key !== "mode" && field.length > limits[key as keyof typeof limits])) {
    return null;
  }

  return fields;
}

export async function handleEnquiryRequest(request: Request, fetcher: typeof fetch = fetch): Promise<Response> {
  if (request.method !== "POST") return jsonResponse({ success: false, message: "Method not allowed." }, 405);
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return jsonResponse({ success: false, message: "Send the enquiry as JSON." }, 415);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ success: false, message: "The enquiry details could not be read." }, 400);
  }

  const enquiry = parseEnquiry(body);
  if (!enquiry) return jsonResponse({ success: false, message: "Check the required enquiry details and try again." }, 400);

  const projectDescription = enquiry.mode === "project" ? enquiry.building : enquiry.message;
  const googleFormBody = new URLSearchParams({
    "entry.795717472": enquiry.name,
    "entry.153567538": enquiry.company,
    "entry.1946725407": enquiry.email,
    "entry.1931039491": enquiry.phone,
    "entry.589067015": projectDescription,
    "entry.1041755658": enquiry.mode === "project" ? enquiry.type : "",
    "entry.1996484321": enquiry.mode === "project" ? enquiry.budget : "",
    "entry.1274528727": enquiry.mode === "project" ? enquiry.timeline : "",
    "entry.1209479222": enquiry.mode === "project" ? enquiry.message : "",
  });

  try {
    const upstream = await fetcher(googleFormResponseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: googleFormBody.toString(),
      redirect: "follow",
      signal: AbortSignal.timeout(12_000),
    });
    const responseHtml = await upstream.text();
    if (!upstream.ok || !/your response has been recorded/i.test(responseHtml)) {
      console.error(`Google Forms did not confirm the enquiry (HTTP ${upstream.status}).`);
      return jsonResponse({ success: false, message: "The enquiry service did not confirm receipt." }, 502);
    }
  } catch (error) {
    console.error("Google Forms enquiry request failed.", error);
    return jsonResponse({ success: false, message: "The enquiry service is temporarily unavailable." }, 502);
  }

  return jsonResponse({ success: true });
}

export default {
  fetch(request: Request) {
    return handleEnquiryRequest(request);
  },
};
