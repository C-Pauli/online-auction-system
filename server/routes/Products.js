// server/routes/products.js
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET /products?category=Fresh%20Mushrooms
router.get("/", async (req, res) => {
  try {
    const { category, q } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (q) filter.name = { $regex: q, $options: "i" };
    const products = await Product.find(filter).sort({ createdAt: -1 });
    res.json({ ok: true, products });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

// GET /products/:id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ ok: false, message: "Not found" });
    res.json({ ok: true, product });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

module.exports = router;
