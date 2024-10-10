"use client";
import React, { useState } from "react";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";

const GetFeeQuote = ({ isVisible, handleClose }) => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwWzuMEd4K5dxvjvAUHx58b_AuCn2MqjRGWDMphRij-V_IFGEFINBr_4VEt045pF-f2Jg/exec";

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    mobile: "",
  });

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Mobile number validation (10 digits)
  const validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate email and mobile inputs on change
    if (name === "email" && !validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }

    if (name === "mobile" && !validateMobile(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: "Please enter a valid 10-digit mobile number.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation before submission
    if (!validateEmail(formData.email)) {
      window.alert("Invalid email address.");
      return;
    }

    if (!validateMobile(formData.mobile)) {
      window.alert("Invalid mobile number. It should be 10 digits.");
      return;
    }

    const form = e.target;

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        console.log("Success!", response);
        // Clear form fields
        setFormData({
          email: "",
          name: "",
          mobile: "",
        });
        // Show success alert
        window.alert("Form submitted successfully!");
        // Close the form after successful submission
        handleClose();
      })
      .catch((error) => {
        console.error("Error!", error.message);
        window.alert("An error occurred while submitting the form.");
      });
  };

  return isVisible ? (
    <Box
      component="form"
      name="submit-to-google-sheet"
      onSubmit={handleSubmit}
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "90%", sm: "80%", md: "50%", lg: "40%" },
        maxWidth: "700px",
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        boxShadow: 3,
        padding: { xs: 2, sm: 3 },
        zIndex: 999,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{ marginBottom: 3 }}
      >
        GET FREE QUOTE
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            value={formData.email}
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Mobile"
            name="mobile"
            type="text"
            placeholder="Mobile"
            onChange={handleChange}
            value={formData.mobile}
            variant="outlined"
            required
            error={!!errors.mobile}
            helperText={errors.mobile}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ paddingY: 1.5 }}
          >
            Send
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={handleClose}
            sx={{ paddingY: 1.5 }}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  ) : null;
};

export default GetFeeQuote;
