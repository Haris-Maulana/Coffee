import React, { useEffect, useState } from "react";

function Coffee() {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    const baseURL = "https://api.sampleapis.com/coffee/hot";
    fetch(baseURL)
      .then((resp) => resp.json())
      .then((data) => {
        setCoffee(data);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Coffee</h1>
      </header>
      <main>
        {coffee.slice(0, -9).map((datas) => (
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

export default Coffee;
