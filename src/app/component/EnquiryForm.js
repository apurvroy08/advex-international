import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  Alert,
  Box,
  Checkbox,
  CircularProgress,
  Link,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import CloseIcon from '@mui/icons-material/Close';
const EnquiryForm = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [registerText, setRegisterText] = useState("Enquire Now");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
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
    message: yup.string(),
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
        message: values.message,
      }),
    };

    setLoading(true);
    setRegisterText("");
    fetch("/api/enquiry", options)
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
    <Modal open={open}>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "50%", md: "25%" },
            boxShadow: 24,
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              right: 5
            }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
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
          </Box>
          <Box sx={{ paddingY: "10px" }}>
            <Typography sx={{ fontSize: "12px", paddingBottom: "10px" }}>
              Message
            </Typography>
            <TextField
              variant="outlined"
              // label="Message"
              multiline
              rows={4}
              fullWidth
              placeholder="Message"
              sx={{
                "& input": {
                  padding: "10px 14px",
                },
                "& .MuiFormHelperText-root": {
                  margin: 0,
                },
              }}
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
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
              <Alert
                variant="filled"
                severity="success"
                onClose={() => {
                  setSuccess(false);
                }}
              >
                Thanks. We will get back soon !
              </Alert>
            )}
            {error && (
              <Alert
                variant="filled"
                severity="error"
                onClose={() => {
                  setError(false);
                }}
              >
                Internal server error
              </Alert>
            )}
          </Stack>
        </Box>
      </form>
    </Modal>
  );
};

export default EnquiryForm;
