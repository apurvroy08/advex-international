"use client"
import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import inddesimg from "../assets/inddesimgs/Egypt.png"
import inddesimg1 from "../assets/inddesimgs/HomeBanner1.png";
import inddesimg2 from "../assets/inddesimgs/homeBanner2.png";
import inddesimg3 from "../assets/inddesimgs/HomeBanner1.png";
import inddesimg4 from "../assets/inddesimgs/homeBanner2.png";
import Carousel from 'react-material-ui-carousel';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DestinationCard from './DestinationCard';
import Link from 'next/link';

const AdvexSpecials = () => {
  const bigDestinations = [
    { image: inddesimg1.src },
    { image: inddesimg2.src },
    { image: inddesimg3.src },
    { image: inddesimg4.src },
  ];

  const destinations = [
    { imageUrl: inddesimg.src, title: 'Kerala', startingPrice: '20,000' },
    { imageUrl: inddesimg1.src, title: 'Kerala', startingPrice: '20,000' },
    { imageUrl: inddesimg2.src, title: 'Kerala', startingPrice: '20,000' },
    { imageUrl: inddesimg3.src, title: 'Kerala', startingPrice: '20,000' },
    { imageUrl: inddesimg4.src, title: 'Kerala', startingPrice: '20,000' },
    { imageUrl: inddesimg.src, title: 'Kerala', startingPrice: '20,000' },
    { imageUrl: inddesimg1.src, title: 'Kerala', startingPrice: '20,000' },
    { imageUrl: inddesimg2.src, title: 'Kerala', startingPrice: '20,000' },
    { imageUrl: inddesimg3.src, title: 'Kerala', startingPrice: '20,000' },
    { imageUrl: inddesimg4.src, title: 'Kerala', startingPrice: '20,000' },
    { imageUrl: inddesimg.src, title: 'Kerala', startingPrice: '20,000' },
    { imageUrl: inddesimg1.src, title: 'Kerala', startingPrice: '20,000' },
    // Add more destination data as needed
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container maxWidth={"lg"}>
      <Box sx={{ marginTop: "50px", padding: 0 }}>
        <Grid sx={{ marginTop: "80px", padding: 0 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: "#000" }} fontWeight="bold">
              Advex International Travel Wizards
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#787b7c", margin: "10px 0px 20px" }}
            >
              Our Domestic holiday not only offers a breath of fresh air but
              is also a great way to explore different parts of the world and get
              a new…
              <Link href="/" style={{ textDecoration: "none" }}>
                <span style={{ fontSize: "14px", color: "#e91e20", marginLeft: "10px" }}>
                  read more
                </span>
              </Link>
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

        <Box sx={{ marginTop: '50px' }}>
          <Carousel
            indicatorContainerProps={{ style: { display: 'none' } }}
          >
            {bigDestinations.map((bigDestinations, index) => (
              <Grid
                key={index}
                component="div"
                sx={{
                  borderRadius: '5px',
                  width: '100%',
                  backgroundImage: `url(${bigDestinations.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '230px',
                }}
              ></Grid>
            ))}
          </Carousel>
        </Box>

      </Box>
    </Container>
  )
}

export default AdvexSpecials