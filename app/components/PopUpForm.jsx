'use client'
import React, { useState } from "react";
import { TextField, Button, Box, Grid } from '@mui/material';

const ContactForm = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwWzuMEd4K5dxvjvAUHx58b_AuCn2MqjRGWDMphRij-V_IFGEFINBr_4VEt045pF-f2Jg/exec";

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));

    form.reset(); // Optionally reset the form after submission
  };

  return (
    <Box
      component="form"
      name="submit-to-google-sheet"
      onSubmit={handleSubmit}
      sx={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: 3, 
        backgroundColor: '#f5f5f5', 
        borderRadius: 2, 
        boxShadow: 3 
      }}
    >
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
            type="mobile"
            placeholder="Mobile"
            onChange={handleChange}
            value={formData.mobile}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button 
            fullWidth 
            type="submit" 
            variant="contained" 
            color="primary"
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
