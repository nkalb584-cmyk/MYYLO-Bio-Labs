export interface FaqGroup {
  title: string;
  items: { q: string; a: string }[];
}

export const faqGroups: FaqGroup[] = [
  {
    title: "Ordering & shipping",
    items: [
      {
        q: "Who can purchase from MYYLO bio Labs?",
        a: "Orders are limited to customers aged 21 or older who are qualified researchers purchasing for in-vitro laboratory use. You confirm this at checkout.",
      },
      {
        q: "How long does shipping take?",
        a: "Orders typically ship within 1-2 business days. Transit times depend on destination and carrier. Tracking details are emailed once your order ships.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes. Orders over $200 ship free within the United States. A flat rate applies below that amount.",
      },
    ],
  },
  {
    title: "Storage & handling",
    items: [
      {
        q: "How should I store the product on arrival?",
        a: "Store lyophilized product at -20°C, protected from light and moisture, until it is needed. Allow the vial to reach room temperature before opening to limit condensation.",
      },
      {
        q: "How should vials be handled in the lab?",
        a: "Follow your institution's chemical hygiene plan and standard laboratory safety practice, including appropriate personal protective equipment. Refer to the batch documentation for compound-specific information.",
      },
    ],
  },
  {
    title: "Reconstitution (general laboratory practice)",
    items: [
      {
        q: "How are lyophilized peptides typically prepared for in-vitro work?",
        a: "Solvent choice and concentration depend on the peptide's properties and your assay, and are set by your laboratory's own protocol. In general practice, sterile technique is used, solutions are prepared in appropriate sterile solvents or buffers, and stock solutions are aliquoted to avoid repeated freeze-thaw cycles.",
      },
      {
        q: "Do you provide protocols or usage instructions?",
        a: "No. MYYLO bio Labs does not provide dosing, administration, or usage instructions. Our products are for in-vitro laboratory research only and are not for human or animal consumption.",
      },
    ],
  },
  {
    title: "Quality & returns",
    items: [
      {
        q: "Do you provide a Certificate of Analysis?",
        a: "Every batch is accompanied by a Certificate of Analysis (COA) documenting HPLC purity and mass spectrometry identity confirmation. You can look up a COA by batch number on the Quality & COA page.",
      },
      {
        q: "What is your return policy?",
        a: "Because of the nature of research materials, opened or temperature-compromised products cannot be returned. If your order arrives damaged or incorrect, contact us within 7 days of delivery. See Shipping & Returns for details.",
      },
    ],
  },
];
