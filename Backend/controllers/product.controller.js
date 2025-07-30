import { Product } from "../models/product.model.js";

export const addProduct = async (req, res, next) => {
  try {
    const { name, type, sku, image_url, description, quantity, price } =
      req.body;
    const existingProduct = await Product.findOne({
      name: name,
    });
    if (existingProduct) {
      return res.status(409).json({
        success: false,
        message: "Product already exists",
        product_id: existingProduct?._id,
      });
    }
    const product = await Product.create({
      name,
      type,
      sku,
      image_url,
      description,
      quantity,
      price,
    });
    res.status(201).json({ success: true, product, product_id: product?._id });
  } catch (error) {
    next(error);
  }
};

export const productList = async (req, res, next) => {
  try {
    const products = await Product.find();
    // res.status(200).json({ success: true, products });
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const updateQuantity = async (req, res, next) => {
  try {
    const { id } = req.params;
    // const quantity = Number(req.params.quantity);
    const { quantity } = req.body;
    const product = await Product.findByIdAndUpdate(
      id,
      { quantity },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Product Quantity updated",
      product,
      quantity,
    });
  } catch (error) {
    next(error);
  }
};
