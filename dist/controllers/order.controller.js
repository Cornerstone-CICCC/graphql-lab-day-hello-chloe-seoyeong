"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_model_1 = require("../models/customer.model");
const order_model_1 = require("../models/order.model");
const product_model_1 = require("../models/product.model");
// Get all orders
const allOrders = () => __awaiter(void 0, void 0, void 0, function* () { return yield order_model_1.Order.find(); });
// Create order
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findById(data.productId);
    const customer = yield customer_model_1.Customer.findById(data.customerId);
    if (!product)
        return null;
    if (!customer)
        return null;
    // console.log(product);
    // console.log(customer);
    // const newOrder = new Order({
    //   product: product?._id,
    //   customer: customer?._id,
    // });
    // return await newOrder.save();
    const newOrder = new order_model_1.Order({
        product: product._id,
        customer: customer._id,
    });
    return yield newOrder.populate("product");
});
// Update order
// Delete order
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield order_model_1.Order.findByIdAndDelete(id); });
exports.default = {
    allOrders,
    createOrder,
    deleteOrder,
};
