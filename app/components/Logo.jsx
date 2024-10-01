import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

function InteriorCafeIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24" sx={{ width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 } }}>
      {/* Abstract "i" with circle */}
      <circle cx="12" cy="12" r="10" fill="#811424" />
      <circle cx="12" cy="7" r="2.5" fill="#fff" />
      <path d="M12 9.5v7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </SvgIcon>
  );
}

function Logo() {
  return (
    <Box display="flex" alignItems="center">
      {/* Logo icon */}
      <InteriorCafeIcon sx={{ color: '#811424' }} />
      
      {/* Logo text */}
      <Box ml={2}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            color: '#811424',
            letterSpacing: 1,
            fontSize: { xs: '1.5rem', md: '2rem' },
          }}
        >
          INTERIORCAFE
        </Typography>
        <Typography
          variant="subtitle2"
          component="div"
          sx={{
            fontFamily: 'Arial, sans-serif',
            color: '#811424',
            fontStyle: 'italic',
            letterSpacing: 0.5,
            fontSize: { xs: '0.75rem', md: '1rem' },
          }}
        >
          WE ARE NEW! BUT EXPERIENCED!
        </Typography>
      </Box>
    </Box>
  );
}

export default Logo;
