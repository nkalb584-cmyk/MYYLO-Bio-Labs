import type { Product } from "@/data/products";

/** Consistent placeholder vial graphic with a label showing the peptide name and size. */
export default function VialImage({
  product,
  className = "",
}: {
  product: Pick<Product, "name" | "size">;
  className?: string;
}) {
  const short = product.name.replace(/\s*\(.*\)\s*/, "").trim();
  const fontSize = short.length > 12 ? 11 : short.length > 8 ? 13 : 15;
  return (
    <svg
      viewBox="0 0 200 240"
      role="img"
      aria-label={`${product.name} ${product.size} research vial`}
      className={className}
    >
      <defs>
        <linearGradient id="glass" x1="0" x2="1">
          <stop offset="0" stopColor="#e6eef7" />
          <stop offset="0.5" stopColor="#ffffff" />
          <stop offset="1" stopColor="#d6e2ef" />
        </linearGradient>
      </defs>
      <rect width="200" height="240" fill="#f1f4f9" />
      <ellipse cx="100" cy="222" rx="52" ry="7" fill="#0b1c36" opacity="0.08" />
      {/* cap */}
      <rect x="68" y="20" width="64" height="26" rx="4" fill="#0f766e" />
      <rect x="64" y="42" width="72" height="9" rx="2" fill="#0b1c36" />
      {/* neck + body */}
      <path d="M74 51h52v14c0 6 12 10 12 22v118c0 6-5 11-11 11H73c-6 0-11-5-11-11V87c0-12 12-16 12-22z" fill="url(#glass)" stroke="#b7c6d9" strokeWidth="1.5" />
      {/* lyophilized cake */}
      <path d="M64 196h72v19c0 3-3 6-6 6H70c-3 0-6-3-6-6z" fill="#e9eef4" />
      {/* label */}
      <rect x="62" y="96" width="76" height="86" fill="#ffffff" stroke="#dde4ef" />
      <rect x="62" y="96" width="76" height="14" fill="#0b1c36" />
      <text x="100" y="106" textAnchor="middle" fontSize="8" fontWeight="700" letterSpacing="1.5" fill="#ffffff">
        MYYLO
      </text>
      <text x="100" y="134" textAnchor="middle" fontSize={fontSize} fontWeight="700" fill="#0b1c36">
        {short}
      </text>
      <text x="100" y="152" textAnchor="middle" fontSize="13" fontWeight="600" fill="#0f766e">
        {product.size}
      </text>
      <text x="100" y="170" textAnchor="middle" fontSize="6.5" fill="#475569">
        FOR RESEARCH USE ONLY
      </text>
    </svg>
  );
}
