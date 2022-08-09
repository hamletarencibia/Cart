import { createContext, FC, ReactNode, useCallback, useMemo, useState } from "react";
import { IProductInCart } from "../contracts/ProductInCart";
import { mocked_products } from "../mock/products";

interface CartContextValues {
  products: IProductInCart[];
  totalCost: number;
  editProductQuantity: (productId: string, quantity: number) => void;
  removeProduct: (productId: string) => void;
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
    const [products, setProducts] = useState<IProductInCart[]>(mocked_products);
    const editProductQuantity = useCallback((productId: string, quantity: number) => {
        const productsCopy = [...products];
        const index = products.findIndex((product) => product.product.id === productId);
        productsCopy[index].quantity = quantity;
        setProducts(productsCopy);
    }, [products]);
    const removeProduct = useCallback((productId: string) => {
        const productsCopy = [...products];
        const index = products.findIndex((product) => product.product.id === productId);
        productsCopy.splice(index, 1);
        setProducts(productsCopy);
    }, [products]);

    const totalCost: number = useMemo(() => {
        let total = 0;
        products.forEach((product) => total += product.product.price * product.quantity);
        return total;
    }, [products]);
    return (
        <CartContext.Provider value={{products, totalCost, editProductQuantity, removeProduct}}>
            {children}
        </CartContext.Provider>
    );
};
