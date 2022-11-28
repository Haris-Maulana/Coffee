import React, { useEffect, useState } from "react";
import "./Menupage.scss";

function Menupage() {
  const [coffee, setCoffee] = useState([]);
  const [dessert, setDessert] = useState("");
  const [softdrink, setSoftdrink] = useState("");
  const [food, setFood] = useState("");

  const onChangeHandleCoffe = ()=>{

  }

  useEffect(() => {
    const baseURL = "https://api.sampleapis.com/coffee/hot";
    fetch(baseURL)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setCoffee(data);
      });
  }, [  ]);

  

  return (
    <div className="menupage">
      <div className="container-menu">
        <div className="sidebar">
          <div className="menu-container">
            <h2>MENU</h2>
            <input type="radio" name="menu" id="coffee" onChange={onChangeHandleCoffe} />
            <label htmlFor="coffee">Coffee</label>
            <input type="radio" name="menu" id="dessert" />
            <label htmlFor="dessert">Dessert</label>
            <input type="radio" name="menu" id="soft-drink" />
            <label htmlFor="soft-drink">Soft Drink</label>
            <input type="radio" name="menu" id="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
        <div className="container-main">
          <header><h1>THIS MENU IS USING DUMMY</h1></header>
          <main>
            {coffee.slice(0, -3).map((datas) => (
              <div className="card" key={datas.id}>
                <div className="img-container">
                <img src={datas.image} alt="" />
                </div>
                <div className="desc-container">
                  <div className="title">
                  {datas.title}
                  </div>
                  <div className="desc">
                  {datas.description}
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Menupage;
