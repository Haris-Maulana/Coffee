import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Menu from "../../../assets/interface/Menu.png";
import WikiCoffeeUrl from "../../../assets/interface/Wiki Coffee.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onClickMenu = () => {
    if (menuOpen === false) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  const openMenu = useRef(null);
  const root = document.querySelector(":root");

  useEffect(() => {
    if (menuOpen === true) {
      root.style.setProperty("--isMenu-open", "flex");
      openMenu.current.style.animation = "rotate 300ms ease-in-out forwards";
    } else {
      root.style.setProperty("--isMenu-open", "none");
      openMenu.current.style.animation =
        "reverse-rotate 300ms ease-in-out forwards";
    }
  }, [onClickMenu]);

  useEffect(() => {
    if (openMenu.current === null) {
      setMenuOpen(false);
      root.style.setProperty("--isMenu-open", "none");
    }
  }, [openMenu.current]);

  return (
    <>
      <nav className="default-nav">
        {/* Left Side Nav =================== */}
        <div className="lt-nav">
          <Link to="/">
            <span>W</span>IKI KOFFIE
          </Link>
        </div>

        {/* Left Side Nav Ends =================== */}

        {/* Middle Side Nav =================== */}

        <div className="md-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/branches">Branches</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
        </div>

        {/* Middle Side Nav Ends =================== */}

        {/* Right Side Nav =================== */}

        <div className="rt-nav">
          <img
            src={Menu}
            alt="Menu"
            className="menu"
            onClick={onClickMenu}
            ref={openMenu}
          />
        </div>

        {/* Right Side Nav Ends =================== */}
        {/* Menu Open on Small Devices */}

        <div className="main-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/branches">Branches</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
        </div>

        {/* Menu Open on Small Devices Ends */}
      </nav>
    </>
  );
}

export default Navbar;
