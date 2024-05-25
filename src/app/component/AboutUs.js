"use client";
import React from "react";
import { Box, Container, Grid, Typography, Link, Stack } from "@mui/material";
import AboutUsImg from "../assets/inddesimgs/aboutus-placeholder.png";
import Image from "next/image";

function AboutUs() {
  return (
    <Box component={"div"}>
      <Box
        sx={{
          minHeight: "150px",
          padding: "80px 100px 40px",
          background:
            "linear-gradient(-45deg,rgb(239 207 3),rgb(235 209 4))",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            sx={{ fontWeight: 500, color: "#fff", paddingTop: "80px",textShadow: '3px 2px 4px #938f8fbd' }}
          >
            About Us
          </Typography>
        </Container>
      </Box>
      <Container sx={{padding:'60px 0px 100px'}}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{display:'flex',alignItems:'center',justifyContent:'center'}}
        >
          <Box>
            <Image src={AboutUsImg} alt=""  />
          </Box>
          <Box sx={{}}>
            <Typography
              variant="p"
              sx={{
                fontWeight: "800",
                color: "#0f75bb",
                display: "inline-block",
                textTransform: "uppercase",
              }}
            >
              What we achieved
            </Typography>
            <Typography variant="h4" sx={{ padding: "10px 0px 40px",fontWeight: "600", }}>
              We grow our business with full potential by the innovation.
            </Typography>
            <Typography variant="body2">
           <b>Advex International Travel Wizards</b>  is a pure B2B Destination Management Company with its Offices in UK, Spain, Singapore and India. We are specialized in ground handling services for Europe, United Kingdom. The range of service offered by us to the travel agents and Tour Operator is Hotels, Transfers, SIC tours, Museum Tickets, Attraction Tickets, Transportation, Local multilingual Guides and Restaurants etc. We can promise you to provide the reasonable price with the most pleasurable and satisfying services. <br />
              <br />
              <b>Advex International Travel Wizards</b> provides personalized European Honeymoon and European Vacation planning services that are tailored to your specific needs and interests. We are the Europe destination experts who specialize entirely only in Europe Destination. All of our specialists have firsthand European travel experience, allowing us to provide you with personal experiences, knowledge, and a love for European travel that you will not find anywhere else. Every personalized European honeymoon, holiday, and travel package we design is tailored to your preferences and budget.<br />
              <br />
              Our Europe fixed departure Group Tour Packages are a safe and fun way to travel for individuals or families. Group Tours led by experienced tour manager/guides. A fixed departure is a pre-planned with fixed departure dates and itineraries that are designed for tourists who like the pleasure of traveling in a group and exchanging culture experiences with like-minded people. Team <b>Advex International Travel Wizards</b> has planned a series of fixed departure for the summer season. These destinations have been carefully picked after an in-depth study.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default AboutUs;
