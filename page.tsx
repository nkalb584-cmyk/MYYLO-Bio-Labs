import type { Metadata } from "next";
import CoaLookup from "@/components/CoaLookup";

export const metadata: Metadata = {
  title: "Quality & Certificates of Analysis",
  description:
    "How MYYLO bio Labs verifies peptide purity and identity with HPLC and mass spectrometry, and how to look up a Certificate of Analysis by batch number.",
};

const blocks = [
  {
    t: "HPLC purity testing",
    d: "High-performance liquid chromatography separates the target peptide from synthesis-related impurities. The peak area of the target compound relative to total peak area gives the purity percentage. Our specification is 98% or higher.",
  },
  {
    t: "Mass spectrometry",
    d: "Mass spectrometry measures the molecular mass of each peptide and compares it to the theoretical value, confirming that the compound matches its expected sequence.",
  },
  {
    t: "Batch tracking",
    d: "Every lot carries a unique batch number printed on the vial label and recorded on its Certificate of Analysis, so analytical results can be traced to the exact material you receive.",
  },
];

export default function QualityPage() {
  return (
    <div className="container-page max-w-4xl py-12">
      <h1 className="text-4xl font-bold">Quality & Certificates of Analysis</h1>
      <p className="mt-3 max-w-2xl text-slate-700">
        Analytical documentation is part of every order, so your lab can verify what it is working with.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {blocks.map((b) => (
          <section key={b.t} className="card p-6">
            <div className="h-1 w-10 rounded bg-teal-600" />
            <h2 className="mt-4 text-lg font-semibold">{b.t}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{b.d}</p>
          </section>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Find your COA</h2>
        <p className="mb-5 mt-2 text-sm text-slate-700">Enter the batch number printed on your vial label.</p>
        <CoaLookup />
      </section>
    </div>
  );
}
