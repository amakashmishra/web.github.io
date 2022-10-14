
import React,{useState} from "react";
import Navbar from '../Navbar/navbar'
import '../Menu/menu.css'
import Data from '../Menu/data/feeds'
import Cards from "./card";
import Card from "../Card/Card";

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState([]);

  const handleClick = (item) => {
    setCart([...cart, {...item, quantity: 1}]);
  };

  const handleshow = (value) => {
    setShow(value)
  }

  return (
    <div>
      <Navbar count={cart.length} handleshow={handleshow}/>
    <section>
      {Data.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
    {
      show ? <Card cart={cart}/>: <Cards />
    }
    </div>
  );
};


export default Menu;


