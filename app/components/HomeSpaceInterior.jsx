"use client"
import { Box, Typography, Stack, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const OfferingsContainer = styled(Box)({
  backgroundColor: "#fbf5f5",
  padding: "40px 20px",
  textAlign: "center",
});

const Heading = styled(Typography)({
  fontSize: "28px", // Slightly larger for emphasis
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#333",
});

const ColumnHeading = styled(Typography)({
  fontSize: "22px",
  fontWeight: "bold",
  marginBottom: "5px",
  color: "#555",
});

const ListItem = styled(Typography)({
  fontSize: "16px",
  marginBottom: "5px",
  padding: "2px", // Padding for list items
  background: "rgba(255, 255, 255, 0.8)", // Light background for list items
  borderRadius: "5px",
  transition: "0.3s",
  "&:hover": {
    background: "#ffffff",
    transform: "scale(1.02)",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  },
});

// Styled card for each section
const StyledCard = styled(Card)({
  backgroundColor: "#ffffff", // White background for cards
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
  transition: "0.3s",
  "&:hover": {
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)", // Increase shadow on hover
  },
});

const Offerings = () => {
  return (
    <OfferingsContainer>
      <Heading>What We Offer</Heading>
      <Typography sx={{ marginBottom: "20px", fontSize: { xs: "16px", sm: "18px" }, color: "#333" }}>
        Our strength of proficient execution is backed by experienced designers and project managers with rich experience in interior designing, space planning, and project execution services, turning any space into a powerful expression of the client’s personality.
      </Typography>

      <Stack spacing={4} direction={{ xs: "column", sm: "column", md: "row" }} justifyContent="center">
        {/* Warranty Card */}
        <StyledCard>
          <CardContent>
            <ColumnHeading>Warranty</ColumnHeading>
            <ListItem>FLAT 10-year warranty on modular products</ListItem>
            <ListItem>Up to 1-year on-site service warranty</ListItem>
            <ListItem>5-year warranty on workmanship and installation</ListItem>
            <ListItem>Lifetime warranty on hardware components</ListItem>
            <ListItem>Dedicated customer support for warranty claims</ListItem>
          </CardContent>
        </StyledCard>

        {/* Services Card */}
        <StyledCard>
          <CardContent>
            <ColumnHeading>Our Services</ColumnHeading>
            <ListItem>Modular Kitchens</ListItem>
            <ListItem>Modular Wardrobes</ListItem>
            <ListItem>Lighting</ListItem>
            <ListItem>Flooring</ListItem>
            <ListItem>Electrical Work</ListItem>
            <ListItem>Civil Work</ListItem>
            <ListItem>False Ceiling</ListItem>
            <ListItem>Wall Design & Painting</ListItem>
          </CardContent>
        </StyledCard>

        {/* Technology Card */}
        <StyledCard>
          <CardContent>
            <ColumnHeading>Technology & Science</ColumnHeading>
            <ListItem>AquaBloc® Technology</ListItem>
            <ListItem>DuraBuild™ Technology</ListItem>
            <ListItem>Design Science</ListItem>
            <ListItem>Eco-friendly Materials for Sustainable Design</ListItem>
            <ListItem>3D Visualization and Planning Software</ListItem>
            <ListItem>Smart Home Integration Solutions</ListItem>
            <ListItem>Ergonomic Design Principles for Comfort</ListItem>
          </CardContent>
        </StyledCard>
      </Stack>
    </OfferingsContainer>
  );
};

export default Offerings;
