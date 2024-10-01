import React from 'react';
import { Grid, Card, Typography, Box, CardMedia } from '@mui/material';

// Trust Factor Data
const trustFactors = [
  {
    id: 1,
    icon: 'https://via.placeholder.com/50',  // Replace with actual icon/image URLs
    label: '100,000+ happy homes',
  },
  {
    id: 2,
    icon: 'https://via.placeholder.com/50',
    label: '60+ cities',
  },
  {
    id: 3,
    icon: 'https://via.placeholder.com/50',
    label: '3 countries',
  },
  {
    id: 4,
    icon: 'https://via.placeholder.com/50',
    label: '20 lakh+ catalogue products',
  },
  {
    id: 5,
    icon: 'https://via.placeholder.com/50',
    label: '3,500+ designers',
  },
];

const TrustFactorSection = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
      {/* Section Title */}
      <Typography 
        variant="h5" 
        align="center" 
        sx={{ fontWeight: 'bold', marginBottom: '2rem' }}
      >
        Your Trust Factor
      </Typography>

      {/* Trust Factor Grid */}
      <Grid container spacing={3} justifyContent="center">
        {trustFactors.map((factor) => (
          <Grid item xs={12} sm={6} md={2} key={factor.id}>
            <Card
              sx={{
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'none',
                borderRadius: '8px',
                backgroundColor: '#fff',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              {/* Icon */}
              <CardMedia
                component="img"
                image={factor.icon}  // Replace with actual icon
                alt={factor.label}
                sx={{ width: '50px', height: '50px', marginBottom: '1rem' }}
              />
              
              {/* Label */}
              <Typography variant="body1" align="center" sx={{ fontWeight: '500' }}>
                {factor.label}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrustFactorSection;
