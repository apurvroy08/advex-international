import { useState } from "react";
import { Box, Typography, List, ListItem, Grid, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAllDestinations } from "@/redux/selectors";
import { useRouter } from "next/navigation";

const SpecialityTour = ({ open, onClose }) => {
  const router = useRouter();
  const AllDestinations = useSelector(selectAllDestinations);
  const advexSpecial = AllDestinations.filter(
    (val) => val.fields.categoryId.fields.uid === "ADVEX-SPECIAL-100"
  );

  const handleClick = (data) => {
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
            left: "44%",
            bgcolor: "#fff",
            width: "43%",
            padding: "25px",
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
            Speciality Tour
          </Typography>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "red",
                  fontWeight: 700,
                }}
              >
                Advex Special
              </Typography>
              <Box sx={{ width: "100%" }}>
                <List sx={{ display: "flex", gap: "20px", flexWrap: "wrap", pt: "20px" }}>
                  {advexSpecial.map((item, index) => (
                    <Button
                      key={index}
                      onClick={() => {
                        handleClick(item);
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
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default SpecialityTour;
