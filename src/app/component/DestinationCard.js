
import React from 'react'
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';

const DestinationCard = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${data?.fields?.categoryId?.fields?.uid}/${data?.fields?.uid}`);
  };
  return (
    <Grid
      onClick={handleClick}
      component="div"
      sx={{
        cursor: "pointer",
        borderRadius: "5px",
        width: "95%",
        height: "290px",
        // border: "1px solid #e9e9e9",
        overflow: "hidden",
        margin: '10px auto',
        boxShadow: '1px 1px 5px #e9e9e9'
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${data?.fields?.imageUrl?.fields?.file?.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          aspectRatio: "10/6",
          height: "55%",
          width: "100%"
        }}
      ></Box>
      <Grid
        sx={{
          padding: "10px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "45%",
        }}
      >
        <Typography
          variant="p"
          sx={{ fontSize: "20px", margin: 0, color: "#1a2b51" }}
        >
          {data?.fields?.title}
        </Typography>
        <Box>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "14px",
              color: "#b1b1b1",
            }}
          >
            Starting Price
            <span style={{ fontWeight: "bold", color: "#1a2b51" }}>
              {data?.fields?.price}
            </span>
          </Typography>
        </Box>
        <Box>
          <Button
            size="small"

            variant="text"
            sx={{
              fontSize: "14px",
              color: "#c9a443",
              marginTop: "4px",
              float: "right",
              textTransform: "lowercase",
            }}
          >
            View details
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default DestinationCard