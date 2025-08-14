// client/src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ p }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm bg-white">
      <img src={p.imageUrl} alt={p.name} className="w-full h-44 object-cover" loading="lazy" />
      <div className="p-4">
        <div className="text-sm text-gray-500">{p.category}</div>
        <h3 className="font-semibold text-lg">{p.name}</h3>
        {p.potency && <div className="text-sm mt-1">{p.potency}</div>}
        {p.species && <div className="text-xs text-gray-500">{p.species}</div>}
        <div className="flex items-center justify-between mt-3">
          <div className="font-semibold">${p.price} <span className="text-sm text-gray-500">/ {p.unit}</span></div>
          <a
            href={p.coaUrl || "#"}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline"
          >
            COA
          </a>
        </div>
        <p className="text-sm text-gray-700 mt-3 line-clamp-3">{p.description}</p>
        <button className="mt-4 w-full py-2 rounded-lg bg-black text-white">View</button>
      </div>
    </div>
  );
}
