import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image"; // Import the Image component from Next.js
import homeimage from "@/public/images/home-image.jpg"; // Ensure this path is correct

function HomeImage() {
  return (
    <Box>
      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: {
            xs: "250px", // Small screens (mobile)
            sm: "300px", // Medium screens (tablets)
            md: "360px", // Large screens (desktop)
            lg: "400px", // Extra large screens (wider desktop)
          },
        }}
      >
        <Image
          src={homeimage} // Using the Image component for optimized loading
          alt="Description of the image"
          fill // Ensures the image fills the parent container
          style={{ objectFit: "cover", objectPosition: "bottom" }} // Shows the bottom part of the image
          priority // Use priority loading for important images
        />
      </Box>
    </Box>
  );
}

export default HomeImage;
