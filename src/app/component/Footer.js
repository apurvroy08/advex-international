"use client";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import logoimg from "../assets/inddesimgs/logo.png";

const linkData = [
  {
    section: "Company",
    links: [
      { label: "Home", url: "/" },
      // { label: "About Us", url: "/about-us" },
      // { label: "Group Tours", url: "/" },
      // { label: "Tours At a Glance", url: "/tour-at-a-glance" },
      // Add more links as needed
    ],
  },
  {
    section: "Guest Services Links",
    links: [
      { label: "Guest Corner", url: "/guest-corner" },
      // { label: "Join as PSA", url: "/join-as-PSA" },
      { label: "Join as GSA", url: "/join-as-GSA" },
      // Add more links as needed
    ],
  },
  {
    section: "Legal",
    links: [
      // { label: "Online Payment", url: "/online-payment" },
      // { label: "Blog", url: "/blog" },
      // { label: "Testimonials", url: "/testimonials" },
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms & Condition", url: "/terms&condition" },
      // Add more links as needed
    ],
  },
  {
    section: "Help & Support",
    links: [
      { label: "Contact us", url: "/contact-us" },
      // { label: "FAQs", url: "/faqs" },
      // { label: "1800 266 1100", url: "/number" },
      { label: "info@advexin.com", url: "/email" },
      // Add more links as needed
    ],
  },
];

const socialMediaLinks = [
  {
    platform: "GitHub",
    icon: <FacebookOutlinedIcon />,
    url: "https://github.com/mui",
  },
  {
    platform: "Twitter",
    icon: <TwitterIcon />,
    url: "https://twitter.com/mui",
  },
  {
    platform: "LinkedIn",
    icon: <LinkedInIcon fontSize="small" />,
    url: "https://www.linkedin.com/company/mui/",
  },
  {
    platform: "YouTube",
    icon: <YouTubeIcon fontSize="small" />,
    url: "https://www.youtube.com/@MUI_hq",
  },
];

