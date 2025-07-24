import { Product } from "../models/product.model.js";

export const addProduct = async (req, res, next) => {
  try {
    const { name, image_url, description, quantity, price } = req.body;
    const product = await Product.create({
      name,
      image_url,
      description,
      quantity,
      price,
    });
    res.status(201).json({ success: true, product });
  } catch (error) {
    next(error);
  }
};

export const productList = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    next(error);
  }
};

export const updateQuantity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    await Product.findByIdAndUpdate(id, { quantity }, { new: true });
    res
      .status(200)
      .json({ success: true, message: "Product Quantity updated" });
  } catch (error) {
    next(error);
  }
};
