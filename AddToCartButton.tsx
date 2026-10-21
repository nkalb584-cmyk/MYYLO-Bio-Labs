"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";

export default function AddToCartButton({
  slug,
  inStock,
  full = false,
  withQty = false,
}: {
  slug: string;
  inStock: boolean;
  full?: boolean;
  withQty?: boolean;
}) {
  const add = useCart((s) => s.add);
  const [qty, setQty] = useState(1);

  if (!inStock) {
    return (
      <button className={`btn-secondary ${full ? "w-full" : ""}`} disabled aria-disabled="true">
        Out of stock
      </button>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${full ? "w-full" : ""}`}>
      {withQty && (
        <div className="flex items-center rounded-lg border border-navy-100 bg-white">
          <button
            type="button"
            aria-label="Decrease quantity"
            className="h-10 w-10 text-lg text-navy-800 hover:bg-navy-50"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-semibold" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            className="h-10 w-10 text-lg text-navy-800 hover:bg-navy-50"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
          >
            +
          </button>
        </div>
      )}
      <button type="button" className={`btn-accent ${full || withQty ? "flex-1" : ""}`} onClick={() => add(slug, qty)}>
        Add to cart
      </button>
    </div>
  );
}
