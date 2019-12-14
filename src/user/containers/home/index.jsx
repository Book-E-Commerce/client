import React from 'react';
import './style.scss'
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar'

function Home() {
  return(
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-container--header">
          <h1>Be ready whenever, wherever</h1>
          <h1>your salary strikes.</h1>
        </div>
        <div className="home-container--body">
          <Link to ="/login">
            <button type="button" className="btn btn-outline-light home-container--body--btns">Login</button>
          </Link>
          <Link to ="/register">
            <button type="button" className="btn btn-outline-light home-container--body--btns">Register</button>
          </Link>
        </div>
        <div className="home-container--footer">
          <img id="footer-img" src="../../../../footer-img.png" />
        </div>
      </div>
    </>
  )
}

export default Home

