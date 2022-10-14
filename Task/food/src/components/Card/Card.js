
import React, {useState, useEffect } from 'react'
import './card.css'
import {Link} from 'react-router-dom'

const Card = ({cart}) => {
  const [ucart, usetCart] = useState([]);


  useEffect(() => {
    usetCart(cart)
  }, [cart])

  console.log(cart);
  return (
    <div>
      <article>
      {
         ucart.map((cartItem, cartIndex) => {
          return (
            <div>
            <div className="cart_box1">
              <div className="cart_img1">
                <img src={cartItem.image} alt="" />
                <p>{cartItem.name}</p>
              </div>
              <div>
              <button className='button2' 
              onClick={() => {
                const _cart1 = ucart.map((item, index) => {
                  return cartIndex === index ? {...item, quantity : item.quantity - 1} : item
                })
                usetCart(_cart1)
              }} 
              >-</button>
              <p>{cartItem.quantity}</p>
              <button className='button3' onClick={() => {
                const _cart = ucart.map((item, index) => {
                  return cartIndex === index ? {...item, quantity : item.quantity + 1} : item
                })
                usetCart(_cart)
              }}>+</button>
              </div>
              <div>
                <span>Price : {cartItem.price * cartItem.quantity}Rs</span>
              </div>
            </div> 
                
            </div>


          )
         })
      }

              <div className="total">
                <span>Total Price of your Cart</span>
                <span>Rs :  {
                   ucart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }</span>
              </div>
              <div>
                <span className="check"><Link to="/checkout" style={{textDecoration:"none", color:"white"}}>Continue And CheckOut </Link></span>
                <span style={{paddingBottom: "50px"}}>.</span>
              </div>
      
    </article>
    </div>
  )
}

export default Card

