import { Box, Typography } from "@mui/material";
import { FC } from "react";

const RecommendedProduct: FC = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          aspectRatio: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#E6E8E9'
        }}
      >
        <img src="/img/tshirt.png" alt="Unisex Short Sleeve T-Shirt" />
      </Box>
      <Typography fontSize={16} fontWeight={700}>
        Unisex Short Sleeve T-Shirt
      </Typography>
      <Box display={"flex"}>
        <Typography flexGrow={1} fontSize={15} fontWeight={600}>
          $10 - $24
        </Typography>
        <Typography fontSize={14} fontWeight={400} color="#6B737C">
          Minimum: <span color="#000000">24</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default RecommendedProduct;
