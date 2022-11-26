import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/General/Navbar/Navbar";

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Layout;
