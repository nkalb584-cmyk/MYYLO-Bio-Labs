"use client";

import { useState } from "react";

export default function CoaLookup() {
  const [batch, setBatch] = useState("");
  const [searched, setSearched] = useState<string | null>(null);

  return (
    <div className="card p-6">
      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: query your batch/COA database or storage bucket here.
          setSearched(batch.trim());
        }}
      >
        <div className="flex-1">
          <label htmlFor="batch" className="label">
            Batch number
          </label>
          <input
            id="batch"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            placeholder="e.g. MY-2026-0001"
            className="input"
            required
          />
        </div>
        <button type="submit" className="btn-primary self-end">
          Look up COA
        </button>
      </form>
      {searched && (
        <p role="status" className="mt-4 rounded-lg bg-navy-50 p-3 text-sm text-navy-800">
          COA lookup is a placeholder. Batch &quot;{searched}&quot; was not searched. Connect this form to your batch
          records to return documents.
        </p>
      )}
    </div>
  );
}
