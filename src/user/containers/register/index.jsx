import React from 'react';
import './style.scss'
import { useHistory, Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <div className="register-container--left">
        <img src="https://i.imgur.com/ZM6gg7V.png"/>
      </div>
      <div className="register-container--right">
        <div className="register-container--right--registerbox">
          <div className="register-container--right--registerbox--header">
            <img src="https://i.imgur.com/rIDjqeJ.png"/>
          </div>
          <div className="form-group register-container--right--registerbox--form">
            <label for="exampleInputEmail1">Full Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="form-group register-container--right--registerbox--form">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">Please input verified email.</small>
          </div>
          <div style={{marginBottom: '15px'}} className="form-group register-container--right--registerbox--form">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="register-container--right--registerbox--register-btn-container">
            <button type="submit" className="btn register-container--right--registerbox--register-btn">Register</button>
          </div>  
          <div className="register-container--right--registerbox--login-btn-container">
            <Link to ="/login">
              <button type="submit" className="btn register-container--right--registerbox--login-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
