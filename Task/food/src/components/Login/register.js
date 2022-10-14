
import React, { useState } from 'react'
import './register.css'
import {Link, useNavigate} from 'react-router-dom'

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const [register, setRegister] =useState({
    username: "",
    password: "",
    conpassword: ""
  });

  let result = ''

  const [record, setRecord] =useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setRegister({...register, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {...register, id : new Date().getTime().toString()}
    console.log(record);
    setRecord([...record, newRecord])
    console.log(record);

    setRegister({username:"", password:"", conpassword:""})
  }


  return (
    
    <div className="center">
      <h1>Registration</h1>
      <form id='' onSubmit={handleSubmit}>
        <div className="txt_field">
          <input type="text" required name='username' value={register.username} onChange={handleInput}/>
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required name='password' value={register.password} onChange={handleInput}/>
          <span></span>
          <label>Create Password</label>
        </div>
        <div className="txt_field">
          <input type="password" required name='conpassword' value={register.conpassword} onChange={handleInput}/>
          <span></span>
          <label>Confirm Password</label>
        </div>
        <input type="submit" value="Register" />
        {isSubmitted ? <div>{navigate('/home')}</div> :result }
        <div className="signup_link">
          Not a member? <Link to="/login">SignIn</Link>
        </div>
      </form>
      
      <div>
        {
          /*
          record.map((curEle) => {
            return(
              
              <div>
                <h4>Username And Password</h4>
                <p>UserName: {curEle.username}</p>
                <p>Password: {curEle.password}</p>
              </div>
            )
          })
          */
        }
      </div>
    </div>
  )
}

export default Register


