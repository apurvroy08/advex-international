import { Box, Button, Checkbox, Container, FormControl, Grid, Link, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import crm_benner from "../assets/inddesimgs/crm_banner.png";
import howtocheck from "../assets/inddesimgs/how-to-check.png"
import Form from './Form';

const WhyAdvex = () => {
    const [isChecked, setChecked] = useState(true);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };
    return (
        <Box sx={{ backgroundImage: `url(${howtocheck.src})`, padding: { xs: "" }, backgroundSize: "cover", marginTop: "100px" }}>
            <Container sx={{ padding: { xs: "40px 20px", sm: "40px" }, display: "flex", flexDirection: { xs: "column", md: "row" } }}>
                <Grid sx={{ padding: { xs: 0, sm: "0px 0px 30px" }, width: { xs: "100%", md: "75%" } }}>
                    <Grid sx={{ borderTop: "2px solid #fff", width: "100px", paddingBottom: "15px" }}></Grid>
                    <Typography sx={{
                        color: "#fff",
                        fontSize: { xs: "22px", md: '30px' },
                    }}>
                        SET UP YOUR HOLIDAYS WITH OUR HELP,
                    </Typography>
                    <Typography sx={{
                        color: "#fff",
                        fontSize: { xs: "28px", sm: "34px", ms: "40px" },
                        fontWeight: 600,
                        paddingBottom: "15px"
                        // lineHeight: "30px"
                        // paddingTop:"5px"
                    }}>JUST FILL IN YOUR DETAILS.</Typography>
                    <Grid sx={{ borderTop: "2px solid #fff", width: '100px', float: "right", marginRight: "150px", display: { xs: "none", md: "flex" } }}></Grid>
                </Grid>
                <Form />
            </Container >
        </Box>
    )
}

export default WhyAdvex