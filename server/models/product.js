import mongoose from 'mongoose';
// server/models/Product.js
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ["Fresh Mushrooms", "Extracts", "White Label"],
      required: true,
    },
    price: { type: Number, required: true },        // USD
    unit: { type: String, default: "each" },         // e.g. "each", "g", "bottle"
    potency: { type: String },                       // e.g. "PsilocinEQ 1.2 mg/g"
    species: { type: String },                       // e.g. "Psilocybe cubensis"
    description: { type: String },
    imageUrl: { type: String },
    coaUrl: { type: String },                        // PDF link if you have one
    inStock: { type: Boolean, default: true },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);

const bidSchema = new mongoose.Schema({
    bidder: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    bidAmount: { type: Number, required: true },
    bidTime: { type: Date, default: Date.now }
});

const productSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        trim: true,
    },
    itemDescription: {
        type: String,
        required: true,
    },
    itemCategory: {
        type: String,
        required: true,
    },
    itemPhoto: {
        type: String,
    },
    startingPrice: {
        type: Number,
        required: true,
    },
    currentPrice: {
        type: Number,
        default: 0,
    },
    itemStartDate: {
        type: Date,
        default: Date.now,
    },
    itemEndDate: {
        type: Date,
        required: true,
    },
    seller: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    bids: [bidSchema],
    winner: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        default: null
    },
    isSold: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
