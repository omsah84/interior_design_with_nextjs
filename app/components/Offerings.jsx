"use client"; // Ensures the component is client-side
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useState } from "react";
import Image from "next/image"; // Next.js Image component
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { useInView } from 'react-intersection-observer'; // Import for scroll-triggered animations

// Import images directly
import modular from "@/public/images/Modern Living Room.jpg";
import home from "@/public/images/Contemporary Home Office.jpg";
import luxury from "@/public/images/Royal.jpg";
import Renovations from "@/public/images/Traditional Home Office.jpg";

// Define an animated content card with scroll-triggered animation
const AnimatedOfferingCard = ({ img, title, description }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the card is visible
    triggerOnce: false, // Animate every time the card comes into view
  });

  // Define animation variants for the scroll effect
  const variants = {
    hidden: { opacity: 0, y: 30 }, // Initial state (hidden)
    visible: { opacity: 1, y: 0 }, // Final state (visible)
  };

  return (
    <motion.div
      ref={ref} // Ref to track when the card comes into view
      initial="hidden" // Set the initial animation state
      animate={inView ? "visible" : "hidden"} // Animate when in view
      variants={variants} // Apply the defined variants
      transition={{ duration: 0.5 }} // Set the duration of the scroll animation
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "350px", // Fixed height for all cards
          width: "100%", // Ensure width takes full space in its container
          position: "relative",
        }}
      >
        <Image
          priority
          src={img}
          alt={title}
          width={400}
          height={200}
          style={{
            width: "100%",
            height: "200px", // Ensure consistent image height
            objectFit: "cover",
            borderRadius: "8px 8px 0 0", // Rounded top corners for the image
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" align="center">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
          >
            {description}
          </Typography>
        </CardContent>
        <Button
          variant="text"
          sx={{
            color: "#f50057",
            position: "relative",
            marginTop: "auto",
            padding: "8px",
            justifySelf: "flex-end",
          }}
          endIcon={<span>›</span>}
        >
          Learn More
        </Button>
      </Card>
    </motion.div>
  );
};

export default function Offerings() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const offerings = [
    {
      title: "Modular Interiors",
      description: "Functional kitchen, wardrobe and storage",
      img: modular,
    },
    {
      title: "Full Home Interiors",
      description: "Turnkey interior solutions for your home",
      img: home,
    },
    {
      title: "Luxury Interiors",
      description: "Tailored interiors that redefine elegance",
      img: luxury,
    },
    {
      title: "Renovations",
      description: "Expert solutions to upgrade your home",
      img: Renovations,
    },
  ];

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <motion.div
      id="cities"
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.2 }}
    >
      <Typography variant="h5" align="center" paddingTop={3} gutterBottom>
        Your Ultimate Destination for Modern Interior Design
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          padding: "16px",
        }}
      >
        {offerings.map((offering, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "100%",
                sm: "calc(50% - 16px)",
                md: "calc(25% - 16px)",
              }, // Adjust width based on screen size
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              transform: hoverIndex === index ? "scale(1.05)" : "scale(1)",
              boxShadow:
                hoverIndex === index
                  ? "0px 8px 16px rgba(0, 0, 0, 0.3)"
                  : "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatedOfferingCard
              img={offering.img}
              title={offering.title}
              description={offering.description}
            />
          </Box>
        ))}
      </Box>
    </motion.div>
  );
}
