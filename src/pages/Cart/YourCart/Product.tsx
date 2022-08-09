import { Box, Button, Input, Typography } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { IProduct } from "../../../contracts/Product";
import { useCart } from "../../../hooks/useCart";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

interface ProductProps {
  product: IProduct;
  quantity: number;
}
const Product: FC<ProductProps> = ({ product, quantity }) => {
  const { editProductQuantity, removeProduct } = useCart();
  const handleChangeQuantity = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    editProductQuantity(product.id, parseInt(event.target.value));
  };
  const handleRemove = () => {
    removeProduct(product.id);
  };

  return (
    <Box display={"flex"} flex={1}>
      <Box
        width={120}
        height={120}
        display="flex"
        justifyContent="center"
        alignItems="center"
        mr={2}
      >
        <img src={product.image} alt={product.name} />
      </Box>
      <Box flexGrow={1}>
        <Typography fontSize={18} fontWeight={700} color="#091625">
          {product.name}
        </Typography>
        <Box display={"flex"} alignItems="center">
          <Typography fontSize={16} fontWeight={700}>Quantity:</Typography>
          <Input
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
            inputProps={{ style: { textAlign: "right", fontSize: 16, fontWeight: 600 } }}
            sx={{ width: "50px" }}
          />
        </Box>
        <Box mt={1}>
          <Button
            variant="text"
            startIcon={<DeleteOutlinedIcon />}
            sx={{
                textTransform: "capitalize",
                color: "#091625",
                fontSize: 12,
                fontWeight: 600,
              }}
            onClick={handleRemove}
          >
            Remove
          </Button>
        </Box>
      </Box>
      <Box textAlign="right">
        <Typography fontSize={18} fontWeight={700} color="#091625">
          ${product.price.toFixed(2)}
        </Typography>
        <Typography fontSize={18} fontWeight={700} color="#091625">
          <span style={{ fontWeight: 600 }}>Total:</span> $
          {(product.price * quantity).toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Product;
