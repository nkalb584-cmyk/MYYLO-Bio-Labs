"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { totals, useCart, useHydrated } from "@/lib/cart";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/quality", label: "Quality & COA" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const lines = useCart((s) => s.lines);
  const open = useCart((s) => s.open);
  const hydrated = useHydrated();
  const count = hydrated ? totals(lines).count : 0;

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/90 backdrop-blur">
      <div className="bg-navy-900 px-4 py-1.5 text-center text-xs text-navy-100">
        For laboratory research use only. Not for human or animal consumption.
      </div>
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname.startsWith(n.href) ? "page" : undefined}
              className={`text-sm font-medium hover:text-teal-700 ${
                pathname.startsWith(n.href) ? "text-teal-700" : "text-navy-800"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={open}
            className="relative inline-flex h-10 items-center gap-2 rounded-lg border border-navy-100 bg-white px-3 text-sm font-semibold hover:bg-navy-50"
            aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6h15l-1.5 9h-12z" />
              <path d="M6 6 5 3H2" />
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
            </svg>
            <span>Cart</span>
            {count > 0 && (
              <span className="ml-0.5 rounded-full bg-teal-700 px-2 py-0.5 text-xs text-white">{count}</span>
            )}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy-100 md:hidden"
            aria-expanded={menu}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={() => setMenu((m) => !m)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {menu ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {menu && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-navy-100 bg-white md:hidden">
          <ul className="container-page py-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setMenu(false)}
                  className="block py-3 text-sm font-medium text-navy-800"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
