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
import User from './user/containers/home'
import Admin from './admin/containers/home'
import Login from './user/containers/login'
import Register from './user/containers/register'
import Main from './user/containers/main'

function App() {
  const dispatch = useDispatch()

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
        <Route path="/admin">
          <Admin />
        </Route> 
        <Route path="/login">
          <Login />
        </Route> 
        <Route path="/register">
          <Register />
        </Route> 
        <Route path="/home">
          <Main />
        </Route>
        <Route path="/">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
