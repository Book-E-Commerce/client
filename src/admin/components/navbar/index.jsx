import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.scss'
import logoImg from '../../../image/logo_only.png'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/actions/authenthication'

const Navbar = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const logouts = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    history.push('/login')
    dispatch(logout())
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-green sticky-top">
      <div className="navbar-brand d-flex" style={{cursor: 'pointer'}} onClick={() => history.push('/')}>
        <span><img src={logoImg} width="35" height="35" className="ml-md-5" alt="HackBook Logo"/></span>
        <p className="mb-0 main-title ml-2 mt-1">HackBook</p>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          
        </ul>
        <form className="form-inline my-2 my-lg-0" style={{ marginRight: 50 }}>
        <button onClick={logouts} style={{marginRight: '50px'}} type="button" className="btn btn-jalapeno"><i className="fas fa-sign-out-alt"></i></button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar