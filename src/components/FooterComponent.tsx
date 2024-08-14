import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Container, Grid, Typography, Link, Box } from "@mui/material";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <Container>
      <Box className="footer p-5">
        <Grid container spacing={3} sx={{ flexWrap: "nowrap" }}>
          <Grid item xs={12} sm={3}>
            <Link href="https://abysinnia-react.vercel.app" underline="none">
              <img
                src="/brand-icon.png"
                alt="Abysinnia Logo"
                className="brand-icon"
                style={{ width: "3em" }}
              />
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" strong>
              Useful Links
            </Typography>
            <ul>
              <li>
                <Link href="#" underline="none">
                  Telegram Channel
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Savings Account
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Current Account
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Application Forums
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Branch/ATM Locator
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Abysinnia Online Login
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Online Banking Login
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  GizePay Login
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Vacancy
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" strong>
              Ways to Bank
            </Typography>
            <ul>
              <li>
                <Link href="#" underline="none">
                  Abyssinia Online
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Mobile Banking
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Virtual Banking
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Card Banking
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Agent Banking
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  E-commerce
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" strong>
              International Banking
            </Typography>
            <ul>
              <li>
                <Link href="#" underline="none">
                  Foreign Currency Deposit Accounts
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Trade Services
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Money Transfer
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Correspondent Banks
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" strong>
              Loans
            </Typography>
            <ul>
              <li>
                <Link href="#" underline="none">
                  Corporate and Commercial
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Consumer and Mortgage Products
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Bank Guarantee
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Loan Calculator
                </Link>
              </li>
            </ul>
            <br />
            <br />
            <Typography variant="subtitle1" strong>
              Customer Care
            </Typography>
            <ul>
              <li>
                <Link href="tel:8397" underline="none">
                  8397 (Toll-free Number)
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contactcenter@bankofabyssinia.com"
                  underline="none"
                >
                  contactcenter@bankofabyssinia.com
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  SWIFT: ABYSETAA, Addis Ababa, Ethiopia
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  HQ Building, The Gambia St, Legehar, Addis Ababa, Ethiopia
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Box
          mt={4}
          className="footer-links d-flex justify-content-between align-items-center g-3"
          sx={{
            paddingTop: "1em",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" className="footer-copywrite">
            &copy; {new Date().getFullYear()}{" "}
            <strong>Bank of Abysinnia™</strong>
          </Typography>
          <Box
            className="socials"
            sx={{ display: "flex", gap: "1em", marginTop: "1em" }}
          >
            <Link href="#" underline="none">
              <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
            </Link>
            <Link href="#" underline="none">
              <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            </Link>
            <Link href="#" underline="none">
              <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
            </Link>
            <Link href="#" underline="none">
              <FontAwesomeIcon icon={faUserCircle} className="social-icon" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default FooterComponent;
