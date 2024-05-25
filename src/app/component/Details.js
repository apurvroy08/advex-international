import { Box, Button, Container, Grid, List, ListItem, Typography } from '@mui/material'
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import CallIcon from '@mui/icons-material/Call';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import inddesimg1 from "../assets/inddesimgs/tajimg.png";
import inddesimg2 from "../assets/inddesimgs/bollywoodimg.png";
import inddesimg3 from "../assets/inddesimgs/filmimg.png";
import Carousel from 'react-material-ui-carousel';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Details = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const bigDestinations = [
        { image: inddesimg1.src },
        { image: inddesimg2.src },
        { image: inddesimg3.src },
        { image: inddesimg2.src },
        { image: inddesimg3.src },
        { image: inddesimg2.src },
    ];

    function chunkArray(array, chunkSize) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }
    return (
        <Box sx={{ marginY: "100px" }}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={8} sx={{ paddingRight: { xs: "0px", md: "20px", lg: "40px" } }}>
                        <Carousel
                            indicatorContainerProps={{ style: { display: 'none' } }}
                            navButtonsAlwaysVisible
                            nextButtonProps={{ style: { backgroundColor: '#fff' } }}
                            prevButtonProps={{ style: { backgroundColor: '#fff' } }}
                        >
                            {bigDestinations.map((bigDestinations, index) => (
                                <Grid
                                    key={index}
                                    component="div"
                                    sx={{
                                        borderRadius: '20px',
                                        width: '100%',
                                        backgroundImage: `url(${bigDestinations.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '400px',
                                    }}
                                ></Grid>
                            ))}
                        </Carousel>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ fontSize: '30px', fontWeight: 600 }}>Dubai Abu Dhabi</Typography>
                        <Typography sx={{ fontWeight: 600, marginBottom: '10px' }}>5N/6D</Typography>
                        <Typography sx={{ fontSize: "14px", marginBottom: "15px" }}>Starts & End City: Mumbai</Typography>
                        <Grid sx={{ borderRadius: "15px", padding: "25px 20px 20px", boxShadow: '0 1px 2px #03363f66, 0 -1px 2px #03363f0a' }}>
                            <Typography sx={{ fontSize: "14px" }}>Start From</Typography>
                            <Typography sx={{ fontSize: "30px", fontWeight: 600 }}>₹121,030*</Typography>
                            <Grid sx={{ marginTop: "20px", display: "flex", gap: "10px", marginBottom: "15px" }}>
                                <Button variant='outlined' sx={{ height: "45px", width: "60%", borderRadius: '30px' }}>
                                    <Typography sx={{ textTransform: "none", fontSize: { xs: "13px", sm: "16px" } }}>
                                        Check Availability
                                    </Typography>
                                </Button>
                                <Button variant='contained' sx={{ width: '40%', height: "45px", borderRadius: "30px" }}>
                                    <Typography sx={{ fontSize: { xs: "13px", sm: "16px" }, textTransform: "none" }}>Book Now</Typography>
                                </Button>
                            </Grid>
                            <Grid sx={{ display: "flex", gap: "10px", marginBottom: '20px' }}>
                                <StorageRoundedIcon sx={{ fontSize: "18px", marginTop: "3px" }} />
                                <Typography sx={{ fontSize: "14px" }}>
                                    Comprehensive<span style={{ fontWeight: 600 }}>Tour Price Inclusions and Exclusions</span>
                                </Typography>
                            </Grid>
                            <Grid sx={{ display: 'flex', gap: "10px" }}>
                                <CallIcon />
                                <Typography sx={{ fontSize: "14px" }}>Call Us for details <span style={{ fontWeight: 600, fontSize: '18px' }}>1800 266 1100</span> <span style={{ fontSize: "13px" }}>(Toll Free)</span></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{
                    display: "flex", justifyContent: "space-between", width: { xs: "100%", md: "65%", lg: "63%" }, boxShadow: '0 1px 2px #03363f66, 0 -1px 2px #03363f0a', borderRadius: "20px", marginTop: "30px", padding: '30px 20px'
                }}>
                    <Typography sx={{ fontSize: { xs: "12px", sm: "15px" }, color: "#191e30" }}>Plan Your Adventure:</Typography>
                    <Grid sx={{ display: 'flex', gap: "8px" }}>
                        <MailOutlinedIcon sx={{ color: '#1976d2' }} />
                        <Typography sx={{ color: "#1976d2", fontWeight: 600, fontSize: { xs: "13px", sm: "16px" } }}>Email Itinerary</Typography>
                    </Grid>
                    <Grid sx={{ display: 'flex', gap: "8px" }}>
                        <HelpOutlineOutlinedIcon sx={{ color: '#1976d2' }} />
                        <Typography sx={{ color: "#1976d2", fontWeight: 600, fontSize: { xs: "13px", sm: "16px" } }}>Enquiry Now</Typography>
                    </Grid>
                </Grid>
                <Grid sx={{ marginTop: "50px", width: { xs: "100%", md: "65%" } }}>
                    <Carousel
                        indicatorContainerProps={{ style: { display: 'none' } }}
                        navButtonsAlwaysVisible
                    >
                        {chunkArray(bigDestinations, 3).map((chunk, index) => (
                            <Grid
                                key={index}
                                component="div"
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                }}
                            >
                                {chunk.map((destination, innerIndex) => (
                                    <Grid
                                        key={innerIndex}
                                        component="div"
                                        sx={{
                                            flex: '1',
                                            borderRadius: '20px',
                                            margin: '0 8px',
                                            backgroundImage: `url(${destination.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            height: '170px',
                                        }}
                                    ></Grid>
                                ))}
                            </Grid>
                        ))}
                    </Carousel>
                </Grid>
                <Grid sx={{ marginTop: '100px' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab sx={{ textTransform: "none" }} label="Highlights" {...a11yProps(0)} />
                            <Tab sx={{ textTransform: "none" }} label="Tour Itinerary" {...a11yProps(1)} />
                            <Tab sx={{ textTransform: "none" }} label="Hotels" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Grid>
                            <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>Highlights</Typography>
                            <List>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>Hotel accommodation 3 star and 4 star in outskirts or airport area</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>02 Nights of lodging in Paris</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>03 Nights of lodging in Switzerland</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>01 Night of lodging in Innsbruck</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>01 Night of lodging in Venice/Padova</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>01 Night of lodging in Florence/Arezzo</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>01 Night of lodging in Rome</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>Except for the First day and the last day for airport arrival and departure, the tour will conduct entirely by coach</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>Tour Guided Orientation to Paris, Venice, and Rome</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>Orientation Tour of Interlaken, Lucerne, Innsbruck</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>Entry ticket to level Two of the Eiffel Tower in Paris</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>Cruise on the Seine in Paris</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>Mountain Excursion to Mount Titlis</Typography>
                                </ListItem>

                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>Entrance ticket to Wattens Swarovski Crystal Museum</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>Venice Vaporetto Ride</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>Breakfast served in accordance with Hotel policy</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>Dinner is served in an Indian restaurant and is both vegetarian and non-vegetarian</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingX: "0px", paddingY: "4px", gap: "10px" }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: "18px" }} />
                                    <Typography>Throughout the tour, a Hindi and English-speaking tour manager will be in charge</Typography>
                                </ListItem>
                            </List>
                        </Grid>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <Grid>
                            <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>Tour Itinerary</Typography>
                            <Grid sx={{ display: "flex", gap: "15px", marginY: '20px' }}>
                                <Button variant='outlined' sx={{ height: "50px", borderRadius: "30px" }}>
                                    <Typography>Jan 1, 2024 TO Mar 31, 2024</Typography>
                                </Button>
                                <Button variant='contained' sx={{ height: "50px", borderRadius: "30px" }}>
                                    <Typography>Apr 1, 2024 TO Mar 31, 2025</Typography>
                                </Button>
                            </Grid>
                            <Typography sx={{ paddingY: "10px" }}>Itinerary is valid from <span style={{ fontWeight: 600 }}>Apr 1, 2024</span> to <span style={{ fontWeight: 600 }}>Mar 31, 2025</span>
                            </Typography>
                            <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>Dubai Abu Dhabi</Typography>
                            <Grid sx={{ bgcolor: "#f5f5f7", padding: "25px 20px", marginY: "20px", width: '70%', borderRadius: '10px' }}>
                                <Grid sx={{ display: 'flex', gap: "8px" }}>
                                    <AccessTimeOutlinedIcon />
                                    <Typography><span style={{ fontWeight: 600 }}>7</span> Days <span style={{ fontWeight: 600 }}>6</span> Nights <span style={{ fontWeight: 600 }}>  2</span> Cities Country</Typography>
                                </Grid>
                                <Grid sx={{ display: 'flex', marginTop: "10px", gap: "8px" }}>
                                    <LocationOnOutlinedIcon />
                                    <Typography>UAE: Dubai 4N, Abu Dhabi 2N</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Item Three
                    </CustomTabPanel>
                </Grid>
            </Container >
        </Box >
    )
}

export default Details