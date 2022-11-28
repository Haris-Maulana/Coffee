import "./Menupage.scss";

import { useEffect, useRef, useState } from "react";

import Coffee from './MenuList/Coffee.js';
import Dessert from './MenuList/Dessert.js'
import Layout from "./MenuList/Layout.js";
import Softdrink from "./MenuList/Softdrink";
import Food from "./MenuList/Food";

function Menupage() {
  
  const layout = useRef(null)
  const coffee = useRef(null)
  const dessert = useRef(null)
  const softdrink = useRef(null)
  const food = useRef(null)

  const [menuChanger, setMenuChanger] = useState(0)

  const menuChangerLayout = () => {
    if(layout.current.id === 'layout'){
      setMenuChanger(prevState => 0);
    }
  }

  const menuChangerCoffee = () => {
    if(coffee.current.id === 'coffee'){
      setMenuChanger(prevState => 1);
    }
  }
  
  const menuChangerDessert = () => {
    if(dessert.current.id === 'dessert'){
      setMenuChanger(prevState => 2)
    }
  }

  const menuChangerSoftdrink = () => {
    if(softdrink.current.id === 'softdrink'){
      setMenuChanger(prevState => 3)
    }
  }

  const menuChangerFood = () => {
    if(food.current.id === 'food'){
      setMenuChanger(prevState => 4)
    }
  }

  return (
    <div className="menupage">
      <div className="container-menu">
        <div className="sidebar">
          <div className="menu-container">
            <h2>MENU</h2>
            <input type="radio" name="menu" ref={layout} id="layout" onClick={menuChangerLayout}/>
            <label htmlFor="layout" >All</label>
            <input type="radio" name="menu" ref={coffee} id="coffee" onClick={menuChangerCoffee}/>
            <label htmlFor="coffee" >Coffee</label>
            <input type="radio" name="menu" ref={dessert} id="dessert" onClick={menuChangerDessert} />
            <label htmlFor="dessert">Dessert</label>
            <input type="radio" name="menu" ref={softdrink} id="softdrink" onClick={menuChangerSoftdrink} />
            <label htmlFor="softdrink">Soft Drink</label>
            <input type="radio" name="menu" ref={food} id="food" onClick={menuChangerFood} />
            <label htmlFor="food">Food</label>
          </div>
        </div>
        <div className="container-main">
          {
            menuChanger === 0 && <Layout/>
          }
          {
          menuChanger === 1 && <Coffee/> 
          }
          {
            menuChanger === 2 && <Dessert/>
          }
          {
            menuChanger === 3 && <Softdrink/>
          }
          {
            menuChanger === 4 && <Food/>
          }
        </div>
      </div>
    </div>
  );
}

export default Menupage;
