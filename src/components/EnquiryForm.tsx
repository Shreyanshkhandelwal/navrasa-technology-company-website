import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { cn } from "@/utils/cn";
import { company, contactForm } from "@/data/site";
import { trackEvent } from "@/utils/analytics";

export type EnquiryFormProps = { compact?: boolean };
type FormState = { name: string; company: string; email: string; phone: string; building: string; type: string; budget: string; timeline: string; message: string };
const initial: FormState = { name: "", company: "", email: "", phone: "", building: "", type: "", budget: "", timeline: "", message: "" };

function Field({ compact, label, name, value, onChange, type = "text", required, textarea, error, placeholder }: { compact?: boolean; label: string; name: keyof FormState; value: string; onChange: (k: keyof FormState, v: string) => void; type?: string; required?: boolean; textarea?: boolean; error?: string; placeholder?: string }) {
  const controlClass = compact
    ? "h-[46px] w-full rounded-[2px] border border-ink/15 bg-[#fdfcf8] px-3.5 text-[14px] text-[#292929] outline-none transition-colors placeholder:text-[#777777] focus:border-signal focus:ring-1 focus:ring-signal/20"
    : "peer w-full border-0 border-b bg-transparent pb-3 pt-6 text-[17px] text-ink placeholder:text-ink/30 focus:outline-none focus:ring-0 transition-colors duration-300";
  return (
    <label className={compact ? "block" : "relative block"}>
      <span className={compact ? "mb-2 block font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#333333]" : "absolute left-0 top-0 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute"}>
        {label}{required && <span className="ml-1 text-[#F15A24]">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} rows={compact ? 2 : 3} value={value} placeholder={placeholder} onChange={(e) => onChange(name, e.target.value)} required={required} className={cn(controlClass, compact ? "h-auto min-h-[70px] resize-none py-3" : "resize-none", error ? "border-signal" : compact ? undefined : "border-ink/20 focus:border-ink", "leading-relaxed")} aria-invalid={!!error} />
      ) : (
        <input name={name} type={type} value={value} placeholder={placeholder} required={required} onChange={(e) => onChange(name, e.target.value)} className={cn(controlClass, !compact && (error ? "border-signal" : "border-ink/20 focus:border-ink"))} aria-invalid={!!error} autoComplete={name === "email" ? "email" : name === "name" ? "name" : name === "phone" ? "tel" : name === "company" ? "organization" : undefined} />
      )}
      {error && <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-signal">{error}</span>}
    </label>
  );
}

