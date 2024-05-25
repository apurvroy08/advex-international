import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import cornerimg1 from "../assets/inddesimgs/Cornerimg1.png";
import cornerimg2 from "../assets/inddesimgs/Cornerimg2.png";
import cornerimg3 from "../assets/inddesimgs/Cornerimg3.png";
import Image from "next/image";
import { getBlog } from "@/services";

const ReadingCorner = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    getBlogAsync();
  }, []);

  const getBlogAsync = async () => {
    // Fix: Api call
    const res = await getBlog();
    setBlogData(res?.data?.data?.items);
  };

  return (
    <Container>
      <Box sx={{ marginTop: "50px", padding: 0 }}>
        <Typography sx={{ fontSize: "25px", color: "#333333" }}>
          Reading Corner
        </Typography>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {blogData?.map((blog, index) => (
            <Grid
              sx={{ width: { xs: "100%", sm: "75%", md: "32%" } }}
              key={index}
            >
              <Grid>
                {/* <img src={cornerimg1}/> */}
                <Image
                  style={{ height: "100%", width: "100%" }}
                  src={cornerimg1}
                  alt=""
                  width="500"
                  height="500"
                />
              </Grid>
              <Grid sx={{ borderBottom: "4px solid red" }}>
                <Typography sx={{ color: "red" }}>
                  {blog?.fields.title}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ReadingCorner;

{
  /* <Grid container sx={{ display: "flex", gap: "20px" }}>
                    <Grid item xs={12} sm={4}>
                        <Grid><Image style={{ height: '100%', width: '100%' }} src={cornerimg1} /></Grid>
                        <Grid sx={{ borderBottom: "4px solid red" }}><Typography sx={{ color: "red" }}>15 Best Honeymoon Destinations In India In May</Typography></Grid>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Grid><Image style={{ height: '100%', width: '100%' }} src={cornerimg2} /></Grid>
                        <Grid sx={{ borderBottom: "4px solid red" }}><Typography sx={{ color: "red" }}>Valley Of The Kings Where Pharaohs Meet Gods</Typography></Grid>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Grid><Image style={{ height: '100%', width: '100%' }} src={cornerimg3} /></Grid>
                        <Grid sx={{ borderBottom: "4px solid red" }}><Typography sx={{ color: "red" }}>How To Plan A Budget Trip To Andaman</Typography></Grid>
                    </Grid>
                </Grid> */
}
