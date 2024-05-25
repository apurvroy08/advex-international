// App.js

import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-material-ui-carousel";
import { getHeroBanner } from "@/services";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const HeroSection = () => {

  const [heroBannerData, setHeroBannerData] = useState([]);

  useEffect(() => {
    getHeroBannerAsync();
  }, []);

  const getHeroBannerAsync = async () => {
    // Fix: Api call
    const res = await getHeroBanner();
    setHeroBannerData(res?.data?.data?.items)

  };
  return (
    <Box>
      <Carousel indicatorContainerProps={{ style: { display: "none" } }}>
        {heroBannerData.map((image, index) => (
          <Grid
            key={index}
            component="div"
            sx={{
              width: "100%",
              backgroundImage: `url(${image?.fields?.imgUrl?.fields?.file?.url})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              padding: "50px 100px",
              height: "86vh",
              textAlign: "center",
              color: "white",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <Container sx={{ padding: "40px 20px" }}>
                <Typography variant="h2" fontWeight="bold">
                  Huge collection of sections
                </Typography>
                <Typography variant="body1" sx={{ paddingTop: "40px" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </Container> */}
          </Grid>
        ))}
      </Carousel>
    </Box>
  )
};

export default HeroSection;
