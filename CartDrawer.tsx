"use client";

import Link from "next/link";
import { useEffect } from "react";
import { formatPrice } from "@/data/products";
import { FREE_SHIPPING_THRESHOLD, totals, useCart, useHydrated } from "@/lib/cart";
import VialImage from "./VialImage";

export default function CartDrawer() {
  const { lines, isOpen, close, setQty, remove, toast, dismissToast } = useCart();
  const hydrated = useHydrated();
  const { detailed, subtotal, shipping } = totals(hydrated ? lines : []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(dismissToast, 3000);
    return () => clearTimeout(t);
  }, [toast, dismissToast]);

  return (
    <>
      {/* Add-to-cart toast */}
      <div aria-live="polite" className="pointer-events-none fixed bottom-4 left-1/2 z-[60] -translate-x-1/2 px-4">
        {toast && (
          <div className="pointer-events-auto flex items-center gap-3 rounded-lg bg-navy-900 px-4 py-3 text-sm text-white shadow-lg">
            <span>{toast}</span>
            <button
              type="button"
              className="font-semibold text-teal-100 underline"
              onClick={() => {
                dismissToast();
                useCart.getState().open();
              }}
            >
              View cart
            </button>
          </div>
        )}
      </div>

      {isOpen && <div className="fixed inset-0 z-50 bg-navy-900/50" onClick={close} aria-hidden="true" />}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full invisible"
        }`}
      >
        <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
          <h2 className="text-lg font-semibold">Your cart</h2>
          <button type="button" onClick={close} aria-label="Close cart" className="rounded-lg p-2 hover:bg-navy-50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {detailed.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-slate-600">Your cart is empty.</p>
              <Link href="/shop" onClick={close} className="btn-primary mt-5">
                Browse peptides
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-navy-100">
              {detailed.map(({ product, qty }) => (
                <li key={product.slug} className="flex gap-4 py-4">
                  <VialImage product={product} className="h-24 w-20 shrink-0 rounded-lg" />
                  <div className="flex-1">
                    <Link href={`/shop/${product.slug}`} onClick={close} className="text-sm font-semibold hover:text-teal-700">
                      {product.name}
                    </Link>
                    <p className="text-xs text-slate-600">{product.size}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-lg border border-navy-100">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${product.name}`}
                          className="h-8 w-8 hover:bg-navy-50"
                          onClick={() => setQty(product.slug, qty - 1)}
                        >
                          −
                        </button>
                        <span className="w-7 text-center text-sm">{qty}</span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${product.name}`}
                          className="h-8 w-8 hover:bg-navy-50"
                          onClick={() => setQty(product.slug, qty + 1)}
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-semibold">{formatPrice(product.price * qty)}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(product.slug)}
                      className="mt-2 text-xs text-slate-600 underline hover:text-navy-900"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {detailed.length > 0 && (
          <div className="border-t border-navy-100 px-5 py-5">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-semibold">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-slate-600">
              {shipping === 0
                ? "Free shipping applied."
                : `Add ${formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} more for free shipping.`}
            </p>
            <Link href="/cart" onClick={close} className="btn-accent mt-4 w-full">
              Review cart & checkout
            </Link>
            <p className="mt-3 text-center text-xs text-slate-600">For laboratory research use only.</p>
          </div>
        )}
      </aside>
    </>
  );
}
