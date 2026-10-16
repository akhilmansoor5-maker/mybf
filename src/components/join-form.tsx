"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, Send } from "lucide-react";
import { site } from "@/lib/site";

const roles = [
  "Startup founder",
  "Business owner",
  "Student with a business idea",
  "Professional / mentor",
  "Investor",
  "Other",
];

type Errors = Partial<Record<"name" | "phone" | "role", string>>;

const fieldClasses =
  "min-h-12 w-full rounded-xl border border-white/12 bg-ink-900/60 px-4 text-base text-white placeholder:text-cloud-400 transition-colors focus:border-accent-500 focus:outline-none";

export function JoinForm() {
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const role = String(data.get("role") ?? "");
    const business = String(data.get("business") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!/^[\d\s+()-]{8,}$/.test(phone)) {
      nextErrors.phone = "Enter a phone number we can reach you on.";
    }
    if (!role) nextErrors.role = "Select the option that fits you best.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = (Object.keys(nextErrors) as Array<keyof Errors>)[0];
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    const lines = [
      `Hello MYBF, I'd like to join the community.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      `I am a: ${role}`,
      business ? `Business / idea: ${business}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);

    window.open(
      `https://wa.me/${site.phoneHref.replace(/\D/g, "")}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            className={fieldClasses}
          />
        </Field>

        <Field id="phone" label="Phone / WhatsApp" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 00000 00000"
            aria-invalid={Boolean(errors.phone)}
            className={fieldClasses}
          />
        </Field>

        <Field id="email" label="Email" hint="Optional">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClasses}
          />
        </Field>

        <Field id="role" label="I am a" required error={errors.role}>
          <div className="relative">
            <select
              id="role"
              name="role"
              defaultValue=""
              aria-invalid={Boolean(errors.role)}
              className={`${fieldClasses} appearance-none pr-11`}
            >
              <option value="" disabled>
                Select one
              </option>
              {roles.map((role) => (
                <option key={role} value={role} className="bg-ink-800">
                  {role}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-4 size-4.5 -translate-y-1/2 text-cloud-400"
            />
          </div>
        </Field>
      </div>

      <Field id="business" label="Business or idea" hint="Optional">
        <input
          id="business"
          name="business"
          type="text"
          placeholder="What are you building?"
          className={fieldClasses}
        />
      </Field>

      <Field id="message" label="Anything else?" hint="Optional">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us what you're looking for from MYBF."
          className={`${fieldClasses} min-h-28 resize-y py-3 leading-relaxed`}
        />
      </Field>

      <button
        type="submit"
        className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-accent-600 px-7 text-base font-semibold text-white transition-colors hover:bg-accent-500"
      >
        <Send className="size-4.5" />
        Send on WhatsApp
      </button>

      <p className="text-sm leading-relaxed text-cloud-400">
        Your details open a prefilled WhatsApp message to the MYBF team — nothing is stored on this
        site. Prefer email?{" "}
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent("MYBF membership enquiry")}`}
          className="inline-flex items-center gap-1 font-medium text-accent-400 underline decoration-accent-600/40 underline-offset-4 transition-colors hover:text-accent-300"
        >
          {site.email}
          <ArrowUpRight className="size-3.5" />
        </a>
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex items-baseline gap-2 text-sm font-medium text-cloud-200">
        {label}
        {required ? (
          <span className="text-accent-400" aria-hidden="true">
            *
          </span>
        ) : null}
        {hint ? <span className="text-xs font-normal text-cloud-400">{hint}</span> : null}
      </label>
      {children}
      <p aria-live="polite" className="min-h-0 text-sm text-red-300">
        {error}
      </p>
    </div>
  );
}
