import React from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import happyHomeIcon from "@/public/assets/happyHomeIcon.png"; // Ensure this path is correct
import citiesIcon from "@/public/assets/citiesIcon.png";
import countryIcon from "@/public/assets/countryIcon.png";
import productIcon from "@/public/assets/productIcon.png";
import designerIcon from "@/public/assets/designerIcon.png";

// Trust Factor Data
const trustFactors = [
  {
    id: 1,
    icon: happyHomeIcon,
    label: "100,000+ happy homes",
  },
  {
    id: 2,
    icon: citiesIcon,
    label: "60+ cities",
  },
  {
    id: 3,
    icon: countryIcon,
    label: "3 countries",
  },
  {
    id: 4,
    icon:  productIcon,
    label: "20 lakh+ catalogue products",
  },
  {
    id: 5,
    icon: designerIcon,
    label: "3,500+ designers",
  },
];

const TrustFactorSection = () => {
  return (
    <Box sx={{ paddingTop: "20px", paddingBottom: "30px" }}>
      <Typography variant="h5" align="center" sx={{ marginBottom: "1rem" }}>
        Your Trust Factor
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 2,
          "@media (max-width: 900px)": {
            justifyContent: "center",
          },
        }}
      >
        {trustFactors.map((factor) => (
          <Box
            key={factor.id}
            sx={{
              flex: "1 1 calc(20% - 16px)",
              maxWidth: "calc(20% - 16px)",
              minWidth: "180px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "1rem",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition:
                "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              },
              "@media (max-width: 1200px)": {
                flex: "1 1 calc(25% - 16px)",
              },
              "@media (max-width: 900px)": {
                flex: "1 1 calc(33.33% - 16px)",
              },
              "@media (max-width: 600px)": {
                flex: "1 1 100%",
                margin: "10px 0",
              },
              "@media (max-width: 400px)": {
                flex: "1 1 100%",
                margin: "10px 20px",
                maxWidth: "none",
              },
            }}
          >
            {/* Image using Next.js Image component */}
            <Image
              src={factor.icon} // Ensure this points to a valid image URL
              alt={factor.label}
              width={80} // Set width
              height={80} // Set height
              style={{ marginBottom: "1rem" }} // Apply margin via style
            />

            <Typography variant="body1" align="center" sx={{ fontWeight: "500" }}>
              {factor.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TrustFactorSection;
