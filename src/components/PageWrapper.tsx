// components/PageWrapper.tsx
import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Minimum loading time of 300ms

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
};

export default PageWrapper;
