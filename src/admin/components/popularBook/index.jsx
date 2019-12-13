import React from 'react'
import './style.scss'
import badge from '../../../image/best.svg'

export default function PopularBook (props) {

  return (
    <div className="card popular-card-modif">
      <ul className="list-group list-group-flush">
      <li className="list-group-item navigation-title">
          <div className="row justify-content-between">
            <p className="mb-0 pl-3">Best Seller</p>
            <div className="mr-2"><img src={badge} width="22" height="22" alt=""/></div>
          </div>
        </li>        
        <li className="list-group-item">
          <div className="row">
            <div className="col-8 popular-navigation-title">
              Harry Potter
            </div>
            <div className="col-4">
              100
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-8 popular-navigation-title">
              Telenovela
            </div>
            <div className="col-4">
              80
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-8 popular-navigation-title">
              Aku dan dia
            </div>
            <div className="col-4">
              50
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-8 popular-navigation-title">
              Disamping danau
            </div>
            <div className="col-4">
              49
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}