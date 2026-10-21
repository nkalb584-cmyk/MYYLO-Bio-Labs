"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { categories, Category, products } from "@/data/products";

type Sort = "name-asc" | "name-desc" | "price-asc" | "price-desc";

export default function ShopClient() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("name-asc");
  const [category, setCategory] = useState<Category | "All">("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!q || `${p.name} ${p.category} ${p.size} ${p.cas ?? ""}`.toLowerCase().includes(q))
    );
    return [...list].sort((a, b) => {
      switch (sort) {
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [query, sort, category]);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <div>
          <label htmlFor="search" className="sr-only">
            Search peptides
          </label>
          <input
            id="search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, category, or CAS number"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="sort" className="sr-only">
            Sort products
          </label>
          <select id="sort" value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="input">
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              category === c
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-navy-100 bg-white text-navy-800 hover:bg-navy-50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-600" role="status" aria-live="polite">
        Showing {results.length} of {products.length} products
      </p>

      {results.length === 0 ? (
        <div className="card mt-6 p-10 text-center text-slate-700">
          No products match your search.{" "}
          <button
            className="font-semibold text-teal-700 underline"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
