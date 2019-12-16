import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './style.scss'
import { useHistory, Link } from "react-router-dom";
import { login } from '../../../store/actions/authenthication'
import axios from '../../../api/axios'
import Swal from 'sweetalert2'

function Login() {
  const history = useHistory()
  const isLogin = useSelector(state => state.LoggedUser.isLogin)
  const dispatch = useDispatch()
  const [ identity, setIdentity ] = useState('')
  const [ password, setPassword ] = useState('')

  useEffect(() => {
    if (isLogin) {
      history.push('/home')
    }
  }, [])

  const logins = () => {
    axios.post('/users/login', {
      identity, password
    })
    .then(({data}) => {
      dispatch(login())
      Swal.fire(
        'Logged In',
        'Success',
        'success'
      )
      setIdentity('')
      setPassword('')
      history.push('/home')
      localStorage.setItem('token', data.token)
    })
  }

  return (
    <div className="login-container">
      <div className="login-container--left">
        <img src="https://i.imgur.com/W2rzOrR.png" alt="LoginImage"/>
      </div>
      <div className="login-container--right">
        <div className="login-container--right--loginbox">
          <div className="login-container--right--loginbox--header">
            <img src="https://i.imgur.com/BYsDyrY.png" alt="Icon"/>
          </div>
          <div className="form-group login-container--right--loginbox--form">
            <label for="exampleInputEmail1">Email address</label>
            <input value={identity} onChange={event => setIdentity(event.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">Please input verified email.</small>
          </div>
          <div style={{marginBottom: '25px'}} className="form-group login-container--right--loginbox--form">
            <label for="exampleInputPassword1">Password</label>
            <input value={password} onChange={event => setPassword(event.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="login-container--right--loginbox--login-btn-container">
            <button type="submit" onClick={logins} className="btn login-container--right--loginbox--login-btn">Login</button>
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
