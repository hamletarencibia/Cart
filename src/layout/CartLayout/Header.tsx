import { FC } from "react";
import { Box, Button, InputAdornment, Link, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Header: FC = () => {
  return (
    <Box sx={{ py: 2, px: 4, backgroundColor: "#091625", display: "flex" }}>
      <Box sx={{ flexGrow: 1 }}>
        <img src={'/logo192.png'} height={40} />
        <TextField
          sx={{
            ml: 3,
            borderRadius: "100px",
            backgroundColor: "#ffffff",
            p: 0,
            width: "450px",
          }}
          size="small"
          placeholder="Search products"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          color: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PersonOutlineIcon />
        <Link href="#" underline="hover" color="#ffffff" mr={2} ml={1}>
          Sign in
        </Link>
        <ShoppingBagOutlinedIcon />
        <Link href="#" underline="hover" color="#ffffff" mr={2} ml={1}>
          Cart
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
