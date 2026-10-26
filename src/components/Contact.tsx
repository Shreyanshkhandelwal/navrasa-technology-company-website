import { ArrowRight, Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { cn } from "@/utils/cn";
import { company, contactForm, finalCta } from "@/data/site";
import { SocialList } from "./Social";
import { Button, Eyebrow, Lines, Reveal } from "./ui";
import { Ecosystem } from "./Ecosystem";

/* ------------------------------- FINAL CTA -------------------------------- */
export function FinalCTA({ tone = "dark", index = "16" }: { tone?: "dark" | "light"; index?: string }) {
  if (tone === "light") {
    return (
      <section id="cta" className="relative bg-paper text-ink">
        <div
          className="lines-light absolute inset-0 opacity-60 [mask-image:linear-gradient(180deg,transparent,#000_40%,#000_60%,transparent)]"
          aria-hidden="true"
        />
        <div className="container-x section-y relative grid grid-cols-12 items-end gap-x-4 gap-y-10 md:gap-x-8">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow index={index} label="Let's Build" tone="light" />
            <Lines lines={["Have a", "big idea?"]} className="display display-lg mt-10 uppercase text-ink" />
          </div>
          <Reveal delay={0.15} className="col-span-12 lg:col-span-5 lg:pl-8">
            <p className="font-display text-2xl font-semibold tracking-[-0.02em] md:text-4xl">{finalCta.text}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Button href={finalCta.primary.href} tone="light" size="lg">
                {finalCta.primary.label}
              </Button>
              <Button href={finalCta.secondary.href} tone="light" variant="text">
                {finalCta.secondary.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="grain relative isolate overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 -z-10 opacity-70" aria-hidden="true">
        <Ecosystem dim className="mx-auto h-full w-full max-w-[1100px]" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_50%,transparent_30%,rgba(10,10,11,0.9)_75%)]" aria-hidden="true" />
      <div className="container-x relative flex min-h-[90svh] flex-col items-center justify-center py-32 text-center">
        <Reveal>
          <Eyebrow index={index} label="Let's Build" className="justify-center" />
        </Reveal>
        <Lines lines={["Have a", "big idea?"]} className="display display-lg mt-10 uppercase text-paper" lineClassName="text-center" />
        <Reveal delay={0.15} className="mt-10">
          <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-paper/90 md:text-4xl">{finalCta.text}</p>
        </Reveal>
        <Reveal delay={0.25} className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          <Button href={finalCta.primary.href} tone="dark" size="lg">
            {finalCta.primary.label}
          </Button>
          <Button href={finalCta.secondary.href} tone="dark" variant="text">
            {finalCta.secondary.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- FORM ----------------------------------- */
type FormState = {
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

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  building: "",
  type: "",
  budget: "",
  timeline: "",
  message: "",
};

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  textarea,
  error,
  placeholder,
}: {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (k: keyof FormState, v: string) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  error?: string;
  placeholder?: string;
}) {
  const cls =
    "peer w-full border-0 border-b bg-transparent pb-3 pt-6 text-[17px] text-ink placeholder:text-ink/30 focus:outline-none focus:ring-0 transition-colors duration-300";
  return (
    <label className="relative block">
      <span className="absolute left-0 top-0 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute">
        {label}
        {required && <span className="text-signal"> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={3}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          className={cn(cls, "resize-none", error ? "border-signal" : "border-ink/20 focus:border-ink")}
          aria-invalid={!!error}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          className={cn(cls, error ? "border-signal" : "border-ink/20 focus:border-ink")}
          aria-invalid={!!error}
          autoComplete={name === "email" ? "email" : name === "name" ? "name" : name === "phone" ? "tel" : name === "company" ? "organization" : undefined}
        />
      )}
      {error && <span className="mt-1.5 block font-mono text-[10.5px] uppercase tracking-[0.16em] text-signal">{error}</span>}
    </label>
  );
}

function Chips({
  label,
  options,
  value,
  onSelect,
  optional,
}: {
  label: string;
  options: string[];
  value: string;
  onSelect: (v: string) => void;
  optional?: boolean;
}) {
  return (
    <fieldset>
      <legend className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute">
        {label}
        {optional && <span className="text-mute/70"> · optional</span>}
      </legend>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value === o;
          return (
            <button
              key={o}
              type="button"
              aria-pressed={on}
              onClick={() => onSelect(on ? "" : o)}
              className={cn(
                "border px-3.5 py-2 text-[13.5px] transition-colors duration-300",
                on ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink/80 hover:border-ink/60"
              )}
            >
              {o}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.building.trim()) e.building = "Tell us a little about it";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    const payload = { ...form, source: "navrasaitsolutions.com" };
    try {
      if (company.formEndpoint) {
        const res = await fetch(company.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        const lines = [
          `Name: ${form.name}`,
          `Company: ${form.company}`,
          `Email: ${form.email}`,
          `Phone: ${form.phone}`,
          `Project type: ${form.type || "—"}`,
          `Budget: ${form.budget || "—"}`,
          `Timeline: ${form.timeline || "—"}`,
          "",
          `What are you building?`,
          form.building,
          "",
          form.message,
        ];
        window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
          `New project enquiry — ${form.name}${form.company ? ` (${form.company})` : ""}`
        )}&body=${encodeURIComponent(lines.join("\n"))}`;
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-paper text-ink">
      <div className="container-x section-y">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-14">
          {/* left */}
          <div className="col-span-12 lg:col-span-5">
            <Eyebrow label="Project Inquiry" tone="light" />
            <Lines lines={["Start the", "conversation."]} className="display display-sm mt-8 uppercase text-ink" />
            <Reveal className="mt-8">
              <p className="max-w-[40ch] text-lg leading-relaxed text-ink/70">
                Tell us what you're building and where you are. Founders, operators and teams — every enquiry is read
                by the people who would actually build it.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-12">
              <dl className="border-t border-ink/10">
                <div className="grid grid-cols-12 gap-4 border-b border-ink/10 py-4">
                  <dt className="col-span-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute xl:col-span-3">Email</dt>
                  <dd className="col-span-8 xl:col-span-9">
                    <a href={`mailto:${company.email}`} className="text-[15px] text-ink underline-offset-4 hover:underline">
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-12 gap-4 border-b border-ink/10 py-4">
                  <dt className="col-span-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute xl:col-span-3">Phone</dt>
                  <dd className="col-span-8 flex flex-col gap-1 xl:col-span-9">
                    {company.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="text-[15px] text-ink underline-offset-4 hover:underline">
                        {p}
                      </a>
                    ))}
                  </dd>
                </div>
                <div className="grid grid-cols-12 gap-4 border-b border-ink/10 py-4">
                  <dt className="col-span-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute xl:col-span-3">Office</dt>
                  <dd className="col-span-8 text-[15px] text-ink xl:col-span-9">{company.location}</dd>
                </div>
                <div className="grid grid-cols-12 gap-4 border-b border-ink/10 py-4">
                  <dt className="col-span-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute xl:col-span-3">Hours</dt>
                  <dd className="col-span-8 text-[15px] text-ink xl:col-span-9">{company.hours}</dd>
                </div>
              </dl>

              <p className="mt-8 flex items-start gap-3 border border-ink/12 bg-paper-2 p-4 text-[14px] leading-relaxed text-ink/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />
                {company.responseTime}. Every enquiry is treated as confidential, and we sign an NDA on request.
              </p>

              <div className="mt-10">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute">Elsewhere</p>
                <SocialList tone="light" className="mt-4" />
              </div>
            </Reveal>
          </div>

          {/* form */}
          <div className="col-span-12 lg:col-span-7 lg:pl-8">
            <Reveal>
              {status === "sent" ? (
                <div className="flex min-h-[480px] flex-col justify-between border border-ink/10 bg-paper-2 p-8 md:p-12">
                  <span className="flex h-12 w-12 items-center justify-center bg-ink text-paper">
                    <Check className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                      Thank you, {form.name.split(" ")[0]}.
                    </h3>
                    <p className="mt-4 max-w-[46ch] text-ink/70">
                      {company.formEndpoint
                        ? "Your enquiry is with us. We'll get back to you shortly to set up a conversation."
                        : "Your email client should have opened with the details pre-filled. If it didn't, write to us directly at "}
                      {!company.formEndpoint && (
                        <a href={`mailto:${company.email}`} className="text-ink underline underline-offset-4">
                          {company.email}
                        </a>
                      )}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setForm(initial);
                        setStatus("idle");
                      }}
                      className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-mute hover:text-ink"
                    >
                      Send another →
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="flex flex-col gap-10">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                    <Field label="Name" name="name" value={form.name} onChange={set} required error={errors.name} placeholder="Your name" />
                    <Field label="Company" name="company" value={form.company} onChange={set} placeholder="Company or startup" />
                    <Field label="Email" name="email" type="email" value={form.email} onChange={set} required error={errors.email} placeholder="you@company.com" />
                    <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={set} placeholder="+91" />
                  </div>
                  <Field
                    label="What are you building?"
                    name="building"
                    value={form.building}
                    onChange={set}
                    required
                    textarea
                    error={errors.building}
                    placeholder="A sentence or two is enough — the problem, the users, the ambition."
                  />
                  <Chips label="Project type" options={contactForm.projectTypes} value={form.type} onSelect={(v) => set("type", v)} />
                  <Chips label="Budget" options={contactForm.budgets} value={form.budget} onSelect={(v) => set("budget", v)} optional />
                  <Chips label="Timeline" options={contactForm.timelines} value={form.timeline} onSelect={(v) => set("timeline", v)} optional />
                  <Field label="Message" name="message" value={form.message} onChange={set} textarea placeholder="Anything else we should know?" />

                  <div className="flex flex-wrap items-center justify-between gap-6 border-t border-ink/10 pt-8">
                    <p className="max-w-[36ch] font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.16em] text-mute">
                      No obligation. We'll reply with honest thoughts on scope, approach and fit.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group inline-flex h-14 items-center gap-3 bg-ink px-7 text-[15px] font-medium text-paper transition-colors duration-300 hover:bg-black disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending…" : "Start the Conversation"}
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-1" strokeWidth={1.75} />
                    </button>
                  </div>
                  {status === "error" && (
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                      Something went wrong. Please email us directly at {company.email}.
                    </p>
                  )}
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
