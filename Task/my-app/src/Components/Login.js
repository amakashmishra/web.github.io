import React, { useState }  from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignImg from './Sign_img';
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [input, setInput] = useState({
        email:"",
        password:""
    });
    //console.log(input);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

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

        const getUserArr = localStorage.getItem('user');
        //console.log(getUserArr);

        const {email, password} = input;
        if(email === ""){
            toast.error('Email Filed is Requred',{
                position: "top-center",
            });
        }else if(!email.includes('@')){
            toast.error('Please Enter Valid Email Address ',{
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
            if(getUserArr && getUserArr.length) {
                const userdata = JSON.parse(getUserArr);
                //console.log(userdata);
                const userLogin = userdata.filter((ele, index) => {
                    return ele.email === email && ele.password === password
                });

                if(userLogin.length === 0){
                    toast.error('Invalid Details',{
                        position: "top-center",
                    });
                }else {
                    alert('Login Successfully');
                    toast.error('Login Successfully',{
                        position: "top-center",
                    });
                    localStorage.setItem("user_login", JSON.stringify(userLogin));
                    navigate("/details");
                }
            }

        }
    }

  return (
    <div>
         <div className="container mt-5">
                <section className='d-flex justify-content-between' style={{paddingLeft:"60px"}}>
                    <div className="left_data mt-5 p-5" style={{width:"100%"}}>
                        <h3 className='text-center col-lg-7' style={{paddingBottom:"30px"}}>Sign In</h3>
                        <Form>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" className='col-lg-7' onClick={addData} style={{background:"#7F38EC"}} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to='/'>SignUp</NavLink></span></p>
                    </div>
                   <SignImg />
                </section>
                <ToastContainer />
            </div>
    </div>
  )
}

export default Login