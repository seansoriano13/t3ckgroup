import { Outlet, ScrollRestoration, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import "./noisy.css";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import QuoteCartModal from "../components/QuoteCartModal";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <PageTransition key={location.pathname}>
        <Outlet />
      </PageTransition>
      <QuoteCartModal />
      <Footer />
    </>
  );
}

export default App;
