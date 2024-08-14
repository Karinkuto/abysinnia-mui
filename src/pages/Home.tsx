import { Container, Typography } from "@mui/material";
import HeroComponent from "../components/HeroComponent";
import ProductsComponent from "../components/ProductsComponent";

export default function Home() {
  return (
    <Container>
      <HeroComponent />
      <Typography
        variant="h4"
        display={"flex"}
        justifyContent={"center"}
        sx={{ marginTop: "4rem" }}
      >
        Products
      </Typography>
      <ProductsComponent />
      <Typography
        variant="h4"
        display={"flex"}
        justifyContent={"center"}
        sx={{ marginTop: "4rem" }}
      >
        Habesha Debit Cards
      </Typography>
    </Container>
  );
}
