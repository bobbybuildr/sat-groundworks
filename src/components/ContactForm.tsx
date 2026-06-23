"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter your message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please provide at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setValues(initialValues);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-white/10 bg-slate-900/70 p-6">
      <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.08em] text-white">
        Send an Enquiry
      </h2>

      {submitted ? (
        <p className="rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-200">
          Thanks for your enquiry. Please call or email SAT for immediate assistance.
        </p>
      ) : null}

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-200">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
          className="w-full rounded-md border border-white/20 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-brand transition focus:ring-2"
        />
        {errors.name ? <p className="mt-1 text-xs text-brand">{errors.name}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
          className="w-full rounded-md border border-white/20 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-brand transition focus:ring-2"
        />
        {errors.email ? <p className="mt-1 text-xs text-brand">{errors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-200">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
          className="w-full rounded-md border border-white/20 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-brand transition focus:ring-2"
        />
        {errors.phone ? <p className="mt-1 text-xs text-brand">{errors.phone}</p> : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-md border border-white/20 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-brand transition focus:ring-2"
        />
        {errors.message ? <p className="mt-1 text-xs text-brand">{errors.message}</p> : null}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-brand-soft"
      >
        Submit Enquiry
      </button>
    </form>
  );
}
