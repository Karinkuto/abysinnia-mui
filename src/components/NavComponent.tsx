import { Box, Tabs, Tab, styled, TabProps, Container } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface TabItem {
  label: string;
  path: string;
}

const tabItems: TabItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products & Services", path: "/products" },
  { label: "E-commerce", path: "/ecommerce" },
  { label: "Vacancy", path: "/vacancy" },
  { label: "IFB", path: "/ifb" },
  { label: "Media", path: "/media" },
  { label: "Online Support", path: "/support" },
];

const AntTab = styled((props: TabProps) => <Tab disableRipple {...props} />)({
  textTransform: "none",
  fontWeight: "bold",
  fontSize: ".8em",
  minWidth: 0,
  paddingInline: "1em",
  color: "rgba(0, 0, 0, 1)",
  "&:hover": {
    color: "orange",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "orange",
    fontWeight: "bold",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
});

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "orange",
  },
});

const IconWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1em",
  marginLeft: "auto",
});

const StyledIcon = styled(Box)({
  fontSize: "1.3em",
  color: "rgba(0, 0, 0, 0.3)",
  "&:hover": {
    color: "orange",
    opacity: 1,
  },
});

export default function NavComponent() {
  const location = useLocation();

  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <StyledTabs aria-label="nav tabs example" value={location.pathname}>
          {tabItems.map((item, index) => (
            <AntTab
              key={index}
              label={item.label}
              component={Link}
              to={item.path}
              value={item.path}
            />
          ))}
        </StyledTabs>
        <IconWrapper>
          <StyledIcon component={LinkedInIcon} />
          <StyledIcon component={FacebookIcon} />
          <StyledIcon component={XIcon} />
          <StyledIcon component={AccountCircleIcon} />
        </IconWrapper>
      </Box>
    </Container>
  );
}
