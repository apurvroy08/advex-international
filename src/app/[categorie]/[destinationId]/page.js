"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import Link from "next/link";
import { getPackages } from "@/services";
// import { useRouter } from "next/router";
import { setAllPackages } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPackages } from "@/redux/selectors";
import Loader from "@/app/component/Loader";
import SkeletonComponent from "@/app/component/Skeleton";
import EnquiryForm from "@/app/component/EnquiryForm";

const Destination = ({ params }) => {
  const dispatch = useDispatch();
  const AllPackages = useSelector(selectAllPackages);
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };



  const [modalOpen, setModalOpen] = useState(false);     // Enquiry form  
  const handleOpenForm = () => {
    setModalOpen(true);
  };


  useEffect(() => {
    if (AllPackages.length === 0) {
      getPackagesAsync();
    }
  }, []);

  const getPackagesAsync = async () => {
    setIsLoading(true);
    const res = await getPackages();
    const pack = res?.data?.data?.items;
    dispatch(setAllPackages(pack));

    const filteredPackages = pack?.filter((pac) => {
      const destinationId = pac?.fields?.destinationId?.fields?.uid;
      return destinationId === params.destinationId;
    });
    setPackages(filteredPackages);
    setIsLoading(false);
  };

  // showing packages from redux

  useEffect(() => {
    const filteredPackages = AllPackages?.filter((pac) => {
      const destinationId = pac?.fields?.destinationId?.fields?.uid;
      return destinationId === params.destinationId;
    });
    setPackages(filteredPackages);
  }, []);

  const desc = "Explore the beauty of Crazy deal with ADVEX special tour packages. Listed below are some of the top packages for Crazy deal.Explore the beauty of Crazy deal with ADVEX special tour packages. Listed below are some of the top packages for Crazy deal."


  return (
    <Box sx={{ paddingY: "70px" }}>
      {isLoading ? (
        <SkeletonComponent />
      ) : (
        <Container>
          <Typography sx={{ fontSize: "26px", fontWeight: 600, color: "#333" }}>
            Crazy Deal Holiday Pack
          </Typography>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "13px" }}>
              {showFullDescription ? desc : `${desc.slice(0, 150)}...`}
            </Typography>
            <Typography
              onClick={toggleDescription}
              component="span"
              sx={{
                fontSize: "14px",
                color: "red",
                // marginLeft: "10px",
                gap: "20px",
                cursor: "pointer",
              }}
            >
              {showFullDescription ? "read less" : "read more"}
            </Typography>
          </Box>
          {packages.map((pack, index) => (
            <Grid
              key={index}
              container
              sx={{
                display: "flex",
                marginTop: "50px",
                borderRadius: "10px",
                boxShadow:
                  "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ height: "100%" }}>
                  <Link
                    style={{ textDecoration: "none" }}
                    key={index}
                    href={`${window?.location?.pathname}/${pack.fields.uid}`}
                    passHref
                  >
                    <img
                      src={`https:${pack.fields.image[0].fields.file.url}`}
                      alt=""
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    />
                  </Link>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", marginY: { xs: "40px", md: "0px" } }}
              >
                <Box sx={{ width: "100%" }}>
                  <Divider sx={{ display: { xs: "flex", md: "none" } }} />
                  <Box sx={{ display: "flex", width: "100%", minHeight: "70px" }} >
                    <Box
                      sx={{
                        width: "70%",
                        minHeight: "50px",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        padding: "10px 20px",
                      }}
                    >
                      <Link
                        style={{ textDecoration: "none" }}
                        key={index}
                        href={`${window?.location?.pathname}/${pack.fields.uid}`}
                        passHref
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: "14px", sm: "24px" },
                            color: "#000",
                            fontWeight: 600,
                          }}
                        >
                          {pack?.fields.title}
                        </Typography>
                      </Link>
                    </Box>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ display: { xs: "none", sm: "flex" } }}
                    />
                    <Box
                      sx={{
                        width: "30%",
                        display: { xs: "none", sm: "flex" },
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography sx={{ fontSize: "13px", color: "#000" }}>
                        {pack?.fields.nights} Nights
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "#000" }}>
                        {pack?.fields.days} Days
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Grid
                    sx={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "start",
                      alignItems: "center",
                      minHeight: "70px",
                      padding: "10px 20px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        paddingY: "10px",
                        display: { xs: "none", sm: "flex" },
                        color: "#000",
                      }}
                    >
                      Customized Holidays
                    </Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ display: { xs: "none", sm: "flex" } }}
                    />
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#000",
                      }}
                    >
                      <TrainOutlinedIcon />
                      <span>→ Mauritius ({pack?.fields.days}D) →</span>
                      <TrainOutlinedIcon />
                    </Typography>
                  </Grid>
                  <Divider />
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      // gap: "20px",
                      padding: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <Grid
                      sx={{
                        width: "70px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Grid
                        sx={{
                          height: "45px",
                          width: "45px",
                          border: "2px solid #e5e5e5",
                          display: "flex",
                          borderRadius: "50%",
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: "15px",
                          cursor: "pointer",
                          transition: "background-color 0.3s, color 0.3s",
                          ":hover": {
                            backgroundColor: "#1976d2",
                            "& svg": {
                              color: "#fff",
                            },
                          },
                        }}
                      >
                        <LightModeIcon sx={{ color: "#000" }} />
                      </Grid>
                      <Grid>
                        <Typography sx={{ fontSize: "13px", color: "#000" }}>
                          Highlights
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      sx={{
                        width: "70px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Grid
                        sx={{
                          height: "45px",
                          width: "45px",
                          border: "2px solid #e5e5e5",
                          display: "flex",
                          borderRadius: "50%",
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: "15px",
                          cursor: "pointer",
                          transition: "background-color 0.3s, color 0.3s",
                          ":hover": {
                            backgroundColor: "#1976d2",
                            "& svg": {
                              color: "#fff",
                            },
                          },
                        }}
                      >
                        <CameraAltOutlinedIcon sx={{ color: "#000" }} />
                      </Grid>
                      <Grid>
                        <Typography sx={{ fontSize: "13px", color: "#000" }}>
                          Sightseeing
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      sx={{
                        width: "70px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Grid
                        sx={{
                          height: "45px",
                          width: "45px",
                          border: "2px solid #e5e5e5",
                          display: "flex",
                          borderRadius: "50%",
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: "15px",
                          cursor: "pointer",
                          transition: "background-color 0.3s, color 0.3s",
                          ":hover": {
                            backgroundColor: "#1976d2",
                            "& svg": {
                              color: "#fff",
                            },
                          },
                        }}
                      >
                        <HotelOutlinedIcon sx={{ color: "#000" }} />
                      </Grid>
                      <Grid>
                        <Typography sx={{ fontSize: "13px", color: "#000" }}>
                          Hotels
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      sx={{
                        width: "70px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Grid
                        sx={{
                          height: "45px",
                          width: "45px",
                          border: "2px solid #e5e5e5",
                          display: "flex",
                          borderRadius: "50%",
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: "15px",
                          cursor: "pointer",
                          transition: "background-color 0.3s, color 0.3s",
                          ":hover": {
                            backgroundColor: "#1976d2",
                            "& svg": {
                              color: "#fff",
                            },
                          },
                        }}
                      >
                        <FlightTakeoffOutlinedIcon sx={{ color: "#000" }} />
                      </Grid>
                      <Grid>
                        <Typography sx={{ fontSize: "13px", color: "#000" }}>
                          Flights
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      sx={{
                        width: "70px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Grid
                        sx={{
                          height: "45px",
                          width: "45px",
                          border: "2px solid #e5e5e5",
                          display: "flex",
                          borderRadius: "50%",
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: "15px",
                          cursor: "pointer",
                          transition: "background-color 0.3s, color 0.3s",
                          ":hover": {
                            backgroundColor: "#1976d2",
                            "& svg": {
                              color: "#fff",
                            },
                          },
                        }}
                      >
                        <RestaurantIcon sx={{ color: "#000" }} />
                      </Grid>
                      <Grid>
                        <Typography sx={{ fontSize: "13px", color: "#000" }}>
                          Meals
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      sx={{
                        width: "70px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Grid
                        sx={{
                          height: "45px",
                          width: "45px",
                          border: "2px solid #e5e5e5",
                          display: "flex",
                          borderRadius: "50%",
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: "15px",
                          cursor: "pointer",
                          transition: "background-color 0.3s, color 0.3s",
                          ":hover": {
                            backgroundColor: "#1976d2",
                            "& svg": {
                              color: "#fff",
                            },
                          },
                        }}
                      >
                        <TrainOutlinedIcon sx={{ color: "#000" }} />
                      </Grid>
                      <Grid>
                        <Typography sx={{ fontSize: "13px", color: "#000" }}>
                          Trains
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider sx={{ display: { xs: "flex", md: "none" } }} />
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ display: { xs: "none", md: "flex" } }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    padding: "0px 15px 30px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // justifyContent: "center"
                  }}
                >
                  <Typography
                    sx={{ fontSize: "30px", fontWeight: 600, color: "#333" }}
                  >
                    {/* <CurrencyRupeeIcon /> */}
                    {pack?.fields?.currency === "euro" && "€"}
                    {pack?.fields?.currency === "rupee" && "₹"}
                    {pack?.fields?.currency === "dollar" && "$"}
                    {pack?.fields.price}
                  </Typography>
                  <Typography sx={{ fontSize: "13px", color: "#000" }}>
                    Starting price per adult
                  </Typography>
                  {/* <Grid
                    sx={{
                      borderRadius: "10px",
                      bgcolor: "#dfe9f6",
                      marginY: "10px",
                      minHeight: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <Typography sx={{ fontSize: "13px", color: "#000" }}>
                      EMI starting from Rs.3829 per month
                    </Typography>
                  </Grid> */}
                  <Grid
                    sx={{ display: "flex", gap: "10px", paddingTop: "40px" }}
                  >
                    <Button variant="outlined" sx={{ minHeight: "30px" }}>
                      <Typography sx={{ fontSize: "9px", color: "#000" }}>
                        Want us to call you ?
                      </Typography>
                    </Button>
                    <Button variant="contained" onClick={handleOpenForm}>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          minHeight: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#fff",
                        }}
                      >
                        Enquire Now
                      </Typography>
                    </Button>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Container>
      )
      }
      {modalOpen && <EnquiryForm open={modalOpen} onClose={() => setModalOpen(false)} />}

    </Box >
  );
};

export default Destination;
