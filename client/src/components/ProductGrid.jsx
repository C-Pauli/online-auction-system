// client/src/components/ProductsGrid.jsx
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }) {
  if (!products?.length) {
    return <div className="text-gray-500">No products yet.</div>;
  }
  return (
    <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map(p => <ProductCard key={p._id} p={p} />)}
    </div>
  );
}
