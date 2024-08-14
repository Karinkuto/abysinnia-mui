// App.tsx
import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";
import LoadingScreen from "./components/LoadingScreen";
import PageWrapper from "./components/PageWrapper";

// Lazy load your page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ProductsServices = lazy(() => import("./pages/Products"));
const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const Vacancy = lazy(() => import("./pages/Vacancy"));
const IFB = lazy(() => import("./pages/Ifb"));
const Media = lazy(() => import("./pages/Media"));
const OnlineSupport = lazy(() => import("./pages/Support"));

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Simulate loading time
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/products"
          element={
            <PageWrapper>
              <ProductsServices />
            </PageWrapper>
          }
        />
        <Route
          path="/ecommerce"
          element={
            <PageWrapper>
              <Ecommerce />
            </PageWrapper>
          }
        />
        <Route
          path="/vacancy"
          element={
            <PageWrapper>
              <Vacancy />
            </PageWrapper>
          }
        />
        <Route
          path="/ifb"
          element={
            <PageWrapper>
              <IFB />
            </PageWrapper>
          }
        />
        <Route
          path="/media"
          element={
            <PageWrapper>
              <Media />
            </PageWrapper>
          }
        />
        <Route
          path="/support"
          element={
            <PageWrapper>
              <OnlineSupport />
            </PageWrapper>
          }
        />
      </Routes>
    </Suspense>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <NavComponent />
      <AppContent />
      <FooterComponent />
    </BrowserRouter>
  );
};

export default App;
