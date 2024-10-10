'use client'
import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Grid, Typography } from '@mui/material';

const ContactForm = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwWzuMEd4K5dxvjvAUHx58b_AuCn2MqjRGWDMphRij-V_IFGEFINBr_4VEt045pF-f2Jg/exec";

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    mobile: ""
  });

  const [isVisible, setIsVisible] = useState(false); // State for form visibility

  // Show form after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

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
        // Hide the form after successful submission
        setIsVisible(false);
      })
      .catch((error) => {
        console.error("Error!", error.message);
        window.alert("An error occurred while submitting the form.");
      });
  };

  // Handle form cancellation
  const handleCancel = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <Box
      component="form"
      name="submit-to-google-sheet"
      onSubmit={handleSubmit}
      sx={{ 
        position: 'fixed',  // Position the form fixed
        top: '50%', // Center the form vertically
        left: '50%', // Center the form horizontally
        transform: 'translate(-50%, -50%)',  // Ensure the form is centered
        width: { xs: '90%', sm: '80%', md: '50%' },  // Responsive width
        maxWidth: '500px',  // Max width for larger screens
        backgroundColor: '#f5f5f5', 
        borderRadius: 2, 
        boxShadow: 3,
        padding: { xs: 2, sm: 3 },  // Responsive padding
        zIndex: 999, // Ensure the popup appears above other elements
      }}
    >
      {/* Title */}
      <Typography 
        variant="h4" 
        component="h1" 
        align="center" 
        sx={{ marginBottom: 3 }}
      >
        Contact Us
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
            error={!!errors.email}  // Shows error state if email is invalid
            helperText={errors.email}  // Display error message
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
            error={!!errors.mobile}  // Shows error state if mobile is invalid
            helperText={errors.mobile}  // Display error message
          />
        </Grid>
        <Grid item xs={12}>
          <Button 
            fullWidth 
            type="submit" 
            variant="contained" 
            color="primary"
            sx={{ paddingY: 1.5 }} // Make the button taller
          >
            Send
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button 
            fullWidth 
            variant="outlined" 
            color="secondary" 
            onClick={handleCancel}  // Hide form on cancel
            sx={{ paddingY: 1.5 }}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  ) : null; // Hide form when not visible
};

export default ContactForm;
