import { Box, List, Typography } from "@mui/material";
import { FC } from "react";
import { FooterLink, FooterListItem } from ".";

const Information: FC = () => {
  return (
    <Box>
      <Typography variant="h6">Information</Typography>
      <List>
        <FooterListItem>
          <FooterLink href="#">Contact us</FooterLink>
        </FooterListItem>
        <FooterListItem>
          <FooterLink href="#">Live chat</FooterLink>
        </FooterListItem>
        <FooterListItem>
          <FooterLink href="#">Privacy</FooterLink>
        </FooterListItem>
        <FooterListItem>
          <FooterLink href="#">Terms of use</FooterLink>
        </FooterListItem>
      </List>
    </Box>
  );
};

export default Information;
