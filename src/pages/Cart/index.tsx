import { Container, Grid } from "@mui/material";
import { FC } from "react";
import OrderSummary from "./OrderSummary";
import YouMightLike from "./YouMightLike";
import YourCart from "./YourCart";

const Cart: FC = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} p={2}>
        <Grid item xs={12} md={7} lg={8} xl={9}>
            <YourCart />
        </Grid>
        <Grid item xs={12} md={5} lg={4} xl={3}>
            <OrderSummary />
        </Grid>
      </Grid>
      <YouMightLike />
    </Container>
  );
};

export default Cart;
