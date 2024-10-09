"use client"; // This makes the component client-side

import React from 'react';
import { Fab, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

const FloatingButtons = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        right: 0, // Set to 0 to align with the right edge of the viewport
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: 1, // Space between buttons
        zIndex: 1000,
      }}
    >
      {/* WhatsApp Button */}
      <Fab
        color="primary"
        aria-label="WhatsApp"
        onClick={() => window.open('https://wa.me/917975230478', '_blank')} // WhatsApp link with the specified number
        sx={{
          width: 56, // Width of the square button
          height: 56, // Height of the square button
          borderRadius: '10px 0 0 10px',
        }}
      >
        <WhatsAppIcon />
      </Fab>

      {/* Phone Button */}
      <Fab
        color="secondary"
        aria-label="Phone"
        onClick={() => window.location.href = 'tel:+917975230478'} // Phone link with the specified number
        sx={{
          width: 56, // Width of the square button
          height: 56, // Height of the square button
          borderRadius: '10px 0 0 10px',
        }}
      >
        <PhoneIcon />
      </Fab>
    </Box>
  );
};

export default FloatingButtons;
