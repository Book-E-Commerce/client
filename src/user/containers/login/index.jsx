import React from 'react';
import './style.scss'
import { useHistory, Link } from "react-router-dom";

function Login() {
  const history = useHistory()
  const logins = () => {
    history.push('/home')
  }

  return (
    <div className="login-container">
      <div className="login-container--left">
        <img src="https://i.imgur.com/W2rzOrR.png"/>
      </div>
      <div className="login-container--right">
        <div className="login-container--right--loginbox">
          <div className="login-container--right--loginbox--header">
            <img src="https://i.imgur.com/BYsDyrY.png"/>
          </div>
          <div className="form-group login-container--right--loginbox--form">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">Please input verified email.</small>
          </div>
          <div style={{marginBottom: '25px'}} className="form-group login-container--right--loginbox--form">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="login-container--right--loginbox--login-btn-container">
            <button type="submit" onClick={logins} className="btn container--right--loginbox--login-btn">Login</button>
          </div>  
          <div className="login-container--right--loginbox--register-btn-container">
            <Link to ="/register">
              <button type="button" className="btn login-container--right--loginbox--register-btn">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
