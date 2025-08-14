// client/src/api.js
const API = import.meta.env.VITE_API || "http://localhost:5000";
export const fetchProducts = async (params = {}) => {
  const qs = new URLSearchParams(params).toString();
  const res = await fetch(`${API}/products${qs ? `?${qs}` : ""}`, {
    credentials: "include",
  });
  const data = await res.json();
  if (!data.ok) throw new Error(data.message || "Failed to load products");
  return data.products;
};

