import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import { product } from "./routes/product.route.js";
dotenv.config();

const app = express();
app.use(express.json());
connectDb();

app.use("/api/product", product);

app.listen(5000, () => {
  console.log("Server started at 5000");
});
