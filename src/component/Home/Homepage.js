import React from "react";

import "./Homepage.scss";

import Headerbgc from "../../assets/image/headerbgc.jpg";

function Home() {
  return (
    <div className="homepage">
      <header>
        <img src={Headerbgc} alt="" />
        <h1>
          <em>
            Taste of Life
            <br />
            In Single Sip of Coffee <br />
            <span>-Wiki Koffie</span>
          </em>
        </h1>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default Home;
