import React from 'react';
import './style.scss'
import { useHistory, Link } from "react-router-dom";

function MainNavbar() {
  const history = useHistory()
  const logout = () => {
    history.push('/')
  }

  const toCart = () => {
    history.push('/home/cart')
  }

  return (
    <div>
      <nav className="navbar main-navbar">
      <Link to="/home">
        <img id="main-navbar-logo" src="https://i.imgur.com/kudvMWt.png" alt="HackBookLogo" />
      </Link>
        <div className="main-navbar--menu">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button style={{fontWeight: 'bold'}} className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
          <div className="dropdown main-navbar--menu--dropdown">
            <button className="btn dropdown-toggle btn-outline-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user-md"></i>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a onClick={toCart} className="dropdown-item" href="#"><i style={{marginRight: '4px'}} className="fas fa-shopping-cart"></i> Cart</a>
              <a className="dropdown-item" href="#"><i style={{marginRight: '4px'}} className="far fa-newspaper"></i> Transaction</a>
            </div>
          </div>
          <button onClick={logout} style={{marginRight: '70px'}} type="button" className="btn btn-outline-light"><i className="fas fa-power-off"></i></button>
        </div>
      </nav>
    </div>
  )
}

export default MainNavbar;
