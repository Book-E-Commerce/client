import React from 'react'
import './style.scss'

export default function History (props) {
  return (
    <div>
      <p className="transaction-main-title">Transaction History</p>
      <div className="transaction-container">
        <div className="row transaction-container--item">
          <div className="col-3">
            <p className="mb-0 transaction-container--title">Date</p>
            <p className="mb-0 transaction-container--text">January, 15th 2019</p>
          </div>
          <div className="col-3">
            <p className="mb-0 transaction-container--title">Order ID</p>
            <p className="mb-0 transaction-container--text">aja9qnknndna299128nnd</p>
          </div>
          <div className="col-3">
            <p className="mb-0 transaction-container--title">Total payment</p>
            <p className="mb-0 transaction-container--text">Rp 10.000</p>
          </div>
          <div className="col-3">
            <p className="mb-0 transaction-container--title">Status</p>
            <p className="mb-0 transaction-container--text">Transaction Done</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}