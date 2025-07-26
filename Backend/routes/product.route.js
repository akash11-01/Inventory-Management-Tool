import express from "express";
import {
  addProduct,
  productList,
  updateQuantity,
} from "../controllers/product.controller.js";
import { authUser } from "../middlewares/authUser.js";

const app = express.Router();
app.post("/add", authUser, addProduct);
app.put("/:id/quantity", authUser, updateQuantity);
app.get("/list", authUser, productList);

export default app;
