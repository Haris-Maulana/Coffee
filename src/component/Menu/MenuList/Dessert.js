import React, { useEffect, useState } from "react";

function Dessert() {
  const [rawDessert, setRawDessert] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "14f40359d2msh28143880a2e9bd2p16da5djsn567556c91318",
        "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
      },
    };

    fetch("https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0", options)
      .then(setLoading(true))
      .then((res) => res.json())
      .then((res) => {
        setDessert(res.feed);
      })  
      .catch((err) => console.error(err))
      .then(setLoading(false));
  }, []);

  return (
    <>
      <header>
        <h1>Dessert</h1>
      </header>
      <main>
        {dessert
          .filter((datas) => {
            if (
              datas.type === "single recipe" &&
              datas.display.displayName != "Jambalaya Risotto" &&
              datas.display.displayName !=
                "Paleo + Whole30 Instant Pot BBQ Ribs" &&
              datas.display.displayName !=
                "Creamy Cajun Chicken and Sausage Pasta" &&
              datas.display.displayName != "Mongolian Beef Over Steamed Rice" &&
              datas.display.displayName != "Pizza Dough" &&
              datas.display.displayName != "Grilled Chuck Steak" &&
              datas.display.displayName != "Southern Shrimp and Grits" &&
              datas.display.displayName != "Indian Butter Chicken" &&
              datas.display.displayName != "Farmhouse Buttermilk Cake" &&
              datas.display.displayName != "10 Minute Creamy Tomato Soup"
            ) {
              return datas;
            }
          })
          .map(({ display, 'tracking-id': trackingId}) => (
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

export default Dessert;
