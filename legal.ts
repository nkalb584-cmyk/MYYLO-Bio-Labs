export interface LegalDoc {
  slug: string;
  title: string;
  description: string;
  sections: { h: string; p: string[] }[];
}

/**
 * TEMPLATE TEXT ONLY. Have a qualified attorney review and adapt these documents
 * to your business, jurisdiction, and products before launch.
 */
export const legalDocs: LegalDoc[] = [
  {
    slug: "terms",
    title: "Terms of Sale",
    description: "Terms governing purchases from MYYLO bio Labs.",
    sections: [
      {
        h: "1. Eligibility",
        p: [
          "Purchases are limited to individuals aged 21 or older who are qualified researchers acting on behalf of a laboratory or research institution.",
          "By placing an order you represent that you meet these requirements.",
        ],
      },
      {
        h: "2. Research use only",
        p: [
          "All products are sold for in-vitro research and laboratory use only. They are not drugs, supplements, or cosmetics, and are not intended for human or animal consumption, or to diagnose, treat, cure, or prevent any disease.",
        ],
      },
      {
        h: "3. Orders and pricing",
        p: [
          "Prices are listed in US dollars and may change without notice. We may decline or cancel any order, including orders that we reasonably believe do not comply with these terms.",
        ],
      },
      {
        h: "4. Buyer responsibility",
        p: [
          "The buyer is responsible for safe handling, storage, and lawful use of all materials, and for compliance with all applicable laws and institutional policies.",
        ],
      },
      {
        h: "5. Limitation of liability",
        p: [
          "To the fullest extent permitted by law, MYYLO bio Labs is not liable for indirect or consequential damages arising from the purchase or use of its products. Products are provided without warranty beyond conformance with the stated specifications on the Certificate of Analysis.",
        ],
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    description: "How MYYLO bio Labs collects and uses personal information.",
    sections: [
      {
        h: "Information we collect",
        p: [
          "We collect information you provide when placing orders, contacting us, or subscribing to updates, such as your name, email, shipping address, and institution.",
        ],
      },
      {
        h: "How we use information",
        p: [
          "We use your information to process orders, provide batch documentation, respond to inquiries, and meet legal obligations.",
        ],
      },
      {
        h: "Local storage",
        p: [
          "This site uses your browser's local storage to remember your cart contents and your acknowledgement of our research-use requirement. No payment data is stored in local storage.",
        ],
      },
      {
        h: "Your choices",
        p: ["Contact us to request access to, correction of, or deletion of your personal information."],
      },
    ],
  },
  {
    slug: "shipping-returns",
    title: "Shipping & Returns",
    description: "Shipping timelines and return conditions at MYYLO bio Labs.",
    sections: [
      {
        h: "Shipping",
        p: [
          "Orders typically ship within 1-2 business days. Orders over $200 ship free within the United States; a flat rate applies to smaller orders.",
          "We ship only to addresses where the sale and receipt of these materials is lawful.",
        ],
      },
      {
        h: "Returns",
        p: [
          "Opened, used, or temperature-compromised products cannot be returned. If an order arrives damaged or incorrect, contact us within 7 days of delivery with your order number and photos so we can arrange a replacement or refund.",
        ],
      },
    ],
  },
  {
    slug: "research-use",
    title: "Research Use Policy",
    description: "Permitted uses of MYYLO bio Labs products.",
    sections: [
      {
        h: "Permitted use",
        p: [
          "Products are supplied solely for in-vitro research and laboratory use by qualified professionals.",
        ],
      },
      {
        h: "Prohibited use",
        p: [
          "Products must not be used in or on humans or animals, or for food, drug, supplement, or cosmetic purposes. Resale or redistribution to persons who have not agreed to this policy is prohibited.",
        ],
      },
      {
        h: "No instructions for use",
        p: [
          "MYYLO bio Labs does not provide dosing, administration, or usage instructions, and makes no health, therapeutic, or cosmetic claims about any product.",
        ],
      },
    ],
  },
];

export const getLegalDoc = (slug: string) => legalDocs.find((d) => d.slug === slug);
