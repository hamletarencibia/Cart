import { Pack } from "./Pack";
import { Product } from "./Product";

export interface ProductInCart {
    product: Product | Pack;
    quantity: number;
}