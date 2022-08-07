import { Box, Link, styled } from "@mui/material";
import { FC } from "react";

const NavbarLink = styled(Link)(`
    margin-left: 10px;
    margin-right: 10px;
    color: #787878;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`);

const Navbar: FC = () => {
  return (
    <Box sx={{ backgroundColor: '#e6e8e9', py: 2, px: 4 }}>
      <NavbarLink href="#">All Products</NavbarLink>
      <NavbarLink href="#">Packaging</NavbarLink>
      <NavbarLink href="#">Drinkware</NavbarLink>
      <NavbarLink href="#">Apparel</NavbarLink>
      <NavbarLink href="#">Notebooks</NavbarLink>
      <NavbarLink href="#">Backpacks</NavbarLink>
    </Box>
  );
};

export default Navbar;
