import "./index.css";
import "./cssComponents.css";
import { Route, Routes, useLocation } from "react-router-dom";
// import Footer from "./components/global/footer/Footer";
import React, { useEffect } from "react";
import OnLoading from "./components/animations/OnLoading";
const NavBar = React.lazy(() => import("./components/global/navbar/Navbar"));
const Footer = React.lazy(() => import("./components/global/footer/Footer"));
const About = React.lazy(() => import("./pages/AboutPage"));
const Home = React.lazy(() => import("./pages/HomePage"));
const Details = React.lazy(() => import("./pages/DetailsPage"));
const Questions = React.lazy(() => import("./pages/QuestionsPage"));
const NotFound = React.lazy(() => import("./pages/NotFoundPage"));
const Princing = React.lazy(() => import("./pages/PrincingPage"));
const Contact = React.lazy(() => import("./pages/ContactPage"));

function App() {
  // Get pathName
  const { pathname } = useLocation();
  // Scroll to top on Change PathName
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <React.Suspense>
        <NavBar />
      </React.Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<OnLoading />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="details"
          element={
            <React.Suspense fallback={<OnLoading />}>
              <Details />
            </React.Suspense>
          }
        />
        <Route
          path="princing"
          element={
            <React.Suspense fallback={<OnLoading />}>
              <Princing />
            </React.Suspense>
          }
        />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<OnLoading />}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <React.Suspense fallback={<OnLoading />}>
              <Contact />
            </React.Suspense>
          }
        />
        <Route
          path="faqs"
          element={
            <React.Suspense fallback={<OnLoading />}>
              <Questions />
            </React.Suspense>
          }
        />
        <Route
          path="/*"
          element={
            <React.Suspense fallback={<OnLoading />}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Routes>
      <React.Suspense>
        <Footer />
      </React.Suspense>
    </>
  );
}

export default App;