const Footer = () => {
  return (
    <Box
      minWidth={"lg"}
      component="footer"
      sx={{ background: "#f1f5f9" }}
    >
      <Container
        sx={{
          py: { xs: 4, sm: 6 },
          display: "grid",
          gridAutoColumns: "1fr",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 1,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "1fr 1.75fr",
            lg: "1fr 1.7fr",
          },
        }}
      >
        <Box>
          <Link href="/" aria-label="Go to homepage" sx={{ mb: 2 }}>
            <Image src={logoimg} alt="" style={{ width: "210px", height: "90px", aspectRatio: "10/9" }} />
          </Link>
          <Typography sx={{ paddingTop: "30px" }} variant="h5" fontWeight="bold" gutterBottom>
            Trusted by over 150+ client
          </Typography>
          {/* <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 2, mb: 2 }}
          >
            Get inspiration and have an overview about the plugins that we used
            to create the Material Kit.
          </Typography> */}

        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
            gridAutoColumns: "1fr",
            gap: 2,
          }}
        >
          {linkData.map((section, index) => (
            <Box key={index} sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontWeight="bold" variant="body2" sx={{ mb: .5 }}>
                {section.section}
              </Typography>
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.url}
                  style={{ textDecoration: "none", marginBottom: '4px' }}
                >
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  // sx={{ fontSize: "14px" }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          ))}
        </Box>
      </Container>
      <Stack spacing={1} direction="row" flexWrap="wrap" useFlexGap sx={{ justifyContent: "center", marginBottom: "10px" }}>
        {socialMediaLinks.map((link, index) => (
          <IconButton
            key={index}
            target="_blank"
            rel="noopener"
            href={link.url}
            aria-label={link.platform.toLowerCase()}
            title={link.platform}
            size="small"
          >
            {link.icon}
          </IconButton>
        ))}
      </Stack>
      <Divider sx={{ borderColor: '#e6e3e3' }} />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent={{ sm: "center" }}
        // alignItems={{ sm: "center" }}
        gap={{ xs: 2, sm: 1 }}
        sx={{ padding: "16px", textAlign: "center" }}
      >
        <Typography color="text.tertiary" variant="caption" fontWeight={400}>
          Copyright © {new Date().getFullYear()}.
          <span style={{ fontWeight: "bold" }}> Advex International Developed by iifetech</span>
        </Typography>
      </Stack>
    </Box>
    // <footer>
    //     <Box sx={{ background: '#fafbfe', borderTop: "1px solid grey" }}>
    //         <Container sx={{ padding: { xs: "20px 10px", md: "20px 30px" } }}>
    //             <Typography sx={{ fontSize: { xs: "14px", md: "16px" }, fontWeight: 700 }}>About Advex.com</Typography>
    //             <Typography sx={{ fontSize: { xs: "12px", md: "14px" }, color: "grey", padding: { xs: "10px 0px 20px", md: "10px 0px 30px" } }}>
    //                 Ever wished that there were an escape button on the keyboard of life? Well, since there isn’t, we are there for you.
    //                 The universal truth is that every person in this universe needs a break at some point - A break from the mundane routines
    //             </Typography>
    //             <Divider />
    //             <Grid sx={{ paddingY: { xs: "20px", md: "40px" }, gap: { xs: "10px", md: "0px" }, display: "flex", flexDirection: { xs: "column", md: "row" } }}>
    //                 <Grid sx={{ width: { xs: "100%", md: "25%" }, display: 'flex', justifyContent: { xs: "flex-start", sm: "center", md: "center" }, alignItems: "center", gap: "20px" }}>
    //                     <HomeIcon sx={{ paddingRight: "10px" }} />
    //                     <Typography>B-40, Shivalik, Malviya Nagar New Delhi-110017</Typography>
    //                 </Grid>
    //                 <Divider orientation="vertical" flexItem />
    //                 <Grid sx={{ width: { xs: "100%", md: "25%" }, display: 'flex', justifyContent: { xs: "flex-start", sm: "center", md: "center" }, alignItems: "center", gap: "20px" }}>
    //                     <AddIcCallIcon />
    //                     <Typography>011 68141111</Typography>
    //                 </Grid>
    //                 <Divider orientation="vertical" flexItem />
    //                 <Grid sx={{ width: { xs: "100%", md: "25%" }, display: 'flex', justifyContent: { xs: "flex-start", sm: "center", md: "center" }, alignItems: "center", gap: "20px" }}>
    //                     <EmailIcon />
    //                     <Typography>contactus@advex.com</Typography>
    //                 </Grid>
    //                 <Divider orientation="vertical" flexItem />
    //                 <Grid sx={{ width: { xs: "100%", md: "25%" }, display: 'flex', justifyContent: { xs: "flex-start", sm: "center", md: "center" }, alignItems: "center", gap: "20px" }}>
    //                     <FacebookOutlinedIcon sx={{ fontSize: "30px" }} />
    //                     <TwitterIcon sx={{ fontSize: "30px" }} />
    //                     <InstagramIcon sx={{ fontSize: "30px" }} />
    //                     <YouTubeIcon sx={{ fontSize: "30px" }} />
    //                     <LinkedInIcon sx={{ fontSize: "30px" }} />
    //                 </Grid>
    //             </Grid>
    //             <Divider />
    //             <Grid id sx={{ width: "100%", display: 'flex', justifyContent: "center", alignItems: "center", gap: "20px", paddingY: "20px" }}>
    //                 <Grid sx={{ border: "1px solid blue", width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "20px", padding: "5px" }}>
    //                     <TelegramIcon />
    //                     <Typography sx={{ fontSize: "12px" }}>Connect with us on Telegram</Typography>
    //                 </Grid>
    //             </Grid>
    //             <Divider />
    //             <Grid sx={{ paddingY: { xs: "20px", md: "40px" }, gap: { xs: "10px", md: "0px" }, display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
    //                 <Grid sx={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: "20px" }}>
    //                     <List>
    //                         <ListItem>About us</ListItem>
    //                         <ListItem>Advex Offers</ListItem>
    //                         <ListItem>Write a Review</ListItem>
    //                         <ListItem>Picture Credits</ListItem>
    //                         <ListItem>Advex Affiliates Network</ListItem>
    //                         <ListItem>Corporate Travel</ListItem>
    //                     </List>
    //                 </Grid>
    //                 <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", sm: "flex" } }} />
    //                 <Grid sx={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: "20px" }}>
    //                     <List>
    //                         <ListItem>Enquiry</ListItem>
    //                         <ListItem>Contact Us</ListItem>
    //                         <ListItem>Travellers Reviews</ListItem>
    //                         <ListItem>Feedback</ListItem>
    //                         <ListItem>Customer Support</ListItem>
    //                         <ListItem>Privacy Policy</ListItem>
    //                     </List>
    //                 </Grid>
    //                 <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", sm: "flex" } }} />
    //                 <Grid sx={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: "20px" }}>
    //                     <List>
    //                         <ListItem>Make Payment</ListItem>
    //                         <ListItem>Terms & Conditions</ListItem>
    //                         <ListItem>Important Announcement</ListItem>
    //                         <ListItem>Bank Account Details</ListItem>
    //                         <ListItem>Press Release</ListItem>
    //                         <ListItem>Visa Documents Required</ListItem>
    //                     </List>
    //                 </Grid>
    //             </Grid>
    //             <Typography sx={{ fontSize: "12px", color: "grey" }}>Note : All claims, disputes and litigation relating to online booking through this website anywhere from India or abroad shall be subject to jurisdiction of Courts of Delhi only. All Images shown here are for representation purpose only.</Typography>
    //         </Container>
    //         <Box sx={{ bgcolor: "#2c3544" }}>
    //             <Container sx={{ justifyContent: "center", display: "flex", paddingY: "20px" }}>
    //                 <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, color: "#fff" }}>Copyright © 2024 Advex Travel Private Limited. Corporate Identification no: U63040MH2001PLC131691
    //                 </Typography>
    //             </Container>
    //         </Box>
    //     </Box>
    // </footer>
  );
};

export default Footer;
