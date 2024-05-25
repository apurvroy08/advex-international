import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import holidaysimg1 from "../assets/inddesimgs/Holidaysimg1.png";
import holidaysimg2 from "../assets/inddesimgs/Egypt.png";
import holidaysimg3 from "../assets/inddesimgs/tajimg.png";
import holidaysimg4 from "../assets/inddesimgs/Andaman1.png";
import holidaysimg5 from "../assets/inddesimgs/Vietnam.png";
import holidaysimg6 from "../assets/inddesimgs/Lakshadweep.png";
import holidaysimg7 from "../assets/inddesimgs/filmimg.png";
import EnquiryForm from "./EnquiryForm";

const Holidays = () => {
  const holidayImages = [
    holidaysimg1,
    holidaysimg2,
    holidaysimg3,
    holidaysimg4,
    holidaysimg5,
    holidaysimg6,
    holidaysimg7,
  ];
  const [modalOpen, setModalOpen] = useState(false); // Enquiry form
  const handleOpenForm = () => {
    setModalOpen(true);
  };

  return (
    <Box sx={{ paddingY: "50px" }}>
      <Container>
        <Typography
          sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: 600 }}
        >
          Design your holiday with us !
        </Typography>
        <Grid
          sx={{
            gap: "20px",
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            paddingTop: "30px",
            flexWrap: "wrap",
            cursor: "pointer"
          }}
        >
          {holidayImages.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              alt=""
              style={{ height: "140px", width: "140px", borderRadius: "5px" }}
              onClick={handleOpenForm}
            />
          ))}
        </Grid>
        <Grid sx={{ paddingTop: "80px", width: { xs: "100%", md: "65%" } }}>
          <Typography sx={{ fontSize: "30px", fontWeight: 600 }}>
            Customer Support
          </Typography>
          <Typography sx={{ fontSize: "14px", paddingTop: "10px" }}>
            Our Travel Wizards are committed to guide you at every step of the
            way, ensuring your travel experience is seamless and memorable.
            Contact us to begin the magic!
          </Typography>
          <Grid
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                width: "280px",
                bgcolor: "red",
                marginTop: "20px",
              }}
            >
              Contact us
            </Button>
          </Grid>
        </Grid>
      </Container>
      {modalOpen && (
        <EnquiryForm open={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </Box>
  );
};

export default Holidays;
