import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { InputAdornment, Box, styled } from "@mui/material";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    width: "20em",
    backgroundColor: "#F8F8F8", // Default background color
    "& fieldset": {
      border: "none", // Remove border
    },
    "&:hover": {
      backgroundColor: "#F5F5F5",
      transition: "all .2s ease-in-out",
      "& .MuiInputAdornment-root": {
        color: "#202020", // Icon color on focus
      }, // Background color on hover
    },
    "&.Mui-focused": {
      backgroundColor: "#F5F5F5", // Background color on focus
      "& .MuiInputAdornment-root": {
        color: "#202020", // Icon color on focus
      },
    },
  },
  "& .MuiInputAdornment-root": {
    color: "#D9D9D9", // Default icon color
    transition: "all .3s ease-in-out",
  },
});

const HeaderComponent: React.FC = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap", // Ensure responsiveness
        }}
      >
        <img src="logo.png" alt="Logo" style={{ height: "40px" }} />
        <Box
          sx={{ display: "flex", alignItems: "center", mt: { xs: 2, md: 0 } }}
        >
          <StyledTextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            aria-label="search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FontAwesomeIcon icon={faSearch} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeaderComponent;
