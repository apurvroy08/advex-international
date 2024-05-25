import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import magazineimg1 from "../assets/inddesimgs/Magazineimg1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DestinationCard from "./DestinationCard";
import Link from "next/link";

const Magazine = () => {
  const destinations = [
    { imageUrl: magazineimg1.src },
    { imageUrl: magazineimg1.src },
    { imageUrl: magazineimg1.src },
    { imageUrl: magazineimg1.src },
    { imageUrl: magazineimg1.src },
    { imageUrl: magazineimg1.src },
    { imageUrl: magazineimg1.src },
    { imageUrl: magazineimg1.src },
    { imageUrl: magazineimg1.src },
    { imageUrl: magazineimg1.src },
    { imageUrl: magazineimg1.src },
    { imageUrl: magazineimg1.src },    
  ];

  var settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ bgcolor: "#000", paddingY: "64px" }}>
      <Container maxWidth={"lg"}>
        <Grid sx={{ marginTop: "0px", padding: 0 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: "#787b7c" }} fontWeight="bold">
              EBROCHURE
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#787b7c",
                margin: "10px 0px 20px",
              }}
            >
              A TRAVEL MAGAZINE BY Advex TOURS 2024
            </Typography>
          </Box>

          <Slider
            {...settings}
            autoplay={true}
            slidesToShow={4}
            slidesToScroll={3}
            dots
            infinite
            speed={400}
          >
            {destinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </Slider>
        </Grid>
      </Container>
    </Box>
  );
};

export default Magazine;
