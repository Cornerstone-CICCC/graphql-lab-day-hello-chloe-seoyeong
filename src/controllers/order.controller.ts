import { Customer } from "../models/customer.model";
import { Order } from "../models/order.model";
import { Product } from "../models/product.model";

// Get all orders
const allOrders = async () => await Order.find();

// Create order
const createOrder = async (data: { productId: string; customerId: string }) => {
  const product = await Product.findById(data.productId);
  const customer = await Customer.findById(data.customerId);
  if (!product) return null;
  if (!customer) return null;
  // console.log(product);
  // console.log(customer);
  // const newOrder = new Order({
  //   product: product?._id,
  //   customer: customer?._id,
  // });
  // return await newOrder.save();
  const newOrder = new Order({
    product: product._id,
    customer: customer._id,
  });

  return await newOrder.populate("product");
};

// Update order

// Delete order
const deleteOrder = async (id: string) => await Order.findByIdAndDelete(id);

export default {
  allOrders,
  createOrder,
  deleteOrder,
};
