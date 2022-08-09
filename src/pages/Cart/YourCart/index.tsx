import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { useCart } from "../../../hooks/useCart";
import Pack from "./Pack";
import Product from "./Product";
import { IPack } from "../../../contracts/Pack";

const YourCart: FC = () => {
  const { products } = useCart();
  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#091625">
        Your cart <span style={{ fontSize: 18, fontWeight: 400 }}>({products.length})</span>
      </Typography>
      <List>
        {products.map((product) => (
          <div key={product.product.id}>
            <ListItem>
              {product.product.hasOwnProperty("products") ? (
                <Pack
                  pack={product.product as IPack}
                  quantity={product.quantity}
                />
              ) : (
                <Product
                  product={product.product}
                  quantity={product.quantity}
                />
              )}
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Box>
  );
};

export default YourCart;
