import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './style.scss'
import logoImg from '../../../image/logo_only.png'

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-green sticky-top">
      <a className="navbar-brand d-flex" href="/">
        <span><img src={logoImg} width="35" height="35" className="ml-md-5" alt="HackBook Logo"/></span>
        <p className="mb-0 main-title ml-2 mt-1">HackBook</p>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          
        </ul>
        <form className="form-inline my-2 my-lg-0" style={{ marginRight: 50 }}>
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Logout</button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar