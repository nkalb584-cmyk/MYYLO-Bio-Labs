import Link from "next/link";
import Logo from "./Logo";

const cols = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All peptides" },
      { href: "/cart", label: "Cart & checkout" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/quality", label: "Quality & COA" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/terms", label: "Terms of Sale" },
      { href: "/legal/privacy", label: "Privacy Policy" },
      { href: "/legal/shipping-returns", label: "Shipping & Returns" },
      { href: "/legal/research-use", label: "Research Use Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-navy-900 text-navy-100">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-100/80">
            Research-grade peptides, third-party tested and documented with a Certificate of Analysis for every batch.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">{c.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-navy-100/80 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6">
          <p className="text-xs leading-relaxed text-navy-100/80" role="note">
            All products sold by MYYLO bio Labs are intended for in-vitro research and laboratory use only. They are
            not drugs, supplements, or cosmetics. They are not intended to diagnose, treat, cure, or prevent any
            disease and are not for human or animal consumption.
          </p>
          <p className="mt-3 text-xs text-navy-100/60">© {new Date().getFullYear()} MYYLO bio Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
