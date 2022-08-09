import { Box, Grid, Link, ListItem, styled, Typography } from "@mui/material";
import { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContactUs from "./ContactUs";
import Help from "./Help";
import Information from "./Information";
import OurCompany from "./OurCompany";

export const FooterLink = styled(Link)(`
    color: #3A4451;
    font-size: 15px;
    font-weight: 400;
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
    <Box sx={{ backgroundColor: "#e6e8e9", py: 2, px: 4 }}>
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
      <Box display={"flex"} flexWrap="wrap" my={4}>
        <Typography flexGrow={1} fontSize={14} fontWeight={400} color="#535C67">
          © 2022 Customer Products. All rights reserved.
        </Typography>
        <Box display={"flex"} flexWrap="wrap" alignItems={"center"}>
          <Typography fontSize={14} fontWeight={400} color="#535C67">
            Region:&nbsp;
          </Typography>{" "}
          <Typography fontSize={14} fontWeight={600} color="#091625">
            United States
          </Typography>
          <ExpandMoreIcon fontSize="small" sx={{ mr: 4 }} />
          <Typography fontSize={14} fontWeight={400} color="#535C67">
            Language:&nbsp;
          </Typography>{" "}
          <Typography fontSize={14} fontWeight={600} color="#091625">
            English
          </Typography>
          <ExpandMoreIcon fontSize="small" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
