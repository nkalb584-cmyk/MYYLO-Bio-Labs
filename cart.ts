"use client";

import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProduct, Product } from "@/data/products";

export interface CartLine {
  slug: string;
  qty: number;
}

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  toast: string | null;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  dismissToast: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,
      toast: null,
      add: (slug, qty = 1) => {
        const product = getProduct(slug);
        if (!product || !product.inStock) return;
        const lines = get().lines;
        const existing = lines.find((l) => l.slug === slug);
        set({
          lines: existing
            ? lines.map((l) => (l.slug === slug ? { ...l, qty: Math.min(99, l.qty + qty) } : l))
            : [...lines, { slug, qty }],
          toast: `${product.name} ${product.size} added to cart`,
        });
      },
      setQty: (slug, qty) =>
        set({
          lines:
            qty <= 0
              ? get().lines.filter((l) => l.slug !== slug)
              : get().lines.map((l) => (l.slug === slug ? { ...l, qty: Math.min(99, qty) } : l)),
        }),
      remove: (slug) => set({ lines: get().lines.filter((l) => l.slug !== slug) }),
      clear: () => set({ lines: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      dismissToast: () => set({ toast: null }),
    }),
    {
      name: "myylo-cart-v1",
      partialize: (s) => ({ lines: s.lines }),
    }
  )
);

/** True after the first client render, so persisted state never causes hydration mismatches. */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

export interface DetailedLine {
  product: Product;
  qty: number;
}

export function detailedLines(lines: CartLine[]): DetailedLine[] {
  return lines.flatMap((l) => {
    const product = getProduct(l.slug);
    return product ? [{ product, qty: l.qty }] : [];
  });
}

export const FREE_SHIPPING_THRESHOLD = 200;
export const FLAT_SHIPPING = 12;

export function totals(lines: CartLine[]) {
  const detailed = detailedLines(lines);
  const subtotal = detailed.reduce((s, l) => s + l.product.price * l.qty, 0);
  const count = detailed.reduce((s, l) => s + l.qty, 0);
  const shipping = subtotal === 0 ? 0 : subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING;
  return { detailed, subtotal, count, shipping, total: subtotal + shipping };
}
