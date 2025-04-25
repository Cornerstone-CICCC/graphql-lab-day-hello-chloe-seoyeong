import { IProduct } from "./product";

interface ICustomer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  products: [IProduct];
}
