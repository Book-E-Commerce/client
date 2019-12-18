import React, { useEffect } from 'react';
import store from './store/index'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { login, logout } from './store/actions/authenthication'
import { useSpring, animated } from 'react-spring'
import User from './user/containers/home'
import Admin from './admin/containers/home'
import Login from './user/containers/login'
import Register from './user/containers/register'
import Main from './user/containers/main'
import { useHistory } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  // const fade = useSpring({
  //   from: {
  //     opacity: 0.5
  //   },
  //   to: {
  //     opacity: 1
  //   }
  // })

  useEffect(() => {
    checktoken()
  })

  const checktoken = () => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(login())
    } else {
      dispatch(logout())
    }
  }

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route> 
        <Route path="/admin">
          <PrivateRouteAdmin />
        </Route> 
        <Route path="/register">
          <Register />
        </Route> 
        <Route path="/home">
          <PrivateRouteCustomer />
        </Route>
        <Route path="/">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

function PrivateRouteAdmin (props) {
  const history = useHistory()
  if(localStorage.getItem('token') && localStorage.getItem('role') === 'admin'){
    return <Admin />
  }
  else{
    history.push('/home')
    return <Main />
  }
}

function PrivateRouteCustomer (props) {
  const history = useHistory()
  if(localStorage.getItem('role') !== 'admin'){
    return <Main />
  }
  else{
    history.push('/admin/history')
    return <Admin />
  }
}

export default App;
