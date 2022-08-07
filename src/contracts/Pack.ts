import { Product } from "./Product";

export interface Pack extends Product {
    products: Product[];
}