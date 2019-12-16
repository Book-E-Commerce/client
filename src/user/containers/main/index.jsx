import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import MainNavbar from '../../components/main-navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import './style.scss'

// import Sidebar from '../../components/sidebar'
import Default from '../default'
import Details from '../details'
import Cart from '../cart'
import DisplayByCategory from '../displaybycategory'

function Main() {
  return (
    <div>
      <MainNavbar />
      <div className="container main-container">
        <div className="row">
          <div className="col-12">
            <Switch>
              <Route exact path="/home/:id">
                <Details />
              </Route>
              <Route exact path="/home/cart">
                <Cart />
              </Route>
              <Route exact path="/home/categories">
                <DisplayByCategory />
              </Route>
              <Route exact path="/home">
                <Default />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
