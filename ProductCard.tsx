import Link from "next/link";
import { formatPrice, Product } from "@/data/products";
import VialImage from "./VialImage";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card group flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lg">
      <Link href={`/shop/${product.slug}`} className="block" aria-label={`${product.name} ${product.size}`}>
        <VialImage product={product} className="aspect-[5/6] w-full" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">{product.category}</p>
        <h3 className="mt-1.5 text-base font-semibold leading-snug">
          <Link href={`/shop/${product.slug}`} className="hover:text-teal-700">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          {product.size} · Purity {product.purity}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-lg font-bold">{formatPrice(product.price)}</span>
          <AddToCartButton slug={product.slug} inStock={product.inStock} />
        </div>
      </div>
    </article>
  );
}
