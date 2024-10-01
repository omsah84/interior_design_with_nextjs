import React from 'react';
import { Typography, Container, Grid, Box } from '@mui/material';

const InteriorDesignGrid = () => {
  return (
    <Container>
      {/* Header Text */}
      <Typography 
        variant="h5" 
        align="center" 
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 4 }}>
        Elevate Your Home with Stylish Interior Design Ideas
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={2}>
        {/* Row 1 */}
        <Grid item xs={12} sm={6}>
          <Box 
            component="img"
            src="/images/image1.jpg" // Replace with the actual image
            alt="Living Room"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box 
            component="img"
            src="/images/image1.jpg" // Replace with the actual image
            alt="Master Bedroom"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>

        {/* Row 2 */}
        <Grid item xs={12} sm={4}>
          <Box 
            component="img"
            src="/images/image1.jpg" // Replace with the actual image
            alt="Dining Room"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box 
            component="img"
            src="/images/image1.jpg" // Replace with the actual image
            alt="Kitchen"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box 
            component="img"
            src="/images/image1.jpg" // Replace with the actual image
            alt="False Ceiling"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default InteriorDesignGrid;
