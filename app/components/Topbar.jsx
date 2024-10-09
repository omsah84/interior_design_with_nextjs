'use client'
import { Link, styled } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Email, Call } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const Container = styled("div")({
  width: "100%",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "black",
  position: "sticky",
  top: "0px",
});

const SubContainer = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "15px",
});

const ContentContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const Content = styled(Typography)({
  display: "flex",
  alignItems: "center",
  gap: "3px",
});

const LinkStyled = styled(Link)({
  color: "white",
  cursor: "pointer", // Change cursor to pointer
});

export default function Topbar() {
  const handleCall = () => {
    window.open('tel:+917975230478'); // Dialer will open with this number
  };

  return (
    <Container className="container">
      <SubContainer>
        <ContentContainer>
          <Content className="tablet" variant="body1" color="white">
            <LocationOnIcon />
            SY NO-101&156/2, Niladri, D Thogur, Bangalore, Karnataka - 560100
          </Content>
        </ContentContainer>
        <ContentContainer>
          <Content variant="body1" color="white">
            <Call />
            <LinkStyled onClick={handleCall}> +917975230478</LinkStyled>
          </Content>
        </ContentContainer>
        <ContentContainer>
          <Content className="mobile" variant="body1" color="white">
            <Email />
            support@interiorcafe.com
          </Content>
        </ContentContainer>
      </SubContainer>
    </Container>
  );
}
