// server/scripts/seedProducts.js
require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product");

const SAMPLE = [
  // Fresh Mushrooms
  {
    name: "Golden Teacher – Fresh 28g",
    category: "Fresh Mushrooms",
    price: 89,
    unit: "28g",
    potency: "PsilocinEQ 1.2 mg/g",
    species: "Psilocybe cubensis",
    description: "Lab-tested lot with consistent alkaloid profile.",
    imageUrl: "https://picsum.photos/seed/goldenteacher/640/400",
    coaUrl: "https://example.com/coa/goldenteacher.pdf",
    tags: ["fresh", "cubensis", "lab-tested"]
  },
  {
    name: "B+ – Fresh 14g",
    category: "Fresh Mushrooms",
    price: 49,
    unit: "14g",
    potency: "PsilocinEQ 0.9 mg/g",
    species: "Psilocybe cubensis",
    description: "Balanced profile, great for beginners.",
    imageUrl: "https://picsum.photos/seed/bplus/640/400",
    coaUrl: "https://example.com/coa/bplus.pdf",
    tags: ["fresh"]
  },

  // Extracts
  {
    name: "Dual Extract – 30 mL",
    category: "Extracts",
    price: 59,
    unit: "30 mL",
    potency: "Standardized batch, see COA",
    species: "Psilocybe blend",
    description: "Hot water + ethanol extract; consistent lot-to-lot chemistry.",
    imageUrl: "https://picsum.photos/seed/dualextract/640/400",
    coaUrl: "https://example.com/coa/dual-extract.pdf",
    tags: ["extract", "dual"]
  },
  {
    name: "Tincture – 15 mL",
    category: "Extracts",
    price: 39,
    unit: "15 mL",
    potency: "Standardized tincture",
    species: "Psilocybe blend",
    description: "Ethanolic tincture; dropper bottle.",
    imageUrl: "https://picsum.photos/seed/tincture/640/400",
    coaUrl: "https://example.com/coa/tincture.pdf",
    tags: ["tincture"]
  },

  // White Label
  {
    name: "White Label Capsules – 60ct",
    category: "White Label",
    price: 129,
    unit: "bottle",
    potency: "Per-capsule profile on COA",
    species: "Functional blend",
    description: "Custom brand-ready; add your label & story.",
    imageUrl: "https://picsum.photos/seed/capsules/640/400",
    coaUrl: "https://example.com/coa/capsules.pdf",
    tags: ["white-label", "capsules"]
  },
  {
    name: "White Label Gummies – 20ct",
    category: "White Label",
    price: 99,
    unit: "box",
    potency: "Per-piece profile on COA",
    species: "Functional blend",
    description: "Consistent chem profile; turnkey private label.",
    imageUrl: "https://picsum.photos/seed/gummies/640/400",
    coaUrl: "https://example.com/coa/gummies.pdf",
    tags: ["white-label", "gummies"]
  }
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: process.env.DB_NAME || "auction" });
    await Product.deleteMany({});
    await Product.insertMany(SAMPLE);
    console.log("Seeded products:", SAMPLE.length);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
