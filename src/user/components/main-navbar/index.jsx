import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './style.scss'
import { logout } from '../../../store/actions/authenthication'
import { useHistory, Link } from "react-router-dom";
import logoImg from '../../../image/logo_only.png'

function MainNavbar() {
  const history = useHistory()
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.LoggedUser.isLogin)

  const [keyword, setKeyword] = useState('')

  const logouts = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    history.push('/login')
    dispatch(logout())
  }

  function handleSubmit (e) {
    e.preventDefault()
    history.push(`/home/search/${ keyword }`)
    setKeyword('')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-green sticky-top">
      <Link className="navbar-brand d-flex" to="/home">
        <span><img src={logoImg} width="35" height="35" className="ml-md-5" alt="HackBook Logo"/></span>
        <p className="mb-0 main-title ml-2 mt-1">HackBook</p>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={ (e) => handleSubmit(e) }>
          <input value={ keyword } onChange={ (e) => setKeyword(e.target.value) } className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button style={{fontWeight: 'bold'}} className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          {
            isLogin ? (
              <>
                <div className="dropdown main-navbar--menu--dropdown">
                  <button className="btn dropdown-toggle btn-outline-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-user-md"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button type="button" onClick={() => history.push('/home/cart')} className="dropdown-item"><i style={{marginRight: '4px'}} className="fas fa-shopping-cart"></i> Cart</button>
                    <button type="button" onClick={() => history.push('/home/history')} className="dropdown-item"><i style={{marginRight: '4px'}} className="far fa-newspaper"></i> Transaction</button>
                  </div>
                </div>
                <button onClick={logouts} style={{marginRight: '50px'}} type="button" className="btn btn-jalapeno"><i className="fas fa-sign-out-alt"></i></button>
              </>
            ) : 
            (
              <>
                <button onClick={() => history.push('/login')} type="button" class="main-navbar--menu--login btn btn-outline-light"><i style={{marginRight: '5px'}} className="fas fa-sign-in-alt"></i> Login</button>
                <button onClick={() => history.push('/register')} style={{marginRight: '50px'}} type="button" class="main-navbar--menu--register btn btn-outline-light"><i style={{marginRight: '5px'}} className="fas fa-user-plus"></i> Register</button>
              </>
            )
          }
        </form>
      </div>
    </nav>
    // <div>
    //   <nav className="navbar main-navbar">
    //   <Link to="/home">
    //     <img id="main-navbar-logo" src="https://i.imgur.com/kudvMWt.png" alt="HackBookLogo" />
    //   </Link>
    //     <div className="main-navbar--menu">
    //       <form className="form-inline" onSubmit={ (e) => handleSubmit(e) } >
    //         <input value={ keyword } onChange={ (e) => setKeyword(e.target.value) } className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    //         <button style={{fontWeight: 'bold'}} className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    //       </form>
    //       {
    //         isLogin ? (
    //           <>
    //             <div className="dropdown main-navbar--menu--dropdown">
    //               <button className="btn dropdown-toggle btn-outline-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                 <i className="fas fa-user-md"></i>
    //               </button>
    //               <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //                 <button type="button" onClick={() => history.push('/home/cart')} className="dropdown-item"><i style={{marginRight: '4px'}} className="fas fa-shopping-cart"></i> Cart</button>
    //                 <a onClick={() => history.push('/home/history')} className="dropdown-item"><i style={{marginRight: '4px'}} className="far fa-newspaper"></i> Transaction</a>
    //               </div>
    //             </div>
    //             <button onClick={logouts} style={{marginRight: '50px'}} type="button" className="btn btn-jalapeno"><i className="fas fa-sign-out-alt"></i></button>
    //           </>
    //         ) : 
    //         (
    //           <>
    //             <button onClick={() => history.push('/login')} type="button" class="main-navbar--menu--login btn btn-outline-light"><i style={{marginRight: '5px'}} className="fas fa-sign-in-alt"></i> Login</button>
    //             <button onClick={() => history.push('/register')} style={{marginRight: '50px'}} type="button" class="main-navbar--menu--register btn btn-outline-light"><i style={{marginRight: '5px'}} className="fas fa-user-plus"></i> Register</button>
    //           </>
    //         )
    //       }
    //     </div>
    //   </nav>
    // </div>
  )
}

export default MainNavbar;
