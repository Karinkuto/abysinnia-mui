import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import styles from "./ProductsComponents.module.css";

function ProductsComponent() {
  return (
    <Container className={styles.productsContainer}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Typography variant="h5" component="div">
                Online Banking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Through our systematized and stylish online banking platform,
                you will avoid unnecessary queues to be served. Our online
                banking enables you to manage your financial activity without a
                problem.
              </Typography>
              <Button className={styles.button}>Learn More</Button>
            </CardContent >
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Typography variant="h5" component="div">
                Mobile Banking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                With mobile banking, BoA gets even closer to you and you get
                closer to your account. BoA offers a safe and secure banking
                system with the most flexible structure and allows you access to
                your account from anywhere and everywhere.
              </Typography>
              <Button className={styles.button}>Learn More</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Typography variant="h5" component="div">
                GizePay
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Typography>
              <Button className={styles.button}>Learn More</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductsComponent;
