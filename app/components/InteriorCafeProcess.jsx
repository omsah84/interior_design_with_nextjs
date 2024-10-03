import React from "react";
import { Typography, Container, Box } from "@mui/material";

const InteriorCafeProcess = () => {
  return (
    <Container sx={{paddingBottom:"30px"}}>
      {/* Header Text */}
      <Typography
        variant="h5"
        align="center"
        sx={{ marginBottom: "2rem" }}
        gutterBottom
      >
        How InteriorCafe Works once Finalized
      </Typography>

      {/* Full-width responsive image centered */}
      <Box
        component="img"
        src="/images/Picture1.png" // Path relative to public folder
        alt="Interior Cafe"
        sx={{
          width: "100%", // Makes the image responsive
          maxWidth: "90%", // Limits the width on larger screens
          height: "auto", // Maintains the aspect ratio of the image
          display: "block", // Ensures the image is displayed as a block element
          objectFit: "cover", // Ensures the image covers the box without distortion
          margin: "0 auto", // Centers the image horizontally
        }}
      />
    </Container>
  );
};

export default InteriorCafeProcess;
