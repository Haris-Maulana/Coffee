import React, { useEffect, useState } from "react";
import Footer from "../component/General/Footer/Footer";
import Navbar from "../component/General/Navbar/Navbar";
import ClipLoader from "react-spinners/ClipLoader";
import Homepage from "../component/Home/Homepage.js";

function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}

export default Home;
