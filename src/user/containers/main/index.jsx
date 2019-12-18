import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import MainNavbar from '../../components/main-navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import './style.scss'

import Default from '../default'
import Details from '../details'
import Cart from '../cart'
import DisplayByCategory from '../displaybycategory'
import History from '../history'
import Search from '../search'

function Main() {
  const [ loading, setLoading ] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, []);

  if (loading) return (
    <div className="loading-container">
      <div className="lds-circle d-flex justify-content-center align-items-center mx-auto"><div></div></div>
      <h6 style={{fontWeight: 'bold'}}>Loading . . . </h6>
    </div>
  )

  return (
    <div className="all-div">
      <MainNavbar />
      <div className="container main-container">
        <div className="row no-gutters">
          <div className="col-12">
            <Switch>
              <Route path="/home/products/:id">
                <Details />
              </Route>
              <Route exact path="/home/search/:keyword">
                <Search />
              </Route>
              <Route exact path="/home/categories">
                <DisplayByCategory />
              </Route>

              <Route path="/home/cart">
                <PrivateRouteCart />
              </Route>
              <Route exact path="/home/history">
                <PrivateRouteHistory />
              </Route>
              
              <Route path="/home">
                <Default />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

function PrivateRouteCart (props) {
  const history = useHistory()
  if(localStorage.getItem('token') && localStorage.getItem('role') === 'customer'){
    return <Cart />
  }
  else{
    history.push('/home')
    return <Default />
  }
}

function PrivateRouteHistory (props) {
  const history = useHistory()
  if(localStorage.getItem('token') && localStorage.getItem('role') === 'customer'){
    return <History />
  }
  else{
    history.push('/home')
    return <Default />
  }
}

export default Main;
