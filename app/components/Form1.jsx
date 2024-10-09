"use client";
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    place: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false); // New state to track submission

  // Replace with your Google Apps Script Web App URL
  const googleAppsScriptURL =
    "https://script.google.com/macros/s/AKfycbxRCC6-6otqHuQ2v9n3pm1s4B7TuxWi-DlvdbPXLSpFWuQaIHXhocYGPDxQzalBjs5D8Q/exec";

  // Delay before showing the form initially
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateMobile = (mobile) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(mobile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, mobile, place, email } = formData;

    if (!name || !mobile || !email) {
      setErrorMessage("Name, mobile, and email are required.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    if (!validateMobile(mobile)) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setSuccessMessage("Form submitted successfully!");
    setErrorMessage("");

    // Send form data to Google Sheets via Google Apps Script
    try {
      const response = await fetch(googleAppsScriptURL, {
        method: "POST",
        mode: "no-cors", // Set mode to 'no-cors'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorResponse = await response.json(); // Try to get error message from response
        throw new Error(errorResponse.message || "Network response was not ok");
      }

      setOpen(false);
      setSubmitted(true); // Mark as submitted
      setFormData({ name: "", mobile: "", place: "", email: "" });
    } catch (error) {
      setErrorMessage(`Error submitting the form: ${error.message}`);
    }
  };

  const handleCancel = () => {
    setOpen(false);
    setTimeout(() => {
      setOpen(true);
    }, 5000); // Form reappears after 5 seconds
  };

  // If the form is submitted, don't show it
  if (submitted) {
    return (
      <Container
        maxWidth="sm"
        sx={{ textAlign: "center", paddingTop: "100px" }}
      >
        <h2>Thank You!</h2>
        <p>Your response has been recorded.</p>
      </Container>
    );
  }

  return (
    <>
      {loading ? (
        <Container
          maxWidth="sm"
          sx={{
            textAlign: "center",
            paddingTop: "80px",
            paddingBottom: "20px",
          }}
        >
          <CircularProgress />
          <p>Loading form, please wait...</p>
        </Container>
      ) : (
        <Dialog open={open} onClose={handleCancel} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ textAlign: "center" }}>Contact Form</DialogTitle>
          <DialogContent>
            {errorMessage && (
              <Alert severity="error" sx={{ marginBottom: 2 }}>
                {errorMessage}
              </Alert>
            )}
            {successMessage && (
              <Alert severity="success" sx={{ marginBottom: 2 }}>
                {successMessage}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    variant="outlined"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    inputProps={{ maxLength: 10 }}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Place"
                    variant="outlined"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    size="small"
                  />
                </Grid>
              </Grid>
              <DialogActions
                sx={{ justifyContent: "center", padding: "16px 24px" }}
              >
                <Button
                  onClick={handleCancel}
                  color="secondary"
                  variant="outlined"
                  sx={{ marginRight: 2 }}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ContactForm;
