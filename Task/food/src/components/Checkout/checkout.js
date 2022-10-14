import React from 'react'
import '../Home/home.css'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/navbar'

const Checkout = () => {
  return (
    <>
        <Navbar />
        <div className="row">
            <div className="col">
                <div class="content">
                    <h1 style={{paddingLeft: "180px", paddingBottom: "30px"}}>CheckOut <span className='spam1'></span></h1>
                    <h1 style={{paddingLeft: "10px"}}>Thanks You For Your Order</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout