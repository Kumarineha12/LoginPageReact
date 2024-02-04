import React, { useState } from 'react';
import './LoginPage.css'
import user_icon from '../Assets/person.png';
import user_email from '../Assets/email.png';
import user_pass from '../Assets/password.png'
const LoginPage = () => {
  const[action,setAction]=useState("Sign Up");
  return (
    <div className='container'>
     <div className="header">
      <div className="text">{action}</div>
        <div className="underline"></div> 
     </div>
      <div className="inputs">
       {action==="Login"?<div></div>: <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Full  Name' required/>
        </div>}
        <div className="input">
          <img src={user_email} alt="" />
          <input type="email" placeholder='Email Address' />
        </div>
        <div className="input">
          <img src={user_pass} alt="" />
          <input type="password" placeholder='Password'/>
        </div>
      </div>
     
      {action==="Login"?<div></div>:<div className="sumbit-container">
        <div className= "submit" onClick={()=>alert("Sign Up successfully")}>Sign Up</div> 
      </div>}
       {action==="Login"?<div></div>:<div className="sign-pass">Already have an account?
       <div className= "account" onClick={()=>{setAction("Login")}}>Login</div>
      </div>}
     
      {action==="Sign Up"?<div></div>:<div className="find-pass">Forgot Password?<span>Reset Password</span></div>}
      {action==="Sign Up"?<div></div>:<div className="sumbit-container">
        <div className= "submit"  onClick={()=>alert("Login successfully")}>Login</div> 
      </div>}
      {action==="Sign Up"?<div></div>:<div className="sign-pass">Don't have account? Create Account<div className="account" onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
         </div>}
    </div>
  )
}
export default LoginPage;
