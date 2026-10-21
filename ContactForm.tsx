"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div role="status" className="card p-8 text-center">
        <h2 className="text-xl font-semibold">Message received</h2>
        <p className="mt-2 text-sm text-slate-700">Thank you. We will respond within 1-2 business days.</p>
      </div>
    );
  }

  return (
    <form
      className="card space-y-5 p-6"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: POST to your API route or email service.
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className="input" />
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className="input" />
        </div>
      </div>
      <div>
        <label htmlFor="institution" className="label">
          Institution
        </label>
        <input id="institution" name="institution" required autoComplete="organization" className="input" />
      </div>
      <div>
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea id="message" name="message" rows={6} required className="input" />
      </div>
      <button type="submit" className="btn-primary">
        Send message
      </button>
    </form>
  );
}
