// client/src/components/CategoriesNav.jsx
import React from "react";

const CATS = [
  { key: "Fresh Mushrooms", label: "Fresh Mushrooms" },
  { key: "Extracts", label: "Extracts" },
  { key: "White Label", label: "White Label" },
];

export default function CategoriesNav({ active, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {CATS.map(c => (
        <button
          key={c.key}
          onClick={() => onChange(c.key)}
          className={`px-4 py-2 rounded-full border ${active === c.key ? "bg-black text-white" : "bg-white"}`}
        >
          {c.label}
        </button>
      ))}
      <button
        onClick={() => onChange("")}
        className={`px-4 py-2 rounded-full border ${!active ? "bg-black text-white" : "bg-white"}`}
      >
        All
      </button>
    </div>
  );
}
