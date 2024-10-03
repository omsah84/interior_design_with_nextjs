"use client"; // Makes the component client-side
import { Box, Typography, Paper, Avatar } from '@mui/material';
import Image from 'next/image'; // For the logo image
import logo from '@/public/images/Home-image.png'; // Assuming this is the logo image path

export default function Testimonials() {
  return (
    <Box sx={{ padding: '20px 0', width: '100%' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" align="center">
          See What Our Customers Are Saying
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column',sm:'row', md: 'row' }, // Column on small screens, row on medium and larger screens
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        {/* Testimonial 1 */}
        <Box
          component={Paper}
          elevation={1}
          sx={{
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            maxWidth: { xs: '100%', md: '45%' }, // Full width on small screens, 45% on medium and larger screens
            '&:hover': {
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', // Box shadow on hover
            },
            transition: 'box-shadow 0.3s ease',
          }}
        >
          <Box
            component={Avatar}
            sx={{
              width: { xs: 100, md: 180 }, // Smaller size on small screens
              height: { xs: 100, md: 180 }, // Smaller size on small screens
              mr: 2,
              borderRadius: 0,
            }}
          >
            <Image
              src={logo}
              alt="Harsh P."
              width={180} // Further increased width
              height="100%" // Further increased height
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, maxWidth: '250px' }}> {/* Reduced content box width */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
              You have the right place
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'left', mb: 0 }}>
              Pagdone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#f39c12', mb: 0 }}>
              ★★★★★
            </Typography>
            <Typography variant="caption" sx={{ fontStyle: 'italic', textAlign: 'left' }}>
              Harsh P. <br />
              Product Designer
            </Typography>
          </Box>
        </Box>

        {/* Testimonial 2 */}
        <Box
          component={Paper}
          elevation={3}
          sx={{
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            maxWidth: { xs: '100%', md: '45%' }, // Full width on small screens, 45% on medium and larger screens
            '&:hover': {
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', // Box shadow on hover
            },
            transition: 'box-shadow 0.3s ease',
          }}
        >
          <Box
            component={Avatar}
            sx={{
              width: { xs: 100, md: 180 }, // Smaller size on small screens
              height: { xs: 100, md: 180 }, // Smaller size on small screens
              mr: 2,
              borderRadius: 0,
            }}
          >
            <Image
              src={logo}
              alt="Jane D."
              width={180} // Further increased width
              height="100%" // Further increased height
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, maxWidth: '250px' }}> {/* Reduced content box width */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
              It’s the best
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'left', mb: 0 }}>
              The customer service team at pagedone went above and beyond to help me resolve a billing issue.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#f39c12', mb: 0 }}>
              ★★★★★
            </Typography>
            <Typography variant="caption" sx={{ fontStyle: 'italic', textAlign: 'left' }}>
              Jane D. <br />
              CEO
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
