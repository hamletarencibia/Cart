import { Box, Grid, Link, ListItem, styled, Typography } from "@mui/material";
import { FC } from "react";
import ContactUs from "./ContactUs";
import Help from "./Help";
import Information from "./Information";
import OurCompany from "./OurCompany";

export const FooterLink = styled(Link)(`
    color: #787878;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`);

export const FooterListItem = styled(ListItem)(`
    padding-left: 0;
`);

const Footer: FC = () => {
  return (
    <Box sx={{ backgroundColor: '#e6e8e9', py: 2, px: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <ContactUs />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OurCompany />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Help />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Information />
        </Grid>
      </Grid>
      <Box>
        <Typography variant="subtitle1" color="#535C67">© 2022 Customer Products. All rights reserved.</Typography>
        <Box>
            
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
