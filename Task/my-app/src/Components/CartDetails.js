import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { DLT, ADD, REMOVE } from '../redux/actions/actions';

const CartDetails = () => {

  const [data, setData] = useState([]);
  //console.log(data);

  const { id } = useParams();
  //console.log(id);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getData = useSelector((state) => state.rootReducer.cart.carts);
  //console.log(getData);

  const compare = () => {
    let comoaredData = getData.filter((ele) => {
      return ele.id == id;
    })
    setData(comoaredData);
  }

  //
  const send = (element) => {
    //console.log(element);
    dispatch(ADD(element));
  }

  const dlt = (id) => {
    dispatch(DLT(id));
    navigate('/card');
  }

  // remove one
const remove = (item)=>{
  dispatch(REMOVE(item))
}

  useEffect(() => {
    compare();
  }, [id])

  return (
    <div>
      <div className="container" style={{ paddingTop: "100px" }}>
        <h2 className='text-center'>Iteams Details Page</h2>

        <section className='container' style={{ paddingTop: "25px" }}>
          <div className="iteamsdetails">
            {
              data.map((ele) => {
                return (
                  <>
                    <div className="items_img">
                      <img src={ele.imgdata} alt="" style={{ paddingLeft: "35px" }} />
                    </div>
                    <div className="details">
                      <Table>
                        <tr>
                          <td>
                            <p> <strong>Restaurant :</strong> <span style={{ paddingLeft: "5px" }}>{ele.rname} </span></p>
                            <p> <strong>Price :</strong> <span style={{ paddingLeft: "5px" }}>₹{ele.price}</span></p>
                            <p> <strong>Dishes :</strong> <span style={{ paddingLeft: "5px" }}>{ele.address}</span></p>
                            <p> <strong>Total :</strong> <span style={{ paddingLeft: "5px" }}>₹{ele.price * ele.qnty} </span></p>
                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                              <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                              <span style={{fontSize:20}}>{ele.qnty}</span>
                              <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>
                            </div>
                          </td>

                          <td>
                            <p> <strong style={{ paddingRight: "5px" }}>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★</span></p>
                            <p><strong>Order Review :</strong> <span style={{ paddingLeft: "5px" }}>{ele.somedata}</span></p>
                            <p><strong>Remove :</strong> <span ><i className='fas fa-trash' onClick={() => dlt(ele.id)} style={{ color: "red", fontSize: 20, cursor: "pointer", paddingLeft: "5px" }}></i>	</span></p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </>
                )
              })
            }
          
      </div>
    </section>
      </div >
    </div >
  )
}

export default CartDetails