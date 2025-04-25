import { Product } from "../models/product.model";
import { IProduct } from "../types/product";

// Get all products
const allProducts = async () => {
  const products = await Product.find();
  return products;
};

// Create product
const addProduct = async (data: Omit<IProduct, "id" | "customers">) => {
  const newProdcut = new Product(data);
  return await newProdcut.save();
};

// Get product by id
const findProduct = async (id: string) => {
  return await Product.findById(id);
};

// Update product
const updateProduct = async (id: string, data: Partial<IProduct>) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

// Delete product
const deleteProduct = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

export default {
  allProducts,
  addProduct,
  updateProduct,
  findProduct,
  deleteProduct,
};
