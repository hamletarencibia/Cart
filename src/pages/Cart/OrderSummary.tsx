import { Box, Button, Divider, Typography } from "@mui/material";
import { FC } from "react";
import { useCart } from "../../hooks/useCart";

const OrderSummary: FC = () => {
  const { products, totalCost } = useCart();
  return (
    <Box>
      <Typography fontSize={24} fontWeight={700}>
        Order Summary
      </Typography>
      <Typography fontSize={16} color="#6B737C" fontWeight={400} my={2}>
        Number of items{" "}
        <span style={{ float: "right" }}>{products.length}</span>
      </Typography>
      <Divider />
      <Typography fontSize={18} fontWeight={600} my={2}>
        Total:{" "}
        <span style={{ float: "right", fontSize: 24, fontWeight: 700 }}>
          ${totalCost.toFixed(2)}
        </span>
      </Typography>
      <Button
        sx={{
          textTransform: "capitalize",
          my: 1,
          backgroundColor: "#3A4451",
          color: "#ffffff",
          '&:hover': {
            backgroundColor: "#293340"
          }
        }}
        fullWidth
      >
        Proceed to Checkout
      </Button>
      <Button
        sx={{
          textTransform: "capitalize",
          my: 1,
          borderColor: "#091625",
          color: "#091625",
          '&:hover': {
            borderColor: "#000514",
            backgroundColor: "c7c7c7"
          }
        }}
        variant="outlined"
        fullWidth
      >
        Continue shopping
      </Button>
    </Box>
  );
};

export default OrderSummary;
