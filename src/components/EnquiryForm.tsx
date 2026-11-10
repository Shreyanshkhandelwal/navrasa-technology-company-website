import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { cn } from "@/utils/cn";
import { company, contactForm } from "@/data/site";
import { trackEvent } from "@/utils/analytics";

type FormMode = "contact" | "project";
export type EnquiryFormProps = { compact?: boolean; mode?: FormMode };
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
type FormField = keyof FormState;
type FieldErrors = Partial<Record<FormField, string>>;
type FieldProps = {
  compact: boolean;
  label: string;
  name: FormField;
  value: string;
  onChange: (name: FormField, value: string) => void;
  type?: string;
  required?: boolean;
  optional?: boolean;
  textarea?: boolean;
  error?: string;
  placeholder?: string;
};

const whatsappHref = `https://wa.me/917014686805?text=${encodeURIComponent(
  "Hi NavRasa Team, I just submitted a project enquiry on your website and would like to discuss my requirements."
)}`;

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
  compact,
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  optional = false,
  textarea = false,
  error,
  placeholder,
}: FieldProps) {
  const controlClass = compact
    ? "min-h-12 w-full rounded-[2px] border border-ink/15 bg-[#fdfcf8] px-3.5 py-3 text-[15px] text-[#292929] outline-none transition-colors placeholder:text-[#777777] focus:border-signal focus:ring-1 focus:ring-signal/20"
    : "w-full border border-ink/15 bg-transparent px-4 py-3 text-base text-ink placeholder:text-ink/40 transition-colors focus:border-signal focus:outline-none";
  const errorId = `${name}-error`;
  const autoComplete =
    name === "email" ? "email" : name === "name" ? "name" : name === "phone" ? "tel" : undefined;

  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-1 text-signal" aria-hidden="true">*</span>}
        {optional && <span className="ml-1 text-xs font-normal text-ink/50">(optional)</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={compact ? 3 : 4}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(name, event.target.value)}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(controlClass, "resize-y leading-relaxed", error && "border-signal")}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(name, event.target.value)}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(controlClass, error && "border-signal")}
        />
      )}
      {error && (
        <span id={errorId} className="mt-1.5 block text-sm text-signal" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}

function SelectField({
  compact,
  label,
  placeholder,
  options,
  value,
  onChange,
  required = false,
  optional = false,
  error,
}: {
  compact: boolean;
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  optional?: boolean;
  error?: string;
}) {
  const errorId = "service-error";

  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-1 text-signal" aria-hidden="true">*</span>}
        {optional && <span className="ml-1 text-xs font-normal text-ink/50">(optional)</span>}
      </span>
      <span className="relative block">
        <select
          name="type"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "min-h-12 w-full appearance-none rounded-[2px] border bg-[#fdfcf8] px-3.5 py-3 pr-10 text-[15px] text-[#292929] outline-none transition-colors focus:border-signal focus:ring-1 focus:ring-signal/20",
            compact ? "border-ink/15" : "border-ink/15",
            !value && "text-[#777777]",
            error && "border-signal"
          )}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#777777]"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </span>
      {error && (
        <span id={errorId} className="mt-1.5 block text-sm text-signal" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}

export function EnquiryForm({ compact = false, mode = "project" }: EnquiryFormProps) {
  const isProject = mode === "project";
  const reduceMotion = useReducedMotion();
  const submissionPending = useRef(false);
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (key: FormField, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
    if (key === "type" && errors.type) setErrors((current) => ({ ...current, type: undefined }));
  };

  const validate = (target: "contact" | "contact-info" | "project-info") => {
    const next: FieldErrors = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) next.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.phone.trim()) {
      const phoneDigits = form.phone.replace(/\D/g, "").length;
      if (phoneDigits < 7 || phoneDigits > 15) next.phone = "Enter a valid phone number, or leave it blank.";
    }

    if (target === "contact") {
      if (!form.message.trim()) next.message = "Enter a message.";
    } else if (target === "project-info") {
      if (!form.type) next.type = "Choose a service.";
      if (!form.building.trim()) next.building = "Add a short project description.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const continueToProject = () => {
    if (!validate("contact-info")) return;
    setStep(2);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionPending.current || !validate(isProject ? "project-info" : "contact")) return;
    setStatus("sending");
    submissionPending.current = true;

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, mode }),
      });
      const result = (await response.json().catch(() => null)) as { success?: boolean } | null;
      if (!response.ok || result?.success !== true) throw new Error("The enquiry service did not confirm receipt.");
    } catch (error) {
      setStatus("error");
      console.error("Unable to submit the enquiry form.", error);
      return;
    } finally {
      submissionPending.current = false;
    }

    setStatus("sent");
    trackEvent("enquiry_form_submitted", {
      form_location: compact ? "popup" : mode === "contact" ? "contact_page" : "project_form",
    });
  };

  if (status === "sent") {
    return (
      <motion.section
        aria-labelledby="enquiry-success-title"
        aria-live="polite"
        role="status"
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={cn("border border-ink/10 bg-paper-2", compact ? "p-5 sm:p-7" : "p-6 sm:p-8 lg:p-10")}
      >
        <span className="flex h-12 w-12 items-center justify-center bg-ink text-paper">
          <Check className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <p className="mt-6 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute">ENQUIRY RECEIVED</p>
        <h2 id="enquiry-success-title" className="display mt-3 max-w-[18ch] text-3xl font-semibold uppercase leading-[0.98] tracking-[-0.04em] text-ink sm:text-4xl">
          THANK YOU. LET&apos;S BUILD SOMETHING GREAT.
        </h2>
        <p className="mt-5 max-w-[54ch] text-sm leading-relaxed text-ink/70 sm:text-base">
          Your project enquiry has been submitted successfully. Our team will review your requirements and get in touch with you shortly.
        </p>

        <div className="mt-8 border-t border-ink/10 pt-6">
          <h3 className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute">IN A HURRY?</h3>
          <p className="mt-2 text-base leading-relaxed text-ink/75">Let&apos;s discuss your project directly on WhatsApp.</p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center bg-ink px-5 text-center text-[11px] font-medium tracking-[0.08em] text-paper transition-colors hover:bg-black sm:w-auto sm:text-xs"
          >
            CHAT WITH US ON WHATSAPP <span className="ml-2 text-base" aria-hidden="true">→</span>
          </a>
          <p className="mt-3 text-sm text-ink/55">+91 7014686805</p>
        </div>
      </motion.section>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-5"
    >
      {isProject && (
        <div aria-label={`Step ${step} of 2`} className="mb-1">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-ink">{step === 1 ? "Your contact details" : "Project details"}</span>
            <span className="text-ink/55">Step {step} of 2</span>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2" aria-hidden="true">
            <span className={cn("h-1 rounded-full", step >= 1 ? "bg-signal" : "bg-ink/10")} />
            <span className={cn("h-1 rounded-full", step >= 2 ? "bg-signal" : "bg-ink/10")} />
          </div>
        </div>
      )}

      {(!isProject || step === 1) && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field compact={compact} label="Name" name="name" value={form.name} onChange={set} required error={errors.name} placeholder="Your name" />
          <Field compact={compact} label="Email" name="email" type="email" value={form.email} onChange={set} required error={errors.email} placeholder="you@example.com" />
          <Field compact={compact} label="Phone" name="phone" type="tel" value={form.phone} onChange={set} optional placeholder="+91" />
        </div>
      )}

      {isProject && step === 2 ? (
        <>
          <SelectField
            compact={compact}
            label="Service required"
            placeholder="Choose a service"
            options={contactForm.projectTypes}
            value={form.type}
            onChange={(value) => set("type", value)}
            required
            error={errors.type}
          />
          <Field
            compact={compact}
            label="Project description"
            name="building"
            value={form.building}
            onChange={set}
            required
            textarea
            error={errors.building}
            placeholder="What are you looking to build?"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <SelectField
              compact={compact}
              label="Budget"
              placeholder="Select a range"
              options={contactForm.budgets}
              value={form.budget}
              onChange={(value) => set("budget", value)}
              optional
            />
            <SelectField
              compact={compact}
              label="Expected timeline"
              placeholder="Select a timeline"
              options={contactForm.timelines}
              value={form.timeline}
              onChange={(value) => set("timeline", value)}
              optional
            />
          </div>
        </>
      ) : !isProject ? (
        <Field
          compact={compact}
          label="Message"
          name="message"
          value={form.message}
          onChange={set}
          required
          textarea
          error={errors.message}
          placeholder="How can we help?"
        />
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-4">
        <p className="max-w-[34ch] text-xs leading-relaxed text-ink/55">
          Your details are kept confidential and used only to respond to your enquiry.
        </p>
        {isProject && step === 1 ? (
          <button
            type="button"
            onClick={continueToProject}
            className="inline-flex min-h-12 items-center gap-3 bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-black"
          >
            Continue <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : (
          <div className="flex items-center gap-4">
            {isProject && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex min-h-12 items-center gap-2 px-2 text-sm font-medium text-ink/70 hover:text-ink"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back
              </button>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex min-h-12 items-center gap-3 bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-black disabled:cursor-wait disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : mode === "contact" ? "Send message" : "Send project enquiry"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-signal" role="alert">
          We couldn’t submit your enquiry. Your details are still here. Please try again or email us at{" "}
          <a className="underline underline-offset-2" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
