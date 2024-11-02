import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import { product } from "./routes/product.route.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
connectDb();

app.use("/api/product", product);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server started at " + port);
});
