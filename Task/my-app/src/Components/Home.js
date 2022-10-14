import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignImg from './Sign_img';
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [input, setInput] = useState({
        name:"",
        email:"",
        date:"",
        password:""
    });
    //console.log(input);
    const [data, setData] = useState([]);

    const getData = (e) => {
       // console.log(e.target.value);
       const {value, name} = e.target;
       //console.log(value, name);

       setInput(() => {
        return {
            ...input,
            [name]:value
        }
       })
    }

    const addData = (e) => {
        e.preventDefault();
        //console.log(input);
        const {name, email, date, password} = input;

        if(name === "") {
            toast.error('Name Field is Requred!',{
                position: "top-center",
            });
        }else if(email === ""){
            toast.error('Email Field is Requred!',{
                position: "top-center",
            });
        }else if(!email.includes('@')){
            toast.error('Please Enter Valid Email Address',{
                position: "top-center",
            });
        }else if(date === ""){
            toast.error('Date Filed is Requred',{
                position: "top-center",
            });
        }else if(password === ""){
            toast.error('Password Filed is Requred',{
                position: "top-center",
            });
        }else if(password.length < 5){
            toast.error('Password Shoude Be 5 Character',{
                position: "top-center",
            });
        }else {
            alert('Register Successfuly');
            toast.error('Register Successfuly',{
                position: "top-center",
            });
            console.log('log In');
            localStorage.setItem("user", JSON.stringify([...data, input]));
        }
    }

    return (
        <div>
            <div className="container mt-5">
                <section className='d-flex justify-content-between' style={{paddingLeft:"60px"}}>
                    <div className="left_data mt-5 p-5" style={{width:"100%"}}>
                        <h3 className='text-center col-lg-7' style={{paddingBottom:"30px"}}>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
                                <Form.Control type="text" name='name' onChange={getData} placeholder="Enter Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
                                <Form.Control type="date" name='date' onChange={getData}/>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-7' onClick={addData} style={{background:"#7F38EC"}} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to='/login'>SignIn</NavLink></span></p>
                    </div>
                   <SignImg />
                </section>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Home