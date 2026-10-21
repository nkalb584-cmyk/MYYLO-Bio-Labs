"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  return (
    <form
      className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to your email provider (Mailchimp, Resend, etc.)
        setDone(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input id="newsletter-email" type="email" required placeholder="you@institution.edu" className="input" />
      <button type="submit" className="btn-accent shrink-0">
        Subscribe
      </button>
      {done && (
        <p role="status" className="text-sm text-teal-100 sm:hidden">
          Thanks for subscribing.
        </p>
      )}
    </form>
  );
}
