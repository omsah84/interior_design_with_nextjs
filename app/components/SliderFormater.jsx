"use client";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Dialog, DialogContent } from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import Image from "next/image";
import GetFeeQuote from "./GetFeeQuote";

const BannerContainer = styled(Box)({
  padding: "40px 20px",
  textAlign: "center",
});

const Heading = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
});

const SlideContainer = styled(Box)({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

const SlideImage = styled(Image)({
  width: "250px",
  height: "250px",
  borderRadius: "25px",
  objectFit: "cover",
  marginBottom: "10px",
  margin: "0 auto",
});

const SlideTitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: "bold",
  marginTop: "10px",
});

const SlideDescription = styled(Typography)({
  fontSize: "16px",
  marginTop: "5px",
  marginBottom: "10px",
});

const ActionButton = styled(Button)({
  backgroundColor: "#FF0000",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#D00000",
  },
});

const SliderFormater = ({ slides, heading, subheading }) => {
  const [activeFormIndex, setActiveFormIndex] = useState(null); // State to track which form is open
  const [inert, setInert] = useState(false); // State for inert attribute
  const buttonRef = useRef(null); // Ref for the button

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleFormToggle = (index) => {
    setActiveFormIndex(index); // Open the form for the selected slide
    setInert(true); // Set inert to true
  };

  const handleCloseForm = () => {
    setActiveFormIndex(null); // Close the form
    setInert(false); // Reset inert
    if (buttonRef.current) {
      buttonRef.current.focus(); // Refocus the button
    }
  };

  useEffect(() => {
    // Handle focus when dialog opens
    if (activeFormIndex !== null && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [activeFormIndex]);

  return (
    <BannerContainer id="design-ideas" aria-hidden={inert}>
      <Heading>{heading}</Heading>
      <Typography>{subheading}</Typography>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <SlideContainer key={index}>
            <SlideImage
              src={slide.image.src}
              alt={slide.title}
              width={250}
              height={250}
            />
            <SlideTitle>{slide.title}</SlideTitle>
            <SlideDescription>{slide.description}</SlideDescription>
            <ActionButton
              variant="contained"
              onClick={() => handleFormToggle(index)}
              ref={buttonRef} // Assign ref to button
            >
              GET FREE QUOTE
            </ActionButton>

            {/* Show the contact form in a dialog/modal when the button is clicked */}
            <Dialog
              open={activeFormIndex === index}
              onClose={handleCloseForm}
              fullWidth
              maxWidth="sm"
              PaperProps={{
                style: { 
                  width: "fit-content", 
                  height: "fit-content",
                  padding: "20px"
                },
              }}
            >
              <DialogContent dividers>
                <GetFeeQuote isVisible={true} handleClose={handleCloseForm} />
              </DialogContent>
            </Dialog>
          </SlideContainer>
        ))}
      </Slider>
    </BannerContainer>
  );
};

SliderFormater.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired, // Use object since we are using Next.js Image
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};

export default SliderFormater;
