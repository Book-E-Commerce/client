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

function App() {
  const dispatch = useDispatch()
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  })

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
    <animated.div style={fade}>
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
          <Route exact path="/">
            <User />
          </Route>
        </Switch>
      </Router>
    </animated.div>
  );
}

export default App;
