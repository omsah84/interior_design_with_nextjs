import React from 'react';
import { Typography, Box } from '@mui/material';

const InteriorDesignGrid = () => {
  return (
    <div>
      {/* Header Text */}
      <Typography 
        variant="h5" 
        align="center" 
        paddingTop={3}
        gutterBottom
        sx={{ mb: 2 }}>
        Elevate Your Home with Stylish Interior Design Ideas
      </Typography>

      {/* Flexbox Layout */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: .5, justifyContent: 'center', paddingBottom:"0px" }}>
        {/* Row 1 */}
        <Box 
          component="img"
          src="/images/image1.jpg" // Replace with the actual image
          alt="Living Room"
          sx={{ flex: '1 1 calc(50% - 16px)', maxWidth: 'calc(50% - 16px)', height: 'auto' }} // Adjust for two columns
        />
        <Box 
          component="img"
          src="/images/Royal.jpg" // Replace with the actual image
          alt="Master Bedroom"
          sx={{ flex: '1 1 calc(50% - 16px)', maxWidth: 'calc(50% - 16px)', height: 'auto' }}
        />

        {/* Row 2 */}
        <Box 
          component="img"
          src="/images/Classic Indian Bedroom.jpg" // Replace with the actual image
          alt="Dining Room"
          sx={{ flex: '1 1 calc(33.33% - 16px)', maxWidth: 'calc(33.33% - 16px)', height: 'auto' }} // Adjust for three columns
        />
        <Box 
          component="img"
          src="/images/Eco-Friendly Home Office.jpg" // Replace with the actual image
          alt="Kitchen"
          sx={{ flex: '1 1 calc(33.33% - 16px)', maxWidth: 'calc(33.33% - 16px)', height: 'auto' }}
        />
        <Box 
          component="img"
          src="/images/Modern Living Room.jpg" // Replace with the actual image
          alt="False Ceiling"
          sx={{ flex: '1 1 calc(33.33% - 16px)', maxWidth: 'calc(33.33% - 16px)', height: 'auto' }}
        />
      </Box>
    </div>
  );
};

export default InteriorDesignGrid;
