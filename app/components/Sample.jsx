"use client"
import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedContent = ({ heading, description, direction }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only trigger the animation once
  });

  // Define your animation variants based on direction (left or right)
  const variants = {
    hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },  // Start hidden and shifted left or right
    visible: { opacity: 1, x: 0 },   // End state: fully visible and centered
  };

  return (
    <motion.div
      ref={ref}                // Set the ref for Intersection Observer
      initial="hidden"        // Initial state when mounted
      animate={inView ? "visible" : "hidden"} // Animate based on inView state
      variants={variants}     // Use defined variants
      transition={{ duration: 0.5 }} // Set duration of the transition
    >
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        {heading}
      </Typography>
      <Typography variant="body1" align="center">
        {description}
      </Typography>
    </motion.div>
  );
};

const Sample = () => {
  return (
    <Box id="sample-content" sx={{ padding: 2 }}>
      {/* Section 1 (from the left) */}
      <AnimatedContent 
        heading="Stylish Living Spaces" 
        description="Discover how to transform your living room with elegant designs and a touch of creativity."
        direction="left" 
      />

      {/* Section 2 (from the right) */}
      <AnimatedContent 
        heading="Serene Bedrooms" 
        description="Create the perfect atmosphere in your bedroom with these stylish and cozy ideas." 
        direction="right" 
      />

      {/* Section 3 (from the left) */}
      <AnimatedContent 
        heading="Functional Kitchens" 
        description="Upgrade your kitchen with modern designs that blend aesthetics and functionality." 
        direction="left" 
      />
    </Box>
  );
};

export default Sample;
