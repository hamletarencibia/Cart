import { Box, IconButton, styled, Typography } from "@mui/material";
import { FC } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialMediaButtons = styled(IconButton)(`
    margin-right: 10px;
    background-color: #535C67;
    color: #ffffff;
    &:hover {
        background-color: #424b56;
    }
`);

const ContactUs: FC = () => {
  return (
    <Box sx={{ maxWidth: "80%" }}>
      <img src={"/logo192.png"} height={40} />
      <Typography variant="subtitle2" color="#6B737C">
        We sell custom products for all your needs. Packs and bulk products that
        you will enjoy.
      </Typography>
      <Typography variant="subtitle2">
        <PhoneIcon fontSize="small" /> +1-202-555-0129
      </Typography>
      <Box mt={2}>
        <SocialMediaButtons size="small">
          <FacebookIcon fontSize="inherit" />
        </SocialMediaButtons>
        <SocialMediaButtons size="small">
          <TwitterIcon fontSize="inherit" />
        </SocialMediaButtons>
        <SocialMediaButtons size="small">
          <InstagramIcon fontSize="inherit" />
        </SocialMediaButtons>
        <SocialMediaButtons size="small">
          <LinkedInIcon fontSize="inherit" />
        </SocialMediaButtons>
        <SocialMediaButtons size="small">
          <YouTubeIcon fontSize="inherit" />
        </SocialMediaButtons>
      </Box>
    </Box>
  );
};

export default ContactUs;
