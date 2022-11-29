import React, { useEffect, useState } from "react";

function Food() {

  const [food, setFood] = useState([])

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
        setFood(res.feed);
      })
      .catch((err) => console.error(err))
  }, []);
  return (
    <>
      <header>
        <h1>Food</h1>
      </header>
      <main>
        {food
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

export default Food;
