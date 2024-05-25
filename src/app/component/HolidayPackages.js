"use client"
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import tajimg from "../assets/inddesimgs/tajimg.png"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LightModeIcon from '@mui/icons-material/LightMode';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import Link from 'next/link';

const HolidayPackages = () => {
    return (
        <Box sx={{ paddingY: "70px" }}>
            <Container>
                <Typography sx={{ fontSize: "26px", fontWeight: 600, color: "#333" }}>Crazy Deal Holiday Packages</Typography>
                <Typography sx={{ fontSize: "13px" }}>Explore the beauty of Crazy deal with ADVEX special tour packages. Listed below are some of the top packages for Crazy deal. ... Read More</Typography>
                <Link style={{ textDecoration: "none" }} href='/details'>
                    <Grid container sx={{ display: "flex", marginTop: "50px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)" }}>
                        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                            <Image style={{ height: "100%", width: "100%", borderRadius: '10px 10px 10px 10px' }} src={tajimg} alt='' />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: "flex", marginY: { xs: "40px", md: "0px" } }}>
                            <Box sx={{ width: '100%' }}>
                                <Divider sx={{ display: { xs: "flex", md: "none" } }} />
                                <Grid sx={{ display: "flex", width: "100%", minHeight: "70px" }}>
                                    <Grid sx={{ width: { xs: "100%", sm: "70%" }, minHeight: "50px", display: "flex", justifyContent: "center", alignItems: "center", paddingX: "10px" }}>
                                        <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, color: "#1976d2", fontWeight: 600, textDecoration: "none" }}>Crazy Deal Bali With Water Sport Activities ...</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", sm: "flex" } }} />
                                    <Grid sx={{ width: "30%", display: { xs: "none", sm: "flex" }, justifyContent: "center", alignItems: "center", gap: '10px' }}>
                                        <Typography sx={{ fontSize: "13px" }}>6 Nights</Typography>
                                        <Typography sx={{ fontSize: "13px" }}>7 Days</Typography>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid sx={{ display: "flex", gap: "10px", justifyContent: "center", alignItems: "center", minHeight: "70px" }}>
                                    <Typography sx={{ fontSize: "14px", paddingY: "10px", display: { xs: "none", sm: "flex" } }}>Customized Holidays</Typography>
                                    <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", sm: "flex" } }} />
                                    <Typography sx={{ display: "flex", alignItems: 'center' }}><TrainOutlinedIcon />→ Mauritius (6N) →<TrainOutlinedIcon /></Typography>
                                </Grid>
                                <Divider />
                                <Grid sx={{ display: 'flex', gap: "20px", padding: "20px", flexWrap: 'wrap' }}>
                                    <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Grid sx={{
                                            height: "45px", width: "45px", border: "2px solid #e5e5e5", display: "flex", borderRadius: "50%", justifyContent: "center", alignItems: "center", marginBottom: "15px", cursor: "pointer", transition: "background-color 0.3s, color 0.3s",
                                            ":hover": {
                                                backgroundColor: "#1976d2",
                                                "& svg": {
                                                    color: "#fff",
                                                },
                                            },
                                        }}>
                                            <LightModeIcon sx={{ color: "#1976d2" }} />
                                        </Grid>
                                        <Grid>
                                            <Typography sx={{ fontSize: "13px" }}>Highlights</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Grid sx={{
                                            height: "45px", width: "45px", border: "2px solid #e5e5e5", display: "flex", borderRadius: "50%", justifyContent: "center", alignItems: "center", marginBottom: "15px", cursor: "pointer", transition: "background-color 0.3s, color 0.3s",
                                            ":hover": {
                                                backgroundColor: "#1976d2",
                                                "& svg": {
                                                    color: "#fff",
                                                },
                                            },
                                        }}>
                                            <CameraAltOutlinedIcon sx={{ color: "#1976d2" }} />
                                        </Grid>
                                        <Grid>
                                            <Typography sx={{ fontSize: "13px" }}>Sightseeing</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Grid sx={{
                                            height: "45px", width: "45px", border: "2px solid #e5e5e5", display: "flex", borderRadius: "50%", justifyContent: "center", alignItems: "center", marginBottom: "15px", cursor: "pointer", transition: "background-color 0.3s, color 0.3s",
                                            ":hover": {
                                                backgroundColor: "#1976d2",
                                                "& svg": {
                                                    color: "#fff",
                                                },
                                            },
                                        }}>
                                            <HotelOutlinedIcon sx={{ color: "#1976d2" }} />
                                        </Grid>
                                        <Grid>
                                            <Typography sx={{ fontSize: "13px" }}>Hotels</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Grid sx={{
                                            height: "45px", width: "45px", border: "2px solid #e5e5e5", display: "flex", borderRadius: "50%", justifyContent: "center", alignItems: "center", marginBottom: "15px", cursor: "pointer", transition: "background-color 0.3s, color 0.3s",
                                            ":hover": {
                                                backgroundColor: "#1976d2",
                                                "& svg": {
                                                    color: "#fff",
                                                },
                                            },
                                        }}>
                                            <FlightTakeoffOutlinedIcon sx={{ color: "#1976d2" }} />
                                        </Grid>
                                        <Grid>
                                            <Typography sx={{ fontSize: "13px" }}>Flights</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Grid sx={{
                                            height: "45px", width: "45px", border: "2px solid #e5e5e5", display: "flex", borderRadius: "50%", justifyContent: "center", alignItems: "center", marginBottom: "15px", cursor: "pointer", transition: "background-color 0.3s, color 0.3s",
                                            ":hover": {
                                                backgroundColor: "#1976d2",
                                                "& svg": {
                                                    color: "#fff",
                                                },
                                            },
                                        }}>
                                            <RestaurantIcon sx={{ color: "#1976d2" }} />
                                        </Grid>
                                        <Grid>
                                            <Typography sx={{ fontSize: "13px" }}>Meals</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <Grid sx={{
                                            height: "45px", width: "45px", border: "2px solid #e5e5e5", display: "flex", borderRadius: "50%", justifyContent: "center", alignItems: "center", marginBottom: "15px", cursor: "pointer", transition: "background-color 0.3s, color 0.3s",
                                            ":hover": {
                                                backgroundColor: "#1976d2",
                                                "& svg": {
                                                    color: "#fff",
                                                },
                                            },
                                        }}>
                                            <TrainOutlinedIcon sx={{ color: "#1976d2" }} />
                                        </Grid>
                                        <Grid>
                                            <Typography sx={{ fontSize: "13px" }}>Trains</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ display: { xs: "flex", md: "none" } }} />
                            </Box>
                            <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "flex" } }} />
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <Box sx={{ padding: "0px 15px 30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Typography sx={{ fontSize: "30px", fontWeight: 600, color: "#333" }}><CurrencyRupeeIcon />67,725</Typography>
                                <Typography sx={{ fontSize: "13px" }}>Starting price per adult</Typography>
                                <Grid sx={{ borderRadius: "10px", bgcolor: "#dfe9f6", marginY: "10px", minHeight: '30px', display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                                    <Typography sx={{ fontSize: "13px" }}>EMI starting from Rs.3829 per month</Typography>
                                </Grid>
                                <Grid sx={{ display: "flex", gap: "10px", paddingTop: "20px" }}>
                                    <Button variant="outlined" sx={{ minHeight: "30px" }}>
                                        <Typography sx={{ fontSize: '9px' }}>Want us to call you ?</Typography>
                                    </Button>
                                    <Button variant="contained">
                                        <Typography sx={{ fontSize: '9px', minHeight: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>Book Online</Typography>
                                    </Button>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Link>
            </Container>
        </Box>
    )
}

export default HolidayPackages