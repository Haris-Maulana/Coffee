import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import { Link } from "react-router-dom";

import "./Footer.scss";

//

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-menu">
          <div className="left-footer">
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
          <div className="right-footer">
            <div className="title-footer">You Can Find Us at</div>
            <div className="content-footer">
              <a href="https://www.instagram.com/wikikoffie/">
                <AiOutlineInstagram />
              </a>
              <a href="">
                <AiOutlineTwitter />
              </a>
              <a href="https://goo.gl/maps/ki8tfn8rSXhKEUgC7">
                <SiGooglemaps />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <h6>©wikikoffie || 2022</h6>
        </div>
      </footer>
    </>
  );
}

export default Footer;