function SelectField({ compact, label, placeholder, options, value, onChange, optional }: { compact?: boolean; label: string; placeholder: string; options: string[]; value: string; onChange: (value: string) => void; optional?: boolean }) {
  return (
    <label className={cn("block min-w-0", !compact && "relative")}>
      <span className={compact ? "mb-2 block font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#333333]" : "absolute left-0 top-0 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute"}>
        {label}{optional && <span className="normal-case tracking-normal text-[#777777]"> · optional</span>}
      </span>
      <span className="relative block">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={cn("h-[46px] w-full cursor-pointer appearance-none rounded-[2px] bg-[#fdfcf8] outline-none transition-colors [&>option]:bg-[#fdfcf8] [&>option]:text-[#292929]", compact ? "border border-ink/15 px-3.5 pr-10 text-[14px] text-[#292929] hover:border-ink/35 focus:border-signal focus:ring-1 focus:ring-signal/20" : "border-0 border-b border-ink/20 px-0 pb-3 pt-6 pr-8 text-[17px] text-[#292929] hover:border-ink/50 focus:border-signal", !value && "text-[#777777]")}
        >
          <option value="" className="text-[#777777]">{placeholder}</option>
          {options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#777777]" strokeWidth={1.5} aria-hidden="true" />
      </span>
    </label>
  );
}

export function EnquiryForm({ compact = false }: EnquiryFormProps) {
  const iframeName = `navrasa-enquiry-${useId().replace(/:/g, "")}`;
  const formRef = useRef<HTMLFormElement>(null);
  const submissionPending = useRef(false);
  const submissionTimer = useRef<number | undefined>(undefined);
  const iframeLoadedOnce = useRef(false);
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => () => { if (submissionTimer.current) window.clearTimeout(submissionTimer.current); }, []);

  const set = (key: keyof FormState, value: string) => { setForm((current) => ({ ...current, [key]: value })); if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined })); };
  const validate = () => { const next: typeof errors = {}; if (!form.name.trim()) next.name = "Please enter your name"; if (!form.email.trim()) next.email = "Email address is required"; else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address"; if (!form.building.trim()) next.building = "Tell us what you want to build"; setErrors(next); return Object.keys(next).length === 0; };
  const failSubmission = () => { if (!submissionPending.current) return; submissionPending.current = false; setStatus("error"); };
  const completeSubmission = () => { if (!iframeLoadedOnce.current) { iframeLoadedOnce.current = true; return; } if (!submissionPending.current) return; submissionPending.current = false; if (submissionTimer.current) window.clearTimeout(submissionTimer.current); setForm(initial); setStatus("sent"); };
  const onSubmit = (event: FormEvent) => { event.preventDefault(); if (!validate() || submissionPending.current) return; setStatus("sending"); submissionPending.current = true; trackEvent("enquiry_form_submitted", { form_location: compact ? "popup" : "contact_page" }); try { if (!formRef.current) throw new Error("Form unavailable"); formRef.current.submit(); submissionTimer.current = window.setTimeout(failSubmission, 10000); } catch { submissionPending.current = false; setStatus("error"); } };

  if (status === "sent") return <div className={cn("border border-ink/10 bg-paper-2", compact ? "p-5 md:p-7" : "p-6 md:p-10")}> <div className="flex items-center justify-between gap-4"><span className="flex h-12 w-12 items-center justify-center bg-ink text-paper"><Check className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" /></span><span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55"><span className="h-1.5 w-1.5 rounded-full bg-signal" />Submission Received</span></div><div className="mt-7"><p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-signal">ENQUIRY SUCCESSFULLY SUBMITTED</p><h3 className="display mt-4 max-w-[14ch] text-3xl font-semibold uppercase leading-[0.94] tracking-[-0.035em] text-[#111111] md:text-5xl">THANK YOU FOR REACHING OUT.</h3><p className="mt-5 font-display text-xl font-semibold tracking-[-0.02em] md:text-2xl">Let's build something meaningful.</p><p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-[#555555] md:text-base">Your project enquiry has been received by our team. We'll review your requirements and get in touch within one business day to discuss the next steps.</p></div><div className="mt-7 grid gap-4 border-t border-ink/10 pt-5 sm:grid-cols-[11rem_1fr] sm:items-start"><h4 className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute">WHAT HAPPENS NEXT?</h4><p className="text-[15px] leading-relaxed text-ink/70">Our team will review your project, understand your goals and connect with you to discuss how we can help.</p></div><button type="button" onClick={() => { setForm(initial); setStatus("idle"); }} className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink underline decoration-signal/50 underline-offset-8 hover:text-signal">SUBMIT ANOTHER ENQUIRY →</button></div>;

  const compactLabel = (label: string, fallback: string) => compact ? label : fallback;

  return (
    <form
      ref={formRef}
      action="https://docs.google.com/forms/d/e/1FAIpQLSe5qKD93-EzKeq4igm73ii860k-IlyO_otAo21bjkcSx0eR7g/formResponse"
      method="post"
      encType="application/x-www-form-urlencoded"
      target={iframeName}
      onSubmit={onSubmit}
      noValidate
      className={cn("flex flex-col", compact ? "gap-4" : "gap-10")}
    >
      <input type="hidden" name="entry.795717472" value={form.name} />
      <input type="hidden" name="entry.153567538" value={form.company} />
      <input type="hidden" name="entry.1946725407" value={form.email} />
      <input type="hidden" name="entry.1931039491" value={form.phone} />
      <input type="hidden" name="entry.589067015" value={form.building} />
      <input type="hidden" name="entry.1041755658" value={form.type} />
      <input type="hidden" name="entry.1996484321" value={form.budget} />
      <input type="hidden" name="entry.1274528727" value={form.timeline} />
      <input type="hidden" name="entry.1209479222" value={form.message} />

      <div className={cn("grid grid-cols-1", compact ? "gap-3 sm:grid-cols-2" : "gap-x-8 gap-y-8 sm:grid-cols-2")}>
        <Field compact={compact} label={compactLabel("Your Name", "Name")} name="name" value={form.name} onChange={set} required error={errors.name} placeholder="Your name" />
        <Field compact={compact} label={compactLabel("Company / Startup", "Company")} name="company" value={form.company} onChange={set} placeholder="Company or startup" />
        <Field compact={compact} label={compactLabel("Business Email", "Email")} name="email" type="email" value={form.email} onChange={set} required error={errors.email} placeholder="you@company.com" />
        <Field compact={compact} label={compactLabel("Phone", "Phone")} name="phone" type="tel" value={form.phone} onChange={set} placeholder="+91" />
      </div>

      <Field compact={compact} label={compactLabel("What Are You Building?", "What are you building?")} name="building" value={form.building} onChange={set} required textarea error={errors.building} placeholder="The problem, the users, the ambition…" />
      <div className={cn("grid grid-cols-1 gap-4", compact && "sm:grid-cols-2")}> 
        <SelectField compact={compact} label="Project Type" placeholder="Select Project Type" options={contactForm.projectTypes} value={form.type} onChange={(value) => set("type", value)} optional />
        <SelectField compact={compact} label="Budget" placeholder="Select Your Budget" options={contactForm.budgets} value={form.budget} onChange={(value) => set("budget", value)} optional />
      </div>
      <div className={cn("grid grid-cols-1", compact ? "sm:grid-cols-2" : "sm:grid-cols-2")}> 
        <SelectField compact={compact} label="Expected Timeline" placeholder="Select Expected Timeline" options={contactForm.timelines} value={form.timeline} onChange={(value) => set("timeline", value)} optional />
      </div>
      <Field compact={compact} label={compactLabel("Additional Message", "Message")} name="message" value={form.message} onChange={set} textarea placeholder="Anything else we should know?" />

      <div className={cn("flex flex-wrap items-center justify-between gap-4", compact ? "border-t border-ink/10 pt-4" : "border-t border-ink/10 pt-8")}>
        <p className={cn("max-w-[34ch] font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.13em]", compact ? "text-[#555555]" : "text-ink/45")}>
          Your details are kept confidential and used only to respond to your enquiry.
        </p>
        <button type="submit" disabled={status === "sending"} aria-live="polite" className="group inline-flex h-12 items-center gap-3 bg-ink px-6 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-black disabled:cursor-wait disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Submit Enquiry"}
          <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} />
        </button>
      </div>
      {status === "error" && <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">Something went wrong. Please email us directly at {company.email}.</p>}
      <iframe title="NavRasa enquiry submission" name={iframeName} src="about:blank" className="hidden" onLoad={completeSubmission} />
    </form>
  );
}
