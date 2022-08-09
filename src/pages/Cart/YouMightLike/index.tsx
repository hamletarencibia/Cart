import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import RecommendedProduct from "./RecommendedProduct";

const YouMightLike: FC = () => {
  return (
    <Box my={4}>
      <Typography fontSize={24} fontWeight={700} color="#091625">
        You might also like
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={3}>
          <RecommendedProduct />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <RecommendedProduct />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <RecommendedProduct />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <RecommendedProduct />
        </Grid>
      </Grid>
    </Box>
  );
};

export default YouMightLike;
