import React from 'react'
import '../Home/home.css'
import {Link} from 'react-router-dom'
import Navbarc from '../Navbar/navbarc'

const home = () => {
  return (
    <>
        <Navbarc />
        <div className="row">
            <div className="col">
                <div class="content">
                    <h1 style={{ fontSize:"60px", paddingLeft:"50px"}}>Welcome to Food's</h1>
                    <p style={{ fontSize:"50px", paddingLeft:"210px"}}> Kitchen</p>
                    <span style={{ paddingLeft:"210px"}}><button className='button1' type="button">{<Link to="/menu" style={{textDecoration:"none", color:"white", paddingLeft:"30px"}}>GO TO MENU</Link>}</button></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default home