// client/src/components/CategorySection.jsx
import React from "react";
import ProductsGrid from "./ProductsGrid";
export default function CategorySection({ title, items }) {
  return (
    <section className="my-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <a className="text-sm underline" href={`/shop?category=${encodeURIComponent(title)}`}>See all</a>
      </div>
      <ProductsGrid products={items.slice(0, 3)} />
    </section>
  );
}
