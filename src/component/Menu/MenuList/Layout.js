import React, { useState, useEffect } from "react";

function Layout() {

  const [layout ,setLayout] = useState([])

  useEffect(() => {
    const baseURL = "https://api.sampleapis.com/coffee/hot";
    fetch(baseURL)
      .then((resp) => resp.json())
      .then((data) => {
        setLayout(data.slice(0, -9));
      });
  }, []);
  return (
    <>
      <header>
        <h1>This Menu is Only Using Dummy</h1>
      </header>
      <main>
        {layout.map((datas) => (
          <div className="card" key={datas.id}>
            <div className="img-container">
              <img src={datas.image} alt="" />
            </div>
            <div className="desc-container">
              <div className="title">{datas.title}</div>
              <div className="desc">{datas.description}</div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default Layout;
