import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      required: true,
    },

    image_url: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      set: (v) => Number(v),
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { Timestamp: true }
);

export const Product = mongoose.model("Product", productSchema);
