"use client"
import React, { useState } from "react";
import { Typography, Box, Button, Stack, IconButton, Link } from "@mui/material";
import Image from "next/image"; // For the logo image
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContactForm from "./ContactForm";

// Import the logo image (replace with your path)
import logo from "@/public/assets/logo.png";

export default function Footer() {
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  const handleOpenForm = () => {
    setShowForm(true); // Show the form when button is clicked
  };

  const handleCloseForm = () => {
    setShowForm(false); // Hide the form
  };
  return (
    <Box
      sx={{
        paddingTop: "30px",
        backgroundColor: "#f4f0ec", // Light background color
        borderBottom: "1px solid #ccc", // Optional border
        width: "100vw", // Full width for the footer
        overflowX: "hidden", // Hide any horizontal overflow
      }}
    >
      {/* Stack for layout instead of Grid */}
      <Stack
        direction={{ xs: "column", md: "row" }} // Stack vertically on mobile, horizontally on desktop
        alignItems="center"
        justifyContent="space-around"
        
        
        sx={{
          paddingLeft: { xs: "16px", md: "40px" }, // Left padding for different screen sizes
          paddingRight: { xs: "16px", md: "40px" }, // Right padding for different screen sizes
        }}
      >
        {/* Left side: Logo and Social Icons */}
        <Box
          sx={{
            textAlign: { xs: "center", md: "center" }, // Center content for both mobile and desktop
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* Logo */}
            <Image
              src={logo} // Add your logo path
              alt="InteriorCafe Logo"
              width={200} // Adjust width and height as needed
              height={100}
            />
            {/* Slogan */}
            <Typography variant="subtitle1" sx={{ fontWeight: 500, mt: 0 }}>
              WE ARE NEW! BUT EXPERIENCED!
            </Typography>
            {/* Social Media Icons */}
            <Stack direction="row" spacing={0} mt={0}>
              <IconButton href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        {/* Right side: Book your free consult */}
        <Box
          sx={{
            textAlign: { xs: "center", md: "center" }, // Center the text
            mt: { xs: 4, md: 0 }, // Add margin on top for mobile
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* Text */}
            <Typography
              variant="h4"
              sx={{
                fontFamily: "cursive", // You can adjust the font family to match the design
                fontWeight: 500,
                mb: 0,
                fontSize: {xs: '50px' }
              }}
            >
              Book Your
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: 500, color: "#333", mb: 0,fontSize: {xs: '30px' } }}
            >
              Free Consult
            </Typography>
            {/* Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                fontSize: "16px",
                padding: "5px 20px",
                borderRadius: "50px",
                // fontSize: {xs: '50px' }
              }}
              onClick={handleOpenForm} // Open the form on button click
              endIcon={<span>›</span>}
            >
              BOOK NOW
            </Button>
            <ContactForm isVisible={showForm} handleClose={handleCloseForm} />
          </Box>
        </Box>
      </Stack>

      {/* Footer (Optional) */}
      <Box
        sx={{
          backgroundColor: "#000", // Black background color
          color: "#fff", // White text color
          width: "100%", // Ensure the footer is full width
          textAlign: "center",
          pt: 5, // Padding at the top
          pb: 2, // Padding at the bottom
          mt: 5, // Adds margin at the top
          position: "relative",
          zIndex: 1,
          borderTopLeftRadius: "90% 13vw", // Curved effect at the top of the footer
          borderTopRightRadius: "90% 14vw", // Matching curve on both sides
          overflow: "hidden", // Ensure no overflow issues
        }}
      >
        {/* Footer Navigation Links */}
        <Stack direction="row" justifyContent="center" spacing={2} flexWrap="wrap">
          {['Home', 'About', 'Shop', 'Services', 'Blog', 'Contact'].map((item, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              underline="none"
              sx={{ fontWeight: "bold", fontSize: { xs: '10px', md: '25px' } }} // Adjust font size for different screen sizes
            >
              {item}
            </Link>
          ))}
        </Stack>

        {/* Copyright Text */}
        <Typography variant="body2" sx={{ mt: 2 , fontSize: {xs: '12px', md: '25px' }}}>
          &copy; 2024 Divi Interior Designer. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
