import { Box, List, Typography } from "@mui/material";
import { FC } from "react";
import { FooterLink, FooterListItem } from ".";

const OurCompany: FC = () => {
  return (
    <Box>
      <Typography variant="h6">Our Company</Typography>
      <List>
        <FooterListItem><FooterLink href="#">About us</FooterLink></FooterListItem>
        <FooterListItem><FooterLink href="#">FAQ</FooterLink></FooterListItem>
        <FooterListItem><FooterLink href="#">Partnerships</FooterLink></FooterListItem>
        <FooterListItem><FooterLink href="#">Sustainability</FooterLink></FooterListItem>
        <FooterListItem><FooterLink href="#">Blog</FooterLink></FooterListItem>
      </List>
    </Box>
  );
};

export default OurCompany;
