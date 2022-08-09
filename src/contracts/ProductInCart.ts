import { IPack } from "./Pack";
import { IProduct } from "./Product";

export interface IProductInCart {
    product: IProduct | IPack;
    quantity: number;
}