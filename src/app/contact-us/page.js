"use client"
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Form from '../component/Form'

const page = () => {
    return (
        <Box sx={{ paddingY: "80px" }}>
            <Box>
                <Container>
                    <Grid container sx={{ display: "flex" }}>
                        <Grid item xs={12} md={6} sx={{ paddingY: "0px" }}>
                            <Typography sx={{ fontWeight: "Bold", fontSize: "26px", color: "#172850" }}>Advex International Travel Wizards</Typography>
                            <Box sx={{ marginTop: "20px" }}>
                                <Typography sx={{ fontWeight: "Bold", color: "#172850", paddingY: "10px" }}>Bhopal Office:</Typography>
                                <Typography sx={{ fontSize: '14px' }}>C-13, gulabi nagar, baag mugaliya,</Typography>
                                <Typography sx={{ fontSize: '14px' }}>Bhopal 462043</Typography>
                            </Box>
                            <Box sx={{ marginTop: "20px" }}>
                                <Typography sx={{ fontWeight: "Bold", color: "#172850", paddingY: "10px" }}>Delhi Office:</Typography>
                                <Typography sx={{ fontSize: '14px' }}>#24, DDA Market, A1 Block,</Typography>
                                <Typography sx={{ fontSize: '14px' }}>Safdarjung enclave</Typography>
                                <Typography sx={{ fontSize: '14px' }}>New Delhi - 110029</Typography>
                                <Typography sx={{ fontSize: '14px' }}>(Phone - 84478 43728)</Typography>
                            </Box>
                            <Box sx={{ marginTop: "20px" }}>
                                <Typography sx={{ fontWeight: "Bold", color: "#172850", paddingY: "10px" }}>Email:</Typography>
                                <Typography>info@advexin.com</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ boxShadow: "0px 2px 4px 0px #8b8989", padding: { xs: "20px", md: "60px 40px" }, borderRadius: '10px' }}>
                                <Form />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default page