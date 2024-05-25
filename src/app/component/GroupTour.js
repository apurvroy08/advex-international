import { useState } from "react";
import { Box, Typography, List, ListItem, Grid, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAllDestinations } from "@/redux/selectors";
import { useRouter } from "next/navigation";

const GroupTour = ({ open, onClose }) => {
  const router = useRouter();
  const AllDestinations = useSelector(selectAllDestinations);
  const indian = AllDestinations.filter(
    (val) =>
      val.fields.categoryId.fields.uid === "TRENDING-INDIAN-DESTINATION-100"
  );
  const international = AllDestinations.filter(
    (val) =>
      val.fields.categoryId.fields.uid ===
      "TRENDING-INTERNATIONAL-DESTINATION-100"
  );

  const handleClickIndian = (data) => {
    router.push(
      `/${data?.fields?.categoryId?.fields?.uid}/${data?.fields?.uid}`
    );
    onClose();
  };

  const handleClickInternational = (data) => {
    router.push(
      `/${data?.fields?.categoryId?.fields?.uid}/${data?.fields?.uid}`
    );
    onClose();
  };

  return (
    <>
      {open && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: "30%",
            bgcolor: "#fff",
            width: "44%",
            padding: "25px",
            // maxHeight: "70vh",
            borderRadius: "10px",
            boxShadow: "0 0.5rem 1rem #00000059",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              marginBottom: "20px",
              color: "#111111",
            }}
          >
            Group Tour
          </Typography>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                sx={{ fontSize: "18px", color: "red", fontWeight: 700 }}
              >
                Indian
              </Typography>
              <Box sx={{ width: "100%" }}>
                <List
                  sx={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    pt: "20px",
                  }}
                >
                  {indian.map((item, index) => (
                    <Button
                      key={index}
                      onClick={() => {
                        handleClickIndian(item);
                      }}
                    >
                      <ListItem
                        key={index}
                        sx={{
                          width: "186px",
                          paddingX: "0px",
                          color: "#111111",
                        }}
                      >
                        {item.fields.title}
                      </ListItem>
                    </Button>
                  ))}
                </List>
              </Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "red",
                  fontWeight: 700,
                  mt: "10px",
                }}
              >
                International
              </Typography>
              <Box sx={{ width: "100%" }}>
                <List
                  sx={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    pt: "20px",
                  }}
                >
                  {international.map((item, index) => (
                    <Button
                      key={index}
                      onClick={() => { handleClickInternational(item) }}
                    >
                      <ListItem
                        key={index}
                        sx={{ width: "186px", paddingX: "0px", color: "#111111" }}
                      >
                        {item.fields.title}
                      </ListItem>
                    </Button>
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

export default GroupTour;
