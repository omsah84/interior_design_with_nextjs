import React from 'react';
import { Typography, Box, CardMedia } from '@mui/material';

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
    <Box sx={{ paddingTop: '20px', paddingBottom:"30px" }}>
      {/* Section Title */}
      <Typography 
        variant="h5" 
        align="center" 
        sx={{ marginBottom: '1rem' }}
      >
        Your Trust Factor
      </Typography>

      {/* Trust Factor Flexbox Layout */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between', // Ensures icons fill all space on large screens
          gap: 2, // Adds spacing between items
          '@media (max-width: 900px)': {
            justifyContent: 'center', // Center items on smaller screens
          },
        }}
      >
        {trustFactors.map((factor) => (
          <Box
            key={factor.id}
            sx={{
              flex: '1 1 calc(20% - 16px)', // 5 items per row for large screens
              maxWidth: 'calc(20% - 16px)',
              minWidth: '180px', // Minimum width to maintain box size on smaller screens
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              backgroundColor: '#fff', 
              padding: '1rem', 
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Box shadow effect
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)', // Zoom effect on hover
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Enhanced shadow on hover
              },
              '@media (max-width: 1200px)': {
                flex: '1 1 calc(25% - 16px)', // 4 items per row for medium screens
              },
              '@media (max-width: 900px)': {
                flex: '1 1 calc(33.33% - 16px)', // 3 items per row for small screens
              },
              '@media (max-width: 600px)': {
                flex: '1 1 100%', // 1 item per row for extra small screens
                margin: '10px 0',
                // maxWidth: 'none', // Ensure full width on small screens
              },
              '@media (max-width: 400px)': {
                flex: '1 1 100%', // 1 item per row for extra small screens
                margin: '10px 20px',
                maxWidth: 'none', // Ensure full width on small screens
              },
            }}
          >
            {/* Icon */}
            <CardMedia
              component="img"
              image={factor.icon}  // Replace with actual icon
              alt={factor.label}
              sx={{ width: '80px', height: '80px', marginBottom: '1rem' }}
            />
            
            {/* Label */}
            <Typography variant="body1" align="center" sx={{ fontWeight: '500' }}>
              {factor.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TrustFactorSection;
