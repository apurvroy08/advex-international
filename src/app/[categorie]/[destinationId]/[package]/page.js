"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  Paper,
  Link,
  Divider,
} from "@mui/material";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import CallIcon from "@mui/icons-material/Call";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Carousel from "react-material-ui-carousel";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllDestinations, selectAllPackages } from "@/redux/selectors";
import { useState } from "react";
import { setAllDestinations, setAllPackages } from "@/redux/actions";
import { getDestination, getPackages } from "@/services";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Loader from "@/app/component/Loader";
import SkeletonComponent from "@/app/component/Skeleton";
import jsPDF from "jspdf";
import EnquiryForm from "@/app/component/EnquiryForm";
import ItineraryPdf from "@/app/component/ItineraryPdf";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Itinery tabs
// const TabPanel = ({ value, index, activities }) => (
//   <div role="tabpanel" hidden={value !== index}>
//     {value === index && (
//       <Typography component="div" sx={{ p: 2 }}>
//         {activities[index].activity}
//       </Typography>
//     )}
//   </div>
// );

const Details = ({ params }) => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const [selectedPackage, setSelectedPackage] = useState("");
  const AllPackages = useSelector(selectAllPackages);
  const AllDestinations = useSelector(selectAllDestinations);
  const [itineraryTabValue, setItineraryTabValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);     // Enquiry form  
  const [showItineraryPdf, setShowItineraryPdf] = useState(false);


  const handleOpenForm = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    if (AllDestinations.length === 0) {
      getDestinationAsync();
    }
  }, []);

  const getDestinationAsync = async () => {
    setIsLoading(true);
    const res = await getDestination();
    const Destination = res?.data?.data?.items;
    dispatch(setAllDestinations(Destination));
    setIsLoading(false);
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
      return pac?.fields?.uid === params.package;
    });
    setSelectedPackage(filteredPackages[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    const filteredPackages = AllPackages?.filter((pac) => {
      return pac?.fields?.uid === params.package;
    });
    setSelectedPackage(filteredPackages[0]);
    setIsLoading(false);
  }, []);

  const handleChangeItineraryTabs = (event, newValue) => {
    setItineraryTabValue(newValue);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Creating function to download Email itinerary
  const itineraryData = selectedPackage?.fields?.itinerary;


  const handleItineraryDownload = () => {
    setShowItineraryPdf(true);
  }

  useEffect(() => {
    if (showItineraryPdf) {
      setShowItineraryPdf(false);
    }
  }, [showItineraryPdf])


  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array?.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  const handleDayChange = (day) => {
    if (day >= 0 && day < selectedPackage?.fields?.itinerary.length) {
      setItineraryTabValue(day);
    }
  };

  // if (isLoading === true) {
  //   return <Loader />;
  // }

  console.log(selectedPackage, "Hhiu");

  return (
    <Box sx={{ marginY: "100px" }}>
      {isLoading ? (
        <SkeletonComponent />
      ) : (
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              md={8}
              sx={{ paddingRight: { xs: "0px", md: "20px", lg: "40px" } }}
            >
              <Carousel
                indicatorContainerProps={{ style: { display: "none" } }}
                navButtonsAlwaysVisible
                nextButtonProps={{ style: { backgroundColor: "#fff" } }}
                prevButtonProps={{ style: { backgroundColor: "#fff" } }}
              >
                {selectedPackage?.fields?.image.map((img, index) => (
                  <Grid
                    key={index}
                    component="div"
                    sx={{
                      borderRadius: "20px",
                      width: "100%",
                      backgroundImage: `url(${img?.fields?.file.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "400px",
                    }}
                  ></Grid>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography sx={{ fontSize: "30px", fontWeight: 600 }}>
                {selectedPackage?.fields?.title}
              </Typography>
              <Typography sx={{ fontWeight: 600, marginBottom: "10px" }}>
                {`${selectedPackage?.fields?.days}D/${selectedPackage?.fields?.nights}N`}
              </Typography>
              <Typography sx={{ fontSize: "14px", marginBottom: "15px" }}>
                Starts & End City: {selectedPackage?.fields?.startAndEndCity}
              </Typography>
              <Grid
                sx={{
                  borderRadius: "15px",
                  padding: "25px 20px 20px",
                  boxShadow: "0 1px 2px #03363f66, 0 -1px 2px #03363f0a",
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>Start From</Typography>
                <Typography sx={{ fontSize: "30px", fontWeight: 600 }}>
                  {selectedPackage?.fields?.currency === "euro" && "€"}
                  {selectedPackage?.fields?.currency === "rupee" && "₹"}
                  {selectedPackage?.fields?.currency === "dollar" && "$"}
                  {selectedPackage?.fields?.price}*
                </Typography>
                <Grid
                  sx={{
                    marginTop: "20px",
                    display: "flex",
                    gap: "10px",
                    marginBottom: "15px",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{ height: "45px", width: "60%", borderRadius: "30px" }}
                  >
                    <Typography
                      sx={{
                        textTransform: "none",
                        fontSize: { xs: "13px", sm: "16px" },
                      }}
                    >
                      Check Availability
                    </Typography>
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ width: "40%", height: "45px", borderRadius: "30px" }}
                    onClick={handleOpenForm}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", sm: "16px" },
                        textTransform: "none",
                      }}
                    >
                      Enquire Now
                    </Typography>
                  </Button>
                </Grid>
                <Grid
                  sx={{ display: "flex", gap: "10px", marginBottom: "20px" }}
                >
                  <StorageRoundedIcon
                    sx={{ fontSize: "18px", marginTop: "3px" }}
                  />
                  <Typography sx={{ fontSize: "14px" }}>
                    Comprehensive{" "}
                    <span style={{ fontWeight: 600 }}>
                      Tour Price Inclusions and Exclusions
                    </span>
                  </Typography>
                </Grid>
                <Grid sx={{ display: "flex", gap: "10px" }}>
                  <CallIcon />
                  <Typography sx={{ fontSize: "14px" }}>
                    Call Us for details{" "}
                    <span style={{ fontWeight: 600, fontSize: "18px" }}>
                      1800 266 1100
                    </span>{" "}
                    <span style={{ fontSize: "13px" }}>(Toll Free)</span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: { xs: "100%", md: "65%", lg: "63%" },
              boxShadow: "0 1px 2px #03363f66, 0 -1px 2px #03363f0a",
              borderRadius: "20px",
              marginTop: "30px",
              padding: "30px 20px",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "12px", sm: "15px" }, color: "#191e30" }}
            >
              Plan Your Adventure:
            </Typography>
            <Grid>
              <Link
                onClick={handleItineraryDownload}
                sx={{ display: "flex", gap: "8px", textDecoration: "none", cursor: "pointer" }}
              >
                <MailOutlinedIcon sx={{ color: "#1976d2" }} />
                <Typography
                  sx={{
                    color: "#1976d2",
                    fontWeight: 600,
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                >
                  Email Itinerary
                </Typography>
              </Link>
            </Grid>
            <Grid sx={{ display: "flex", gap: "8px" }}>
              <Link
                onClick={handleOpenForm}
                sx={{ display: "flex", gap: "8px", textDecoration: "none", cursor: "pointer" }}

              >
                <HelpOutlineOutlinedIcon sx={{ color: "#1976d2" }} />
                <Typography
                  sx={{
                    color: "#1976d2",
                    fontWeight: 600,
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                >
                  Enquire Now
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid sx={{ marginTop: "50px", width: { xs: "100%", md: "65%" } }}>
            <Carousel
              indicatorContainerProps={{ style: { display: "none" } }}
              navButtonsAlwaysVisible
            >
              {chunkArray(selectedPackage?.fields?.image, 4).map(
                (chunk, index) => (
                  <Grid
                    key={index}
                    component="div"
                    sx={{
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    {chunk.map((img, innerIndex) => (
                      <Grid
                        key={innerIndex}
                        component="div"
                        sx={{
                          flex: "1",
                          borderRadius: "20px",
                          margin: "0 8px",
                          backgroundImage: `url(${img?.fields?.file.url})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: "170px",
                        }}
                      ></Grid>
                    ))}
                  </Grid>
                )
              )}
            </Carousel>
          </Grid>
          <Grid sx={{ marginTop: "100px" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{ textTransform: "none" }}
                  label="Highlights"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ textTransform: "none" }}
                  label="Tour Itinerary"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ textTransform: "none" }}
                  label="Available Date"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Grid>
                <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                  Highlights
                </Typography>
                <List>
                  {selectedPackage?.fields?.highlights.map((elm, index) => (
                    <ListItem
                      key={index}
                      sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}
                    >
                      <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                      <Typography>{elm.feature}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Grid>
                <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                  Tour Itinerary
                </Typography>

                {/* Itinerary */}
                <Box sx={{ width: "100%", mt: "20px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      paddingY: "10px, 10px",
                      paddingLeft: "20px",
                      marginBottom: "20px",
                      // boxShadow:
                      //   "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                      // justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        display: { xs: "none", sm: "flex" },
                        alignItems: "center",
                        mr: "20px",
                      }}
                    >
                      Days
                    </Typography>

                    <Button
                      onClick={() => handleDayChange(itineraryTabValue - 1)}
                      // disabled={itineraryTabValue === 0}
                      sx={{
                        display: itineraryTabValue === 0 ? "none" : "block",
                        minWidth: { xs: "30px", md: "64px" },
                      }}
                    >
                      <NavigateBeforeIcon />
                    </Button>
                    <Tabs
                      value={itineraryTabValue}
                      onChange={handleChangeItineraryTabs}
                      indicatorColor="primary"
                      textColor="primary"
                    //  sx={{   width: "80%"}}
                    >
                      {selectedPackage?.fields?.itinerary.map((day, index) => (
                        <Tab
                          key={index}
                          label={day.day}
                          {...a11yProps(index)}
                          sx={{
                            fontSize: { xs: "14px", sm: "16px" },
                            color: "black",
                            minWidth: { xs: "40px", sm: "90px" },
                            display: "flex",
                            flexWrap: { xs: "wrap", md: "no-wrap" },
                          }}
                        />
                      ))}
                    </Tabs>
                    <Button
                      onClick={() => handleDayChange(itineraryTabValue + 1)}
                      sx={{
                        display:
                          itineraryTabValue ===
                            selectedPackage?.fields?.itinerary.length - 1
                            ? "none"
                            : "block",
                      }}
                    >
                      <NavigateNextIcon />
                    </Button>
                  </Box>

                  {selectedPackage?.fields?.itinerary.map((item, index) => (
                    <CustomTabPanel
                      key={index}
                      value={itineraryTabValue}
                      index={index}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "18px",
                            marginBottom: "10px",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            mt: "10px",
                            fontSize: "16px",
                            lineHeight: "1.5",
                          }}
                        >
                          {item.activity1}
                        </Typography>
                        <Typography
                          sx={{
                            mt: "10px",
                            fontSize: "16px",
                            lineHeight: "1.5",
                          }}
                        >
                          {item.activity2}
                        </Typography>
                        <Typography
                          sx={{
                            mt: "10px",
                            fontSize: "16px",
                            lineHeight: "1.5",
                          }}
                        >
                          {item.stay}
                        </Typography>
                      </Box>
                    </CustomTabPanel>
                  ))}
                </Box>

                {/* <Grid sx={{ display: "flex", gap: "15px", marginY: "20px" }}>
                <Button
                  variant="outlined"
                  sx={{ height: "50px", borderRadius: "30px" }}
                >
                  <Typography>Jan 1, 2024 TO Mar 31, 2024</Typography>
                </Button>
                <Button
                  variant="contained"
                  sx={{ height: "50px", borderRadius: "30px" }}
                >
                  <Typography>Apr 1, 2024 TO Mar 31, 2025</Typography>
                </Button>
              </Grid> */}
                {/* <Typography sx={{ paddingY: "10px" }}>
                Itinerary is valid from{" "}
                <span style={{ fontWeight: 600 }}>Apr 1, 2024</span> to{" "}
                <span style={{ fontWeight: 600 }}>Mar 31, 2025</span>
              </Typography> */}
                {/* <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                Dubai Abu Dhabi
              </Typography> */}
                {/* <Grid
                sx={{
                  bgcolor: "#f5f5f7",
                  padding: "25px 20px",
                  marginY: "20px",
                  width: "70%",
                  borderRadius: "10px",
                }}
              >
                <Grid sx={{ display: "flex", gap: "8px" }}>
                  <AccessTimeOutlinedIcon />
                  <Typography>
                    <span style={{ fontWeight: 600 }}>7</span> Days{" "}
                    <span style={{ fontWeight: 600 }}>6</span> Nights{" "}
                    <span style={{ fontWeight: 600 }}> 2</span> Cities Country
                  </Typography>
                </Grid>
                <Grid sx={{ display: "flex", marginTop: "10px", gap: "8px" }}>
                  <LocationOnOutlinedIcon />
                  <Typography>UAE: Dubai 4N, Abu Dhabi 2N</Typography>
                </Grid>
              </Grid> */}
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Typography>Available Dates : 2024</Typography>
              <Grid container sx={{ display: "flex", marginTop: "30px" }}>
                {selectedPackage?.fields?.availableDate?.map((item, index) => (
                  <>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", border: "1px solid grey", padding: "5px 10px" }}>
                      <Grid sx={{ width: "50%" }}>{item.month}</Grid>
                      <Grid>{item.date}</Grid>
                    </Grid>
                    {/* <Divider orientation="vertical" flexItem /> */}
                  </>
                ))}
                {/* <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", }}>
                  <Grid sx={{ width: "50%" }}>Month</Grid>
                  <Grid>Date</Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                  <Grid sx={{ width: "50%" }}>Month</Grid>
                  <Grid>Date</Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", }}>
                  <Grid sx={{ width: "50%" }}>Month</Grid>
                  <Grid>Date</Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                  <Grid sx={{ width: "50%" }}>Month</Grid>
                  <Grid>Date</Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", }}>
                  <Grid sx={{ width: "50%" }}>Month</Grid>
                  <Grid>Date</Grid>
                </Grid> */}
              </Grid>
            </CustomTabPanel>
          </Grid>
        </Container>
      )}
      {modalOpen && <EnquiryForm open={modalOpen} onClose={() => setModalOpen(false)} />}
      {showItineraryPdf && <ItineraryPdf itineraryData={Array.isArray(itineraryData) ? itineraryData : [itineraryData]} />}

    </Box>
  );
};

export default Details;
