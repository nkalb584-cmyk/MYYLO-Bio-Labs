# MYYLO bio Labs

Next.js (App Router), TypeScript, Tailwind CSS storefront for research-grade peptides sold for in-vitro laboratory use only.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Optional: create `.env.local` with `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` so the sitemap, canonical URLs and structured data use your real domain.

## Structure

```
src/
  app/            pages (home, shop, shop/[slug], cart, about, quality, faq, contact, legal/[doc]), sitemap, robots
  components/     Header, Footer, AgeGate, ProductCard, CartDrawer, VialImage, Logo, forms
  data/products.ts   product catalog (edit this)
  lib/cart.ts     Zustand cart store, persisted in localStorage
  lib/faq.ts      FAQ content
  lib/legal.ts    legal page text (TEMPLATES, have a lawyer review)
```

## Editing the catalog

Open `src/data/products.ts`. Each product is an object in the `products` array with: `id`, `slug`, `name`, `size`, `price`, `category`, `purity`, `description`, `formula`, `molecularWeight`, optional `cas`, `storage`, `inStock`, and optional `featured` (shows on the home page).

- Add a product: copy an existing object, give it a unique `id` and `slug`.
- Remove a product: delete its object.
- New category: add it to the `Category` type and the `categories` array.
- Pages, sitemap and structured data update automatically.

Prices are placeholders. Verify formulas, molecular weights and CAS numbers against your supplier's COA before publishing.

## Things you still need to connect

- **Payments:** `src/app/cart/page.tsx` has a placeholder "Place order" button. Many mainstream processors restrict peptide sellers, so confirm your processor first.
- **COA download and lookup:** placeholders on the product page and `/quality` (`src/components/CoaLookup.tsx`).
- **Contact and newsletter forms:** `ContactForm.tsx` and `NewsletterForm.tsx` have TODOs for your email service.
- **Legal pages:** `src/lib/legal.ts` is template text only. Have an attorney review it, along with your marketing language and age/researcher verification, before launch.

## Compliance notes built in

- 21+ / qualified-researcher gate on first visit (remembered in localStorage).
- Persistent footer disclaimer and a required confirmation checkbox at checkout.
- No dosing, administration, or health/therapeutic claims anywhere in the content. Keep it that way when you edit descriptions.
