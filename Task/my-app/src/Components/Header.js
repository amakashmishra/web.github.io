import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '@mui/material/Menu';
import {useDispatch, useSelector} from 'react-redux';
import { Table } from '@mui/material';
import {NavLink} from 'react-router-dom';
import { DLT } from '../redux/actions/actions';

const Header = () => {

  const [price, setPrice] = useState(0);

  const getData = useSelector((state) => state.rootReducer.cart.carts);
  //console.log(getData);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  }

  const total = () => {
    let price = 0;
    getData.map((ele, key) => {
        price = ele.price * ele.qnty + price;
    })
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total])

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "70px" }}>
        <Container>
          <Navbar.Brand href="#home">User Registration</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ paddingLeft: "30px" }}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Badge badgeContent={getData.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <i class="fa-sharp fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
          </Badge>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >

          {
            getData.length ? 
            <div className='card_details' style={{width:"24rem",padding:10}}>
              <Table>
                <thead>
                  <tr>
                    <th style={{paddingBottom:"25px", paddingLeft:"15px"}}>Photo</th>
                    <th style={{paddingBottom:"25px"}}>Restaurant Name</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    getData.map((ele) => {
                      return (
                        <>
                          <tr>
                            <td style={{paddingTop:"9px"}}>
                              <NavLink to={`/carddetails/${ele.id}`} onClick={handleClose}>
                                <img src={ele.imgdata} style={{width:"6rem",height:"6rem", paddingLeft:"10px"}} alt="" />
                              </NavLink>
                            <hr/>
                            </td>
                            
                            <td>
                              <p>{ele.rname}</p>
                              <p>Price : ₹{ele.price}</p>
                              <p>Quantity : {ele.qnty}</p>
                              <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={() => dlt(ele.id)}>
                                <i className='fas fa-trash smalltrash' ></i>
                              </p>
                              <hr/>
                            </td>
                            <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer", paddingRight:"0px"}} onClick={() => dlt(ele.id)}>
                              <i className='fas fa-trash largetrash' style={{paddingRight:"30px", paddingBottom:"40px"}}></i>
                             </td>
                          </tr>
                        </>
                      )
                    })
                  }
                  <p className='text-center'> Total : ₹ {price}</p>
                </tbody>
                
              </Table>
            </div> 
            :
            <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10, position:"relative"}}>
            <i className='fas fa-close smallclose' style={{position:"absolute", top:2, right:20, fontSize:23, cursor:"pointer"}}></i>
            <p style={{fontSize:23}}>Your Carts is Empty</p>
            <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem", padding:10}}/>
          </div>
          }
        </Menu>

      </Navbar>
    </div>
  )
}

export default Header