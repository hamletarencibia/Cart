import { ProductInCart } from "../contracts/ProductInCart";

export const mocked_products: ProductInCart[] = [
    {
        product: {
            name: 'My Christmas pack',
            price: 71.20,
            products: [
                {
                    name: 'Cardboard box',
                    price: 0,
                    attributes: ['container']
                },
                {
                    name: 'Unisex Short Sleeve T-Shirt',
                    price: 0,
                    attributes: ['Green', 'Small']
                },
                {
                    name: 'Basic bottle',
                    price: 0,
                    attributes: ['Blue']
                }
            ]
        },
        quantity: 50
    },
    {
        product: {
            name: 'Basic T-Shirt',
            price: 13.50
        },
        quantity: 10
    },
    {
        product: {
            name: 'Woman bottle',
            price: 36.50
        },
        quantity: 20
    }
];