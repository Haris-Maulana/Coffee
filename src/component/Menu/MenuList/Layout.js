import React, { useState, useEffect } from "react";

function Layout() {
  const [layout, setLayout] = useState([]);
  const [plusLayout, setPlusLayout] = useState([]);

  useEffect(() => {
    const baseURL = "https://api.sampleapis.com/coffee/hot";
    fetch(baseURL)
      .then((resp) => resp.json())
      .then((data) => {
        setLayout(data.slice(0, -9));
      });
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "14f40359d2msh28143880a2e9bd2p16da5djsn567556c91318",
        "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
      },
    };

    fetch("https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0", options)
      .then((res) => res.json())
      .then((res) => {
        setPlusLayout(res.feed);
      })
      .catch((err) => console.error(err));
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
        {plusLayout
          .filter((datas) => {
            if (datas.type === "single recipe") {
              return datas;
            }
          })
          .map(({ display, "tracking-id": trackingId }) => (
            <div className="card" key={trackingId}>
              <div className="img-container">
                <img src={display.images[0]} alt={display.displayName} />
              </div>
              <div className="desc-container">
                <div className="title">{display.displayName}</div>
                <div className="desc">no description</div>
              </div>
            </div>
          ))}
      </main>
    </>
  );
}

export default Layout;
