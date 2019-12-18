import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.scss'
import compass from '../../../image/cardinal-point.svg'

export default function Navigation (props) {

  const history = useHistory()

  return (
    <div className="card card-modif">
      <ul className="list-group list-group-flush">
        <li className="list-group-item navigation-title">
          <div className="row justify-content-between">
            <p className="mb-0 pl-3">Navigation Menu</p>
            <div className="mr-2"><img src={compass} style={{width: '22px', height: '22px', marginTop: 0}} width="22" height="22" alt=""/></div>
          </div>
        </li>
        <li onClick={ () => history.push('/admin/history') } className={ history.location.pathname === '/admin/history' ? `list-group-item navigation-active` : `list-group-item navigation-text`}>Transaction History</li>
        <li onClick={ () => history.push('/admin/listbook') } className={ history.location.pathname === '/admin/listbook' ? `list-group-item navigation-active` : `list-group-item navigation-text`}>List Book</li>
        <li onClick={ () => history.push('/admin/addbook') } className={ history.location.pathname === '/admin/addbook' ? `list-group-item navigation-active` : `list-group-item navigation-text`}>Add Book</li>
      </ul>
    </div>
  )
}