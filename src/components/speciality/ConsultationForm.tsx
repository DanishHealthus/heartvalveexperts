"use client";

import { useId, useRef, useState } from "react";
import type { ConsultationLead } from "@/lib/speciality/types";
import { ArrowIcon } from "./ui";

type FieldName = "name" | "phone" | "city" | "notes";

type FormValues = Record<FieldName, string>;

type FieldErrors = Partial<Record<FieldName, string>>;

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: FormValues = { name: "", phone: "", city: "", notes: "" };

/**
 * Indian mobile numbers: ten digits starting 6-9, optionally written with a
 * +91 / 91 / 0 prefix and any mix of spaces, dashes or brackets.
 */
export function normalizeIndianPhone(input: string): string | null {
  const digits = input.replace(/\D/g, "");
  let local = digits;

  if (local.length === 12 && local.startsWith("91")) local = local.slice(2);
  else if (local.length === 11 && local.startsWith("0")) local = local.slice(1);
  else if (local.length === 13 && local.startsWith("091")) local = local.slice(3);

  return /^[6-9]\d{9}$/.test(local) ? local : null;
}

export function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  const name = values.name.trim();
  if (!name) errors.name = "Please enter your full name.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";
  else if (!/[a-zA-Zऀ-ॿ]/.test(name)) errors.name = "Please enter a valid name.";

  const phone = values.phone.trim();
  if (!phone) errors.phone = "Please enter your phone or WhatsApp number.";
  else if (!normalizeIndianPhone(phone))
    errors.phone = "Enter a valid 10-digit Indian mobile number.";

  const city = values.city.trim();
  if (!city) errors.city = "Please enter your city.";
  else if (city.length < 2) errors.city = "City must be at least 2 characters.";

  if (values.notes.trim().length > 1000) errors.notes = "Please keep notes under 1000 characters.";

  return errors;
}

export interface ConsultationFormProps {
  /**
   * Where the lead is posted. Supplied by the page so this component is not
   * bound to any particular backend.
   */
  endpoint: string;
  /** Optional client-side override — wins over `endpoint` when provided. */
  onSubmitLead?: (lead: ConsultationLead) => Promise<void>;
  specialitySlug: string;
  specialityName: string;
  heading?: string;
  subheading?: string;
  submitLabel?: string;
  footnote?: string;
  /** Visual treatment: the hero card is elevated, the inline one sits flat. */
  variant?: "card" | "inline";
  /**
   * Brand gradient top bar + icon medallion beside the heading. Opt-in and
   * used only by the hero instance, so the repeated form further down the
   * page keeps its plainer look.
   */
  accent?: boolean;
  className?: string;
}

