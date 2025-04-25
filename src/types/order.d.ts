import { ICustomer } from "./customer";
import { IProduct } from "./product";

export interface IOrder {
  id: string;
  product: IProduct;
  customer: ICustomer;
}
