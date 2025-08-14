// client/src/pages/Shop.jsx
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import CategoriesNav from "../components/CategoriesNav";
import ProductsGrid from "../components/ProductsGrid";

export default function Shop() {
  const [category, setCategory] = useState("");
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const load = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts({ category: category || undefined, q: q || undefined });
      setProducts(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [category]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <CategoriesNav active={category} onChange={setCategory} />
        <div className="flex items-center gap-2">
          <input
            className="border rounded-lg px-3 py-2 w-64"
            placeholder="Search products…"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          <button onClick={load} className="px-4 py-2 rounded-lg border">Search</button>
        </div>
      </div>

      {loading ? <div className="mt-8">Loading…</div> : <ProductsGrid products={products} />}
    </div>
  );
}
