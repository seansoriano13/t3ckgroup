import { Outlet, ScrollRestoration, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import "./noisy.css";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

function _layout() {
  const location = useLocation();
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <PageTransition key={location.pathname}>
        <Outlet />
      </PageTransition>
      <Footer />
    </>
  );
}

export default _layout;
