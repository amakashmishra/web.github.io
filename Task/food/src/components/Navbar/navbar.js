
import React from "react";
import '../Navbar/navbar.css'
import LogoName from '../Home/assets/restaurant_24px.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav_box">
      
        <span className="my_shop" >
        <img src={LogoName} alt="logo" style={{paddingRight:"10px", color:"white"}} />
        Food's Restaurant
        </span>
       <div className="cart" onClick={() => props.handleshow(true)}>
          <span>
          <Link to="/card"><ShoppingCartIcon style={{color:"white", fontSize:"30px"}} onClick={() => props.handleshow(false)}/></Link>
          </span>
          <span>{props.count}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
