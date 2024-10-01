import React from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import logo from "@/public/assets/logoicon.png"; // Adjust the path to your logo

export default function LogoDesign() {
  return (
    <Box textAlign="left" mt={1} ml={{ xs: 0.5, sm: 1, md: 1.5 }}>
      {/* Logo and Title in one line, aligned to the left */}
      <Box
        display="flex"
        justifyContent="flex-start" // Aligns content to the left
        alignItems="center" // Center logo and text vertically
        gap={{ xs: 0.5, sm: 1 }} // Adds spacing between logo and title
      >
        {/* Logo */}
        <Box
          sx={{
            width: {
              xs: 30, // Small devices
              sm: 30, // Tablets
              md: 30, // Laptops
              lg: 30, // Desktops
            },
            height: {
              xs: "1.2rem", // Height to match text size for small devices
              sm: "1.5rem", // Height for tablets
              md: "2rem", // Height for laptops
              lg: "2.5rem", // Height for desktops
            },
            display: 'flex', // Flex to center logo
            alignItems: 'center', // Center the image inside the box
          }}
        >
          <Image
            src={logo}
            alt="InteriorCafe Logo"
            layout="responsive"
            width={100} // Aspect ratio maintained
            height={100} // Aspect ratio maintained
          />
        </Box>

        {/* Text Box */}
        <Box>
          {/* Main Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "#8B0000", // Dark red
              // letterSpacing: 1.2,
              fontSize: {
                xs: "1rem", // Adjusted for better visibility
                sm: "1.2rem",
                md: "1.5rem",
                lg: "1.6rem",
              },
              textDecoration: 'none', // Remove underline
              lineHeight: 1, // Remove line height space
              marginBottom: 0, // Remove bottom margin
            }}
          >
            INTERIORCAFE
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="subtitle1"
            sx={{
              color: "#8B0000", // Same dark red for subtitle
              fontSize: {
                xs: "0.7rem", // Adjusted for better visibility
                sm: "0.8rem",
                md: "1rem",
                lg: "1.1rem",
              },
              mt: 0, // Remove top margin
              textDecoration: 'none', // Remove underline
              lineHeight: 1, // Remove line height space
            }}
          >
            WE ARE NEW! BUT EXPERIENCED!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
