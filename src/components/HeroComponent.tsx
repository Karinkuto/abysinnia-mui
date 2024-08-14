import { Container, Typography, Button, Box } from "@mui/material";
import CarouselComponent from "./CarouselComponent";
import "./HeroComponent.css"; // Import the CSS file

function HeroComponent() {
  return (
    <Container
      className="hero-section"
      sx={{ display: "flex", flexDirection: "row", gap: 4, width: "100%", padding: 0 }}
    >
      <Box flex={1}>
        <CarouselComponent />
      </Box>
      <Box flex={1} className="hero-text">
        <Typography variant="h3" component="h3" gutterBottom>
          Bank of Abysinnia
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          In an era where commercial banking services were in an inchoate stage
          and striding towards transforming different sectors of the economy,
          Bank of Abyssinia’s founders believed in the need for a bank that
          gives comprehensive commercial banking services. Thus, the Bank of
          Abyssinia (BoA) was open for business in 1996 with enthused initiation
          and determination.
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Button variant="contained" color="primary" className="about-us-btn">
          About Us
        </Button>
      </Box>
    </Container>
  );
}

export default HeroComponent;
