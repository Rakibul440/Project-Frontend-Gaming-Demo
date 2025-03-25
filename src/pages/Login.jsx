import React from 'react'
import './css/login.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Login() {

  const [isToggled, setIsToggled] = useState(false);
  const [text,setText] = useState("Login");
  const toggleText = (e)=>{
    setIsToggled(pre => !pre)
  }
  return (
    <div className='login'>
        {/* Heading Div */}
        <div className="head">
          <h1 className='heading'>My Account</h1>
          <p> <Link to={"/"}>Home</Link> / My Account</p>
        </div>
        {/* Form Div */}
        <div className='log-form'>

          <div className='first'>
            <h3>{isToggled ? 'LOGIN' : 'REGISTER'}</h3>
            <form>
              <label htmlFor='username'>{isToggled ? 'Username or email address' : "Username"} <span>*</span></label>
              <input type="text" id="username" name="username" required />
              {isToggled ? "" : <label htmlFor='email'>Email address<span>*</span></label>}
              {isToggled ? "" : <input type="text" id="email" name="email" required />}
              <label htmlFor='password'>Password <span>*</span></label>
              <input type="text" id="password" name="password" required />
              {isToggled ? "" : <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>}
              {isToggled ? <button className='sign'>Login</button> : <button className='sign'>Register</button>}
              
            </form>
          </div>

          <div className="second">
            <h3 className='head-text'>REGISTER</h3>
            <p className='text'>Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
            <button className='btn'  onClick={toggleText}> 
              {isToggled ? 'REGISTER' : 'LOGIN'}
            </button>
          </div>

        </div>

    </div>
  )
}
