import { useState } from 'react';
import { Box, Typography, List, ListItem, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAllDestinations } from '@/redux/selectors';

const More = ({ open }) => {

    const more = ["Contact", "Career", "More"]

    return (
        <>
            {open && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: '100%',
                        left: '75%',
                        bgcolor: '#fff',
                        width: '10%',
                        padding: '25px',
                        borderRadius: "10px",
                        boxShadow: "0 0.5rem 1rem #00000059",
                    }}
                >
                    <Typography sx={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: "#111111" }}>More</Typography>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box sx={{ width: '100%' }}>
                                <List sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                    {more.map((item, index) => (
                                        <ListItem key={index} sx={{ width: '186px', paddingX: '0px', color: "#111111" }}>{item}</ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    );
};

export default More;