export default function ConsultationForm({
  endpoint,
  onSubmitLead,
  specialitySlug,
  specialityName,
  heading = "Consultation + Report Review",
  subheading = "Share a few details and our team will call you back.",
  submitLabel = "Request a Call Back",
  footnote = "Your details stay private. We usually reply within one working day.",
  variant = "card",
  accent = false,
  className = "",
}: ConsultationFormProps) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState("");

  const fieldId = (name: FieldName) => `${uid}-${name}`;
  const errorId = (name: FieldName) => `${uid}-${name}-error`;

  const showError = (name: FieldName) =>
    Boolean(errors[name]) && (touched[name] || status === "error");

  function update(name: FieldName, value: string) {
    setValues((prev) => {
      const next = { ...prev, [name]: value };
      // Re-validate a field that has already shown an error so it clears as you type.
      if (errors[name]) setErrors(validate(next));
      return next;
    });
  }

  function blur(name: FieldName) {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return; // guards double submit / Enter spam

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, phone: true, city: true, notes: true });

    const firstInvalid = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstInvalid) {
      setStatus("error");
      setSubmitError("");
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(fieldId(firstInvalid))}`)?.focus();
      return;
    }

    const lead: ConsultationLead = {
      name: values.name.trim(),
      phone: normalizeIndianPhone(values.phone) ?? values.phone.trim(),
      city: values.city.trim(),
      notes: values.notes.trim(),
      speciality: specialitySlug,
      help: specialityName || specialitySlug,
      source: `speciality/${specialitySlug}`,
    };

    setStatus("submitting");
    setSubmitError("");

    try {
      if (onSubmitLead) {
        await onSubmitLead(lead);
      } else {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      }
      setStatus("success");
      setValues(EMPTY);
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error("[consultation] submit failed", error);
      setStatus("error");
      setSubmitError("We could not send your request. Please try again or call us directly.");
    }
  }

  const isCard = variant === "card";
  // Figma card is 500 x 433 with the 400-wide form inset 50px each side and
  // 27px of padding above the title / below the footnote.
  const shell = isCard
    ? `relative overflow-hidden rounded-[20px] bg-white p-6 sm:p-8 lg:px-[50px] lg:py-[27px] shadow-[0_24px_60px_-28px_rgba(14,32,51,0.45)] ring-1 ring-[#e2ecf6]`
    : "rounded-[20px] bg-white/95 p-6 sm:p-8 ring-1 ring-[#e2ecf6]";

  const accentBar = accent ? (
    <span
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-[5px] bg-[linear-gradient(90deg,#0074dd_0%,#97323b_100%)]"
    />
  ) : null;

  if (status === "success") {
    return (
      <div className={`${shell} ${className}`}>
        {accentBar}
        <div role="status" aria-live="polite" className="text-center">
          <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f5ec] text-[#1f8a4c]">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
              <path
                d="m5 12.5 4.5 4.5L19 7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="text-[20px] font-semibold">Thank you we have your details</h3>
          <p className="mt-2 text-[15px] leading-relaxed">
            Our coordinator will call you to arrange your consultation and report review.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-5 inline-flex h-[45px] items-center justify-center rounded-full border border-[#0074dd] px-7 text-[15px] font-medium text-[#0074dd] transition-colors hover:bg-[#0074dd] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0074dd] focus-visible:ring-offset-2"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className={`${shell} ${className}`}>
      {accentBar}
      {heading ? (
        <div className="flex items-center gap-3">
          {accent ? (
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eaf3fc] text-[#0074dd]"
            >
              <HeartPulseIcon className="h-[18px] w-[18px]" />
            </span>
          ) : null}
          <h2 className="text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] font-semibold leading-[1.35]">{heading}</h2>
        </div>
      ) : null}
      {subheading ? <p className="mt-[5px] text-[14px] leading-[1.36]">{subheading}</p> : null}

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="mt-[13px] grid gap-[10px]">
        <Field
          name="name"
          label="Full name"
          placeholder="Full name"
          value={values.name}
          error={showError("name") ? errors.name : undefined}
          onChange={update}
          onBlur={blur}
          fieldId={fieldId}
          errorId={errorId}
          autoComplete="name"
        />

        <Field
          name="phone"
          label="Phone / WhatsApp"
          placeholder="Phone / WhatsApp"
          value={values.phone}
          error={showError("phone") ? errors.phone : undefined}
          onChange={update}
          onBlur={blur}
          fieldId={fieldId}
          errorId={errorId}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
        />

        <Field
          name="city"
          label="City"
          placeholder="City"
          value={values.city}
          error={showError("city") ? errors.city : undefined}
          onChange={update}
          onBlur={blur}
          fieldId={fieldId}
          errorId={errorId}
          autoComplete="address-level2"
        />

        <Field
          name="notes"
          label="Notes (optional)"
          placeholder="Notes (optional)"
          value={values.notes}
          error={showError("notes") ? errors.notes : undefined}
          onChange={update}
          onBlur={blur}
          fieldId={fieldId}
          errorId={errorId}
          multiline
          optional
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
          className="inline-flex h-[45px] w-full items-center justify-center gap-2 rounded-full bg-[#0074dd] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#005cb2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0074dd] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Spinner />
              <span>Sending…</span>
            </>
          ) : (
            <>
              <span>{submitLabel}</span>
              <ArrowIcon className="h-4 w-4" />
            </>
          )}
        </button>

        {submitError ? (
          <p
            role="alert"
            className="rounded-lg bg-[#fdecec] px-3 py-2 text-[13px] font-medium text-[#b3261e]"
          >
            {submitError}
          </p>
        ) : null}

        {footnote ? <p className="text-center text-[12px] leading-relaxed text-[#7d8da0]">{footnote}</p> : null}
      </form>
    </div>
  );
}

/** Decorative medallion icon for the hero card's `accent` heading. */
function HeartPulseIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.5 12h4l2-4.5 3 9 2-6.5 1.5 2h6.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

interface FieldProps {
  name: FieldName;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (name: FieldName, value: string) => void;
  onBlur: (name: FieldName) => void;
  fieldId: (name: FieldName) => string;
  errorId: (name: FieldName) => string;
  type?: string;
  inputMode?: "text" | "tel";
  autoComplete?: string;
  multiline?: boolean;
  optional?: boolean;
}

function Field({
  name,
  label,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
  fieldId,
  errorId,
  type = "text",
  inputMode,
  autoComplete,
  multiline = false,
  optional = false,
}: FieldProps) {
  const invalid = Boolean(error);
  const base = `w-full rounded-[10px] border bg-white px-[15px] text-[15px] text-[#0e2033] placeholder:text-[#8a9aac] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0074dd]/35 ${
    invalid ? "border-[#d93025] focus:border-[#d93025]" : "border-[#dbe6f1] focus:border-[#0074dd]"
  }`;

  return (
    <div>
      <label htmlFor={fieldId(name)} className="sr-only">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={fieldId(name)}
          name={name}
          rows={2}
          placeholder={placeholder}
          value={value}
          required={!optional}
          aria-required={optional ? undefined : true}
          aria-invalid={invalid || undefined}
          aria-describedby={invalid ? errorId(name) : undefined}
          onChange={(event) => onChange(name, event.target.value)}
          onBlur={() => onBlur(name)}
          className={`${base} h-[74px] min-h-[74px] resize-y py-[11px] leading-[1.5]`}
        />
      ) : (
        <input
          id={fieldId(name)}
          name={name}
          type={type}
          inputMode={inputMode}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          required={!optional}
          aria-required={optional ? undefined : true}
          aria-invalid={invalid || undefined}
          aria-describedby={invalid ? errorId(name) : undefined}
          onChange={(event) => onChange(name, event.target.value)}
          onBlur={() => onBlur(name)}
          className={`${base} h-[41px]`}
        />
      )}
      {invalid ? (
        <p id={errorId(name)} className="mt-1 text-[12.5px] font-medium text-[#d93025]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
