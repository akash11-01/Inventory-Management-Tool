import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/db.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({});

const app = express();
const port = process.env.PORT || 4000;

await connectDb();

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

app.use("/api/user", userRouter);
app.use("/api/products", productRouter);

app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Intenal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
