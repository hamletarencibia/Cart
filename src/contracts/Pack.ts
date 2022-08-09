import { IProduct } from "./Product";

export interface IPack extends IProduct {
    products: IProduct[];
}