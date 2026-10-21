export type Category =
  | "Copper Peptides"
  | "Growth Hormone Secretagogues"
  | "Mitochondrial Peptides"
  | "Immune-Related Peptides"
  | "Neuropeptides"
  | "Antimicrobial Peptides"
  | "Tissue Repair Research Peptides";

export interface Product {
  id: string;
  slug: string;
  name: string;
  size: string;
  price: number; // USD, placeholder pricing
  category: Category;
  purity: string;
  description: string; // neutral, research-focused
  formula: string;
  molecularWeight: string;
  cas?: string;
  storage: string;
  inStock: boolean;
  featured?: boolean;
}

const STORAGE = "Store lyophilized at -20°C, protected from light and moisture.";

/**
 * PLACEHOLDER CATALOG.
 * Prices are invented. Verify formulas, molecular weights and CAS numbers
 * against your supplier's Certificate of Analysis before publishing.
 */
export const products: Product[] = [
  {
    id: "p01",
    slug: "ghk-cu-100mg",
    name: "GHK-Cu (Copper Peptide)",
    size: "100mg",
    price: 89,
    category: "Copper Peptides",
    purity: "≥98% (HPLC)",
    description:
      "GHK-Cu is a naturally occurring tripeptide (glycyl-L-histidyl-L-lysine) complexed with copper(II). It is studied in published in-vitro and preclinical research as a copper-binding peptide in cell culture and extracellular matrix models.",
    formula: "C14H22CuN6O4",
    molecularWeight: "~401.9 g/mol (complex)",
    cas: "89030-95-5",
    storage: STORAGE,
    inStock: true,
    featured: true,
  },
  {
    id: "p02",
    slug: "bpc-157-10mg",
    name: "BPC-157",
    size: "10mg",
    price: 54,
    category: "Tissue Repair Research Peptides",
    purity: "≥98% (HPLC)",
    description:
      "BPC-157 is a synthetic 15-amino-acid peptide derived from a sequence found in gastric juice protein. It appears in published preclinical literature examining cell migration and signaling pathways in laboratory models.",
    formula: "C62H98N16O22",
    molecularWeight: "1419.5 g/mol",
    cas: "137525-51-0",
    storage: STORAGE,
    inStock: true,
    featured: true,
  },
  {
    id: "p03",
    slug: "tb-500-10mg",
    name: "TB-500 (Thymosin Beta-4 fragment)",
    size: "10mg",
    price: 68,
    category: "Tissue Repair Research Peptides",
    purity: "≥98% (HPLC)",
    description:
      "TB-500 is a synthetic peptide fragment related to thymosin beta-4, an actin-binding protein. It is studied in laboratory research on actin dynamics and cell motility in in-vitro systems.",
    formula: "C212H350N56O78S",
    molecularWeight: "~4963 g/mol",
    storage: STORAGE,
    inStock: true,
    featured: true,
  },
  {
    id: "p04",
    slug: "cjc-1295-no-dac-5mg",
    name: "CJC-1295 (no DAC)",
    size: "5mg",
    price: 62,
    category: "Growth Hormone Secretagogues",
    purity: "≥98% (HPLC)",
    description:
      "CJC-1295 without DAC (also called Modified GRF 1-29) is a synthetic 30-amino-acid analog of growth hormone-releasing hormone. It is used in receptor-binding and signaling research in laboratory models.",
    formula: "C152H252N44O42",
    molecularWeight: "3367.9 g/mol",
    cas: "863288-34-0",
    storage: STORAGE,
    inStock: true,
  },
  {
    id: "p05",
    slug: "ipamorelin-5mg",
    name: "Ipamorelin",
    size: "5mg",
    price: 47,
    category: "Growth Hormone Secretagogues",
    purity: "≥98% (HPLC)",
    description:
      "Ipamorelin is a synthetic pentapeptide that acts as a ghrelin receptor agonist in experimental systems. It is used in receptor pharmacology research in vitro.",
    formula: "C38H49N9O5",
    molecularWeight: "711.9 g/mol",
    cas: "170851-70-4",
    storage: STORAGE,
    inStock: true,
  },
  {
    id: "p06",
    slug: "tesamorelin-10mg",
    name: "Tesamorelin",
    size: "10mg",
    price: 129,
    category: "Growth Hormone Secretagogues",
    purity: "≥98% (HPLC)",
    description:
      "Tesamorelin is a synthetic 44-amino-acid analog of growth hormone-releasing hormone carrying an N-terminal trans-3-hexenoyl modification. It is used as a reference compound in receptor-binding research.",
    formula: "C221H366N72O67S",
    molecularWeight: "5135.9 g/mol",
    cas: "218949-48-5",
    storage: STORAGE,
    inStock: true,
  },
  {
    id: "p07",
    slug: "aod-9604-5mg",
    name: "AOD-9604",
    size: "5mg",
    price: 58,
    category: "Growth Hormone Secretagogues",
    purity: "≥98% (HPLC)",
    description:
      "AOD-9604 is a synthetic peptide corresponding to a modified fragment (residues 177-191) of human growth hormone. It is studied in preclinical research on lipid metabolism pathways in cell models.",
    formula: "C78H123N23O23S2",
    molecularWeight: "1815.1 g/mol",
    cas: "221231-10-3",
    storage: STORAGE,
    inStock: true,
  },
  {
    id: "p08",
    slug: "epitalon-10mg",
    name: "Epitalon",
    size: "10mg",
    price: 36,
    category: "Neuropeptides",
    purity: "≥98% (HPLC)",
    description:
      "Epitalon (Epithalon) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) developed from a sequence of the pineal peptide epithalamin. It is referenced in preclinical research on telomerase expression in cultured cells.",
    formula: "C14H22N4O9",
    molecularWeight: "390.35 g/mol",
    cas: "307297-39-8",
    storage: STORAGE,
    inStock: true,
  },
  {
    id: "p09",
    slug: "thymosin-alpha-1-10mg",
    name: "Thymosin Alpha-1",
    size: "10mg",
    price: 96,
    category: "Immune-Related Peptides",
    purity: "≥98% (HPLC)",
    description:
      "Thymosin alpha-1 is a 28-amino-acid N-terminally acetylated peptide originally isolated from thymus tissue. It is studied in in-vitro research on immune cell signaling and cytokine expression.",
    formula: "C129H215N33O55",
    molecularWeight: "3108.3 g/mol",
    cas: "62304-98-7",
    storage: STORAGE,
    inStock: true,
  },
  {
    id: "p10",
    slug: "mots-c-10mg",
    name: "MOTS-c",
    size: "10mg",
    price: 74,
    category: "Mitochondrial Peptides",
    purity: "≥98% (HPLC)",
    description:
      "MOTS-c is a 16-amino-acid peptide encoded within the mitochondrial 12S rRNA gene. It is studied in laboratory research on mitochondrial-nuclear signaling and cellular metabolism models.",
    formula: "C101H152N28O22S2",
    molecularWeight: "2174.6 g/mol",
    storage: STORAGE,
    inStock: true,
    featured: true,
  },
  {
    id: "p11",
    slug: "ss-31-10mg",
    name: "SS-31 (Elamipretide)",
    size: "10mg",
    price: 84,
    category: "Mitochondrial Peptides",
    purity: "≥98% (HPLC)",
    description:
      "SS-31 is a synthetic tetrapeptide (D-Arg-Dmt-Lys-Phe-NH2) that associates with the inner mitochondrial membrane. It is used in preclinical research on mitochondrial membrane biology in cell-based assays.",
    formula: "C32H49N9O5",
    molecularWeight: "639.8 g/mol",
    cas: "736992-21-5",
    storage: STORAGE,
    inStock: true,
  },
  {
    id: "p12",
    slug: "kpv-10mg",
    name: "KPV",
    size: "10mg",
    price: 49,
    category: "Immune-Related Peptides",
    purity: "≥98% (HPLC)",
    description:
      "KPV is a C-terminal tripeptide (Lys-Pro-Val) of alpha-melanocyte-stimulating hormone. It is used in in-vitro research on inflammatory signaling pathways in cultured cell lines.",
    formula: "C16H30N4O4",
    molecularWeight: "342.4 g/mol",
    cas: "67727-97-3",
    storage: STORAGE,
    inStock: true,
  },
  {
    id: "p13",
    slug: "ll-37-5mg",
    name: "LL-37",
    size: "5mg",
    price: 72,
    category: "Antimicrobial Peptides",
    purity: "≥98% (HPLC)",
    description:
      "LL-37 is the 37-amino-acid active fragment of the human cathelicidin protein hCAP18. It is a model cationic host-defense peptide used in in-vitro antimicrobial and membrane-interaction research.",
    formula: "C205H340N60O53",
    molecularWeight: "4493.3 g/mol",
    cas: "154947-66-7",
    storage: STORAGE,
    inStock: true,
  },
  {
    id: "p14",
    slug: "selank-10mg",
    name: "Selank",
    size: "10mg",
    price: 52,
    category: "Neuropeptides",
    purity: "≥98% (HPLC)",
    description:
      "Selank is a synthetic heptapeptide analog of the endogenous peptide tuftsin. It is referenced in preclinical research on neuropeptide signaling and enzymatic stability in laboratory models.",
    formula: "C33H57N11O9",
    molecularWeight: "751.9 g/mol",
    cas: "129954-34-3",
    storage: STORAGE,
    inStock: true,
  },
  {
    id: "p15",
    slug: "semax-10mg",
    name: "Semax",
    size: "10mg",
    price: 52,
    category: "Neuropeptides",
    purity: "≥98% (HPLC)",
    description:
      "Semax is a synthetic heptapeptide analog of an ACTH(4-10) fragment with a C-terminal Pro-Gly-Pro extension. It is used in preclinical research on neurotrophin expression in cell culture models.",
    formula: "C37H51N9O10S",
    molecularWeight: "813.9 g/mol",
    cas: "80714-61-0",
    storage: STORAGE,
    inStock: true,
  },
];

export const categories: Category[] = [
  "Copper Peptides",
  "Growth Hormone Secretagogues",
  "Mitochondrial Peptides",
  "Immune-Related Peptides",
  "Neuropeptides",
  "Antimicrobial Peptides",
  "Tissue Repair Research Peptides",
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const getRelated = (p: Product, n = 3) => {
  const same = products.filter((x) => x.category === p.category && x.id !== p.id);
  const rest = products.filter((x) => x.category !== p.category && x.id !== p.id);
  return [...same, ...rest].slice(0, n);
};

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
