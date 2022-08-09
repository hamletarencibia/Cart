import { IProductInCart } from "../contracts/ProductInCart";

export const mocked_products: IProductInCart[] = [
    {
        product: {
            id: 'pack-1',
            name: 'My Christmas pack',
            price: 71.20,
            products: [
                {
                    id: 'product-3',
                    name: 'Cardboard box',
                    price: 0,
                    image: '/img/box.png',
                    attributes: ['container']
                },
                {
                    id: 'product-4',
                    name: 'Unisex Short Sleeve T-Shirt',
                    price: 0,
                    image: '/img/tshirt.png',
                    attributes: ['Green', 'Small']
                },
                {
                    id: 'product-5',
                    name: 'Basic bottle',
                    price: 0,
                    image: '/img/bottle.png',
                    attributes: ['Blue']
                }
            ]
        },
        quantity: 50
    },
    {
        product: {
            id: 'product-1',
            name: 'Basic T-Shirt',
            image: '/img/tshirt.png',
            price: 13.50
        },
        quantity: 10
    },
    {
        product: {
            id: 'product-2',
            name: 'Woman bottle',
            price: 36.50,
            image: '/img/bottle.png'
        },
        quantity: 20
    }
];