import {
  Box,
  Button,
  Input,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { ChangeEvent, FC } from "react";
import { IPack } from "../../../contracts/Pack";
import { useCart } from "../../../hooks/useCart";

interface PackProps {
  pack: IPack;
  quantity: number;
}

const Pack: FC<PackProps> = ({ pack, quantity }) => {
  const { editProductQuantity, removeProduct } = useCart();
  const handleChangeQuantity = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    editProductQuantity(pack.id, parseInt(event.target.value));
  };
  const handleRemove = () => {
    removeProduct(pack.id);
  };

  return (
    <Box display={"flex"} flex={1}>
      <Box mr={2}>
        <Box
          width={120}
          height={120}
          display="flex"
          flexWrap="wrap"
          justifyContent={"space-around"}
        >
          {pack.products.slice(0, 4).map((product) => (
            <img src={product.image} alt={product.name} height={60} key={product.id + 'img'} />
          ))}
        </Box>
        <Typography
          fontSize={10}
          fontWeight={600}
          color="#848A92"
          width="fit-content"
          mx={"auto"}
          my={1}
          p={.5}
          sx={{ backgroundColor: '#E6E8E9' }}
        >
          Pack
        </Typography>
      </Box>
      <Box flexGrow={1}>
        <Typography fontSize={18} fontWeight={700} color="#091625">
          {pack.name}
        </Typography>
        <Box display={"flex"} alignItems="center">
          <Typography fontSize={16} fontWeight={700}>
            Quantity:
          </Typography>
          <Input
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
            inputProps={{
              style: { textAlign: "right", fontSize: 16, fontWeight: 600 },
            }}
            sx={{ width: "50px" }}
          />
        </Box>
        <List>
          {pack.products.map((product) => (
            <ListItem
              key={product.id}
              sx={{ fontSize: 14, fontWeight: 600, p: 0 }}
            >
              {product.name}&nbsp;
              <span style={{ color: "#6B737C" }}>
                (
                {product.attributes?.map((attr, index) => (
                  <span key={product.id+index}>
                    {attr}
                    {product.attributes &&
                      index !== product.attributes?.length - 1 &&
                      ", "}
                  </span>
                ))}
                )
              </span>
            </ListItem>
          ))}
        </List>
        <Box mt={1}>
          <Button
            variant="text"
            sx={{
              textTransform: "capitalize",
              color: "#091625",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            Edit pack
          </Button>
          |
          <Button
            variant="text"
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
          ${pack.price.toFixed(2)}
        </Typography>
        <Typography fontSize={18} fontWeight={700} color="#091625">
          <span style={{ fontWeight: 600 }}>Total:</span> $
          {(pack.price * quantity).toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Pack;
