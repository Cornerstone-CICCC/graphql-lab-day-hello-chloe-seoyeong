import customerController from "../controllers/customer.controller";
import orderController from "../controllers/order.controller";
import productController from "../controllers/product.controller";
import { ICustomer } from "../types/customer";
import { IProduct } from "../types/product";

// Finish the resolvers
export const resolvers = {
  Query: {
    products: async () => await productController.allProducts(),
    customers: async () => await customerController.allCustomers(),
    orders: async () => await orderController.allOrders(),
    getProductById: async (_: unknown, { id }: { id: string }) =>
      await productController.findProduct(id),
    getCustomerById: async (_: unknown, { id }: { id: string }) =>
      await customerController.findCustomer(id),
  },
  Product: {
    customers: () => {},
  },
  Customer: {
    products: () => {},
  },
  Order: {
    product: () => {},
    customer: () => {},
  },
  Mutation: {
    addProduct: async (
      _: unknown,
      { productName, productPrice }: Omit<IProduct, "id" | "customers">
    ) => await productController.addProduct({ productName, productPrice }),
    editProduct: async (
      _: unknown,
      { id, productName, productPrice }: IProduct
    ) =>
      await productController.updateProduct(id, { productName, productPrice }),
    removeProduct: async (_: unknown, { id }: { id: string }) =>
      await productController.deleteProduct(id),

    addCustomer: async (
      _: unknown,
      { firstName, lastName, email }: Omit<ICustomer, "id" | "product">
    ) =>
      await customerController.createCustomer({
        firstName,
        lastName,
        email,
      }),
    editCustomer: async (
      _: unknown,
      { id, firstName, lastName, email }: ICustomer
    ) =>
      await customerController.updateCustomer(id, {
        firstName,
        lastName,
        email,
      }),
    removeCustomer: async (_: unknown, { id }: { id: string }) =>
      await customerController.deleteCustomer(id),

    addOrder: async (
      _: unknown,
      { productId, customerId }: { productId: string; customerId: string }
    ) => await orderController.createOrder({ productId, customerId }),
    editOrder: () => {},
    removeOrder: () => {},
  },
};
