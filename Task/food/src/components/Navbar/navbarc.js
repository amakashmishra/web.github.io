
import React from "react";
import '../Navbar/navbar.css'
import LogoName from '../Home/assets/restaurant_24px.svg'

const Navbarc = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
      
        <span className="my_shop" onClick={() => setShow(true)}>
        <img src={LogoName} alt="logo" style={{paddingRight:"10px", color:"white"}} />
        Food's Restaurant
        </span>
       
      </div>
    </nav>
  );
};

export default Navbarc;
