import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import "./noisy.css";
import Footer from "../components/Footer";

function _layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default _layout;
