import { createContext, FC, ReactNode, useCallback, useMemo, useState } from "react";
import { ProductInCart } from "../contracts/ProductInCart";
import { mocked_products } from "../mock/products";

interface CartContextValues {
  products: ProductInCart[];
  totalCost: number;
  editProductQuantity: (productIndex: number, quantity: number) => void;
  removeProduct: (productIndex: number) => void;
}

export const CartContext = createContext<CartContextValues>({
    products: [],
    totalCost: 0,
    editProductQuantity: () => {},
    removeProduct: () => {}
});

interface CartProviderProps {
    children?: ReactNode;
}

export const CartProvider:FC<CartProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<ProductInCart[]>(mocked_products);
    const editProductQuantity = useCallback((productIndex: number, quantity: number) => {

    }, [products]);
    const removeProduct = useCallback((productIndex: number) => {

    }, [products]);

    const totalCost: number = useMemo(() => {
        return 0;
    }, [products]);
    return (
        <CartContext.Provider value={{products, totalCost, editProductQuantity, removeProduct}}>
            {children}
        </CartContext.Provider>
    );
};
