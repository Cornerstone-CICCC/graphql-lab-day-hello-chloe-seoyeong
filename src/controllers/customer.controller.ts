import { Customer } from "../models/customer.model";
import { ICustomer } from "../types/customer";

// Get all customers
const allCustomers = async () => {
  const customers = await Customer.find();
  return customers;
};

// Create customer
const createCustomer = async (data: Omit<ICustomer, "id" | "products">) => {
  console.log(data);
  const newCustomer = new Customer(data);
  return await newCustomer.save();
};

// Get customer by id
const findCustomer = async (id: string) => {
  return await Customer.findById(id);
};

// Update customer
const updateCustomer = async (id: string, data: Partial<ICustomer>) => {
  return await Customer.findByIdAndUpdate(id, data, {
    new: true,
  });
};

// Delete Customer
const deleteCustomer = async (id: string) => {
  return await Customer.findByIdAndDelete(id);
};

export default {
  allCustomers,
  createCustomer,
  updateCustomer,
  findCustomer,
  deleteCustomer,
};
