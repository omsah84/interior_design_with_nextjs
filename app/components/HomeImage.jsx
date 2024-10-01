"use client"; // This makes the component client-side

import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image'; // Import the Image component from Next.js
import homeimage from "@/public/images/Home-image.png"; // Ensure this path is correct

function HomeImage() {
  return (
    <Box>
      {/* Image Section */}
      <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
        <Image
          src={homeimage} // Using the Image component for optimized loading
          alt="Description of the image"
          layout="responsive" // Ensures the image maintains its aspect ratio
          objectFit="cover" // Optional: cover or contain to adjust how the image fits in the box
          priority // Optional: Use priority loading for important images
        />
      </Box>
    </Box>
  );
}

export default HomeImage;
