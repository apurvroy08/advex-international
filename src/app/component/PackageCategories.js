"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import DestinationCard from "./DestinationCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDestination } from "@/services";
import { setAllDestinations } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAllDestinations } from "@/redux/selectors";

const PackageCategories = ({ data }) => {
  const dispatch = useDispatch();
  const AllDestinations = useSelector(selectAllDestinations);
  const [Destinations, setDestinations] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  useEffect(() => {
    if (AllDestinations.length === 0) {
      getDestinationAsync();
    }
  }, []);

  const getDestinationAsync = async () => {
    const res = await getDestination();
    const Destination = res?.data?.data?.items;
    //comment 
    dispatch(setAllDestinations(Destination));
    const filteredDestination = Destination?.filter((val) => {
      const destinationId = val?.fields?.categoryId?.fields?.uid;
      return destinationId && destinationId.includes(data?.fields?.uid);
    });
    setDestinations(filteredDestination);
  };

  // 
  useEffect(() => {
    const filteredDestination = AllDestinations?.filter((val) => {
      const destinationId = val?.fields?.categoryId?.fields?.uid;
      return destinationId && destinationId.includes(data?.fields?.uid);
    });
    setDestinations(filteredDestination);
  }, [])

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
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container maxWidth={"lg"}>
      <Grid sx={{ marginTop: "80px", padding: 0 }}>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h5" sx={{ color: "#000" }} fontWeight="bold">
            {data?.fields?.name}
          </Typography>
          {data?.fields?.description ? (
            <Typography
              sx={{
                fontSize: "14px",
                color: "#787b7c",
                margin: '3px 0px 20px',
                justifyContent: 'space-between',
                display: 'flex',
                flexDirection: { xs: "column" },
              }}
            >
              {showFullDescription
                ? data?.fields?.description
                : `${data?.fields?.description?.slice(0, 150)}...`}
              <span
                onClick={toggleDescription}
                // component="span"
                style={{ fontSize: "14px", color: "red", fontWeight: 600, cursor: "pointer", display: "flex" }}
              >
                {showFullDescription ? "read less" : "read more"}
              </span>
            </Typography>
          ) : (
            ""
          )}
        </Box>
        {data?.fields?.description ? "" : <br />}
        <Slider
          {...settings}
          autoplay={true}
          slidesToShow={4}
          slidesToScroll={3}
          dots
          // infinite
          speed={400}
        >
          {Destinations?.reverse().map((pac, index) => (
            <DestinationCard key={index} data={pac} />
          ))}
        </Slider>
      </Grid>
    </Container>
  );
};

export default PackageCategories;
