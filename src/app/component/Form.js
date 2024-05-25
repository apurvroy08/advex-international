"use client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  Alert,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [registerText, setRegisterText] = useState("Enquire Now");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    number: "",
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z\s]*$/, "Please enter a valid name")
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be at most 20 characters")
      .required("Name is required"),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email address"
      )
      .required("Email is required"),
    number: yup
      .number()
      .required("Please enter number")
      .test("is-ten-digits", "Number must be exactly 10 digits", (value) => {
        if (value) {
          const stringValue = String(value);
          return stringValue.length === 10;
        }
        return false;
      }),
  });

  const onSubmit = async (values, { resetForm }) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        mobile: values.number,
      }),
    };

    setLoading(true);
    setRegisterText("");
    fetch("/api/register", options)
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        setRegisterText("Register Now");
        setSuccess(true);
        // show success animation
      })
      .catch((err) => {
        setError(true);
      });

    resetForm();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} width="650px">
        <Box sx={{ background: 'rgba(255, 255, 255, 0.85)', padding: '20px', borderRadius: '10px' }}>
          {/* <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                paddingBottom: "25px",
              }}
            >
              <Typography sx={{ fontSize: "34px", fontWeight: 800 }}>
                Book a Live Class, For Free!
              </Typography>
            </Box> */}
          <Box sx={{ paddingY: "10px" }}>
            <Typography sx={{ fontSize: "12px", paddingBottom: "10px" }}>
              Full Name *
            </Typography>
            <TextField
              type="text"
              variant="outlined"
              fullWidth
              placeholder="Enter Name"
              sx={{
                "& input": {
                  padding: "10px 14px",
                },
                "& .MuiFormHelperText-root": {
                  margin: 0,
                },
              }}
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Box>
          <Box sx={{ paddingY: "10px" }}>
            <Typography sx={{ fontSize: "12px", paddingBottom: "10px" }}>
              Email *
            </Typography>
            <TextField
              type="text"
              variant="outlined"
              fullWidth
              placeholder="Enter Email"
              sx={{
                "& input": {
                  padding: "10px 14px",
                },
                "& .MuiFormHelperText-root": {
                  margin: 0,
                },
              }}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
          <Box sx={{ paddingY: "10px" }}>
            <Typography sx={{ fontSize: "12px", paddingBottom: "10px" }}>
              Phone Number *
            </Typography>
            <TextField
              type="tel"
              variant="outlined"
              fullWidth
              placeholder="Enter Number"
              sx={{
                "& input": {
                  padding: "10px 14px",
                },
                "& .MuiFormHelperText-root": {
                  margin: 0,
                },
              }}
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingX: "20px",
                paddingY: "10px",
              }}
            >
              <Checkbox
                checked={formik.values.checkbox}
                name="checkbox"
                onChange={() =>
                  formik.setFieldValue("checkbox", !formik.values.checkbox)
                }
                sx={{ paddingLeft: 0 }}
                size="small"
                error={formik.touched.checkbox && !formik.values.checkbox}
              />
              <Typography sx={{ color: "#243771", fontSize: "11px" }}>
                By Clicking Sign Up, you agree to our{" "}
                <Link href="/" color="#243771">
                  Terms & Conditions.
                </Link>
                .
              </Typography>
            </Box>
            <Button
              onClick={formik.handleSubmit}
              type="submit"
              disabled={!formik.values.checkbox}
              sx={{ bgcolor: "#1d3b8b", textTransform: "none" }}
              variant="contained"
              fullWidth
            >
              {loading && <CircularProgress />}
              {registerText}
            </Button>
          </Box>
          <Stack sx={{ width: "100%" }} spacing={2}>
            {success && (
              <Alert variant="filled" severity="success" onClose={() => { setSuccess(false) }}>
                Thanks. We will get back soon !
              </Alert>
            )}
            {error && (
              <Alert variant="filled" severity="error" onClose={() => { setError(false) }}>
                Internal server error
              </Alert>
            )}
          </Stack>
        </Box>
      </form>
    </>
  );
};

export default Form;
