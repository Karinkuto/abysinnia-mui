import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.img`
  width: 50px;
  opacity: 0.2;
  animation: ${rotate} 2s linear infinite;
  filter: grayscale(100%);
`;

const LoadingScreen: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <LoadingIcon src="/brand-icon.png" alt="Loading..." />
    </div>
  );
};

export default LoadingScreen;
