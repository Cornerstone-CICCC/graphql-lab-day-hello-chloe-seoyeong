import mongoose, { Schema, Types } from "mongoose";
import { Customer } from "./customer.model";
import { Product } from "./product.model";

const OrderSchema = new Schema({
  product: { type: Types.ObjectId, ref: "Product" },
  customer: { type: Types.ObjectId, ref: "Customer" },
});

export const Order = mongoose.model("Order", OrderSchema);
