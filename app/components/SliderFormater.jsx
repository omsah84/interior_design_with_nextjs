"use client";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types"; // Import PropTypes
import Image from "next/image";

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

  return (
    <BannerContainer>
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
            <ActionButton variant="contained">GET FREE QUOTE</ActionButton>
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
