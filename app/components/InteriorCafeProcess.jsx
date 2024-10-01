import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const InteriorCafeProcess = () => {
  return (
    <Container>
      {/* Header Text */}
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom
        sx={{ fontWeight: 'bold' }}>
        How InteriorCafe Works once Finalized
      </Typography>

      {/* Full-width responsive image centered */}
      <Box 
        component="img"
        src="/images/Picture1.png" // Path relative to public folder
        alt="Interior Cafe"
        sx={{
          width: '100%', // Makes the image responsive
          maxWidth: '100%', // Limits the width on larger screens
          height: 'auto', // Maintains the aspect ratio of the image
          display: 'block', // Ensures the image is displayed as a block element
          margin: 'auto', // Centers the image horizontally
          objectFit: 'cover', // Ensures the image covers the box without distortion
          m: 3 // Adds margin-top for spacing
        }}
      />
    </Container>
  );
};

export default InteriorCafeProcess;
