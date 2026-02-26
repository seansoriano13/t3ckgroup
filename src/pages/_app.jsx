import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import "./noisy.css";

function _layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default _layout;
