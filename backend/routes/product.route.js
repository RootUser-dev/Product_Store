import express from "express";
const router = express.Router();
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateproduct,
} from "../controllers/productCtrl.js";

router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/:id", updateproduct);
router.delete("/:id", deleteProduct);

export const product = router;
