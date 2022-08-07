import { Box, List, Typography } from "@mui/material";
import { FC } from "react";
import { FooterLink, FooterListItem } from ".";

const Help: FC = () => {
  return (
    <Box>
      <Typography variant="h6">How can we help</Typography>
      <List>
        <FooterListItem>
          <FooterLink href="#">Place a ticket</FooterLink>
        </FooterListItem>
        <FooterListItem>
          <FooterLink href="#">Track your order</FooterLink>
        </FooterListItem>
        <FooterListItem>
          <FooterLink href="#">Help center</FooterLink>
        </FooterListItem>
      </List>
    </Box>
  );
};

export default Help;
