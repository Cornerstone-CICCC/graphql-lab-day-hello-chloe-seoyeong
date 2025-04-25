import { ICustomer } from "./customer";

export interface IProduct {
  id: string;
  productName: string;
  productPrice: number;
  customers: [ICustomer];
}
