"use client"; // Makes the component client-side
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import Image from 'next/image'; // For the logo image
import logo from '@/public/images/Home-image.png'; // Assuming this is the logo image path

export default function Testimonials() {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f4f0ec', width: '100%' }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        See What Our Customers Are Saying
      </Typography>
      <Grid container spacing={4}>
        {/* Testimonial 1 */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '10px', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '600px', margin: 'auto' }}>
            <Avatar sx={{ width: 80, height: 80, mr: 2, borderRadius: 0 }}> {/* Set borderRadius to 0 to remove rounding */}
              <Image
                src={logo} // Replace with the path to the uploaded image
                alt="Harsh P."
                width={100} // Increased width
                height={80} // Keep height same to maintain alignment
                style={{ objectFit: 'contain' }} // Ensure the image fits within the avatar
              />
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                You have right place
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'left', mb: 1 }}>
                Pagdone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#f39c12', mb: 1 }}>
                ★★★★★
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic', textAlign: 'left' }}>
                Harsh P. <br />
                Product Designer
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Testimonial 2 */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '10px', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '600px', margin: 'auto' }}>
            <Avatar sx={{ width: 80, height: 80, mr: 2, borderRadius: 0 }}> {/* Set borderRadius to 0 to remove rounding */}
              <Image
                src={logo} // Replace with the path to the uploaded image
                alt="Jane D."
                width={100} // Increased width
                height={80} // Keep height same to maintain alignment
                style={{ objectFit: 'contain' }} // Ensure the image fits within the avatar
              />
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                It’s best
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'left', mb: 1 }}>
                The customer service team at pagedone went above and beyond to help me resolve a billing issue.
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#f39c12', mb: 1 }}>
                ★★★★★
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic', textAlign: 'left' }}>
                Jane D. <br />
                CEO
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
