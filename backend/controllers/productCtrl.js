import mongoose from "mongoose";
import productModel from "../models/product.model.js";
const getAllProducts = async (req, res) => {
  try {
    const productdata = await productModel.find();

    if (!productdata || productdata.length === 0) {
      return res.status(404).send({
        success: false,
        message: "Products Not Found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Products Fetched",
      data: productdata,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Server Error in getProducts",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
      return res
        .status(400)
        .send({ success: false, message: "Please provide all the fileds" });
    }
    const product = await productModel.create({ name, price, image });
    return res.status(201).send({ success: true, message: "Product Created" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: "Server error in createProduct" });
  }
};

const updateproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({
        success: false,
        message: "Invalid product ID format.",
      });
    }
    const updatedata = await productModel.findByIdAndUpdate(id, product, {
      new: true,
    });
    return res.status(201).send({ success: true, message: "Product Updated" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: "Server Error in updateProduct" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({
        success: false,
        message: "Invalid product ID format.",
      });
    }
    const product = await productModel.findByIdAndDelete({ _id: id });
    return res.status(200).send({ success: true, message: "Product Deleted" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: "Server Error in updateProduct" });
  }
};

export { getAllProducts, createProduct, updateproduct, deleteProduct };
