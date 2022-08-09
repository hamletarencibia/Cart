import { FC } from "react";
import {
  Badge,
  Box,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useCart } from "../../hooks/useCart";

const Header: FC = () => {
  const { products } = useCart();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  console.log(mdDown);

  return (
    <Box
      sx={{
        py: 2,
        px: 4,
        backgroundColor: "#091625",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
        <img src={"/logo192.png"} height={40} alt="Cart" />
        {mdDown ? (
          <IconButton sx={{ color: "#ffffff" }}>
            <SearchIcon />
          </IconButton>
        ) : (
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
        )}
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
        <Badge
          badgeContent={products.length}
          color="primary"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <ShoppingBagOutlinedIcon />
        </Badge>
        <Link href="#" underline="hover" color="#ffffff" mr={2} ml={1}>
          Cart
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
