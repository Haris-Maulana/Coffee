import React from "react";

import "./Homepage.scss";
import coffee from "../../assets/image/coffee.jpeg";

function Home() {
  return (
    <div className="homepage">
      <header>
        <h1>WikiKoffie</h1>
      </header>
      <main>
        <div className="card-container">
          <div className="card">
            <div className="img-container">
              <img src={coffee} alt="Wiki Coffee" />
            </div>
            <div className="desc-container">
              <div className="desc">
                <p>
                "Charming cafe with a nostalgic interior offering elevated local fare, sweets & weekend live music."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
