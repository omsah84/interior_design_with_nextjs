import React from 'react';
import { Grid, Typography, Card, CardMedia, Box } from '@mui/material';

const ongoingProjects = [
  { 
    id: 1, 
    title: 'Project 1', 
    price: '15 lakhs', 
    img: 'https://via.placeholder.com/300'  // Replace with your image URLs
  },
  { 
    id: 2, 
    title: 'Project 2', 
    price: '12 lakhs', 
    img: 'https://via.placeholder.com/300'
  },
  { 
    id: 3, 
    title: 'Project 3', 
    price: '18 lakhs', 
    img: 'https://via.placeholder.com/300'
  },
  { 
    id: 4, 
    title: 'Project 4', 
    price: '20 lakhs', 
    img: 'https://via.placeholder.com/300'
  }
];

const OngoingProjects = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
      {/* Title */}
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ marginBottom: '2rem', fontWeight: 'bold' }}>
        Ongoing Projects
      </Typography>

      {/* Project Grid */}
      <Grid container spacing={3}>
        {ongoingProjects.map((project) => (
          <Grid item xs={12} sm={6} md={3} key={project.id}>
            <Card
              sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                '&:hover .hoverContent': {
                  opacity: 1,  // Show content on hover
                }
              }}
            >
              {/* Project Image */}
              <CardMedia 
                component="img" 
                image={project.img} 
                alt={project.title} 
                height="200" 
              />

              {/* Hover Content (Title and Price) */}
              <Box
                className="hoverContent"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  opacity: 0, // Hidden by default
                  transition: 'opacity 0.3s ease', // Smooth transition on hover
                }}
              >
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.price}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OngoingProjects;
