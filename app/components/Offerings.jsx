"use client"; // This makes the component client-side
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component

// Import images directly
import image1 from "@/public/images/image1.jpg"; // Ensure the path is correct

export default function Offerings() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const offerings = [
    {
      title: "Modular Interiors",
      description: "Functional kitchen, wardrobe and storage",
      img: image1, // Use imported image directly
    },
    {
      title: "Full Home Interiors",
      description: "Turnkey interior solutions for your home",
      img: image1,
    },
    {
      title: "Luxury Interiors",
      description: "Tailored interiors that redefine elegance",
      img: image1,
    },
    {
      title: "Renovations",
      description: "Expert solutions to upgrade your home",
      img: image1,
    },
  ];

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div>
      <Typography variant="h5" align="center" paddingTop={3}  gutterBottom>
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
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Ensures content is spaced properly
                height: "100%",
                position: "relative",
              }}
            >
              {/* Use Next.js Image component */}
              <Image
                priority
                src={offering.img}
                alt={offering.title}
                width={400} // Provide width for the Image component
                height={200} // Provide height for the Image component
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0",
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" align="center">
                  {offering.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {offering.description}
                </Typography>
              </CardContent>
              <Button
                variant="text"
                sx={{
                  color: "#f50057",
                  position: "relative", // Changed to relative so it stays inside the card
                  marginTop: "auto", // Ensures button stays at the bottom of the card
                  padding: "8px",
                  justifySelf: "flex-end",
                }}
                endIcon={<span>›</span>}
              >
                Learn More
              </Button>
            </Card>
          </Box>
        ))}
      </Box>
    </div>
  );
}
