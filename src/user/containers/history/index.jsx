import React, { useEffect, useState } from 'react'
import Axios from '../../../api/axios'
import Moment from 'moment'
import './style.scss'

export default function History (props) {

  const [historyData, setHistoryData] = useState([])

  async function fetchHistoryData () {
    try{
      const {data} = await Axios({
        method: 'get',
        url: '/transactions/user',
        headers: {
          token: localStorage.getItem('token')
        }
      })
      console.log(data)

      data.forEach(data => {
        let tempFinal = []
        let totalPrice = {
          qty: 0,
          price: 0
        }
        data.cart.forEach(data => {
          tempFinal.push({qty:data.qty, price:data.bookId.price})
        })
        tempFinal.forEach(data => {
          totalPrice.price += data.price
          totalPrice.qty += data.qty
        })
        data.totalTransactions = totalPrice
      })
      console.log(data)
      setHistoryData(data)
    }
    catch(err){
      console.log(err.response)
    }
  }

  useEffect(() => {
    fetchHistoryData()
  },[])

  return (
    <div>
      <p className="transaction-main-title">Transaction History</p>

      {
        historyData.length === 0
        ?
        <p>No Data</p>
        :
        historyData.map((data,i) => 
          <div className="transaction-container">
            <div className="row transaction-container--item">
              <div className="col-3">
                <p className="mb-0 transaction-container--title">Date</p>
                <p className="mb-0 transaction-container--text">{Moment(String(new Date(data.createdAt))).format("MMMM Do YYYY")}</p>
              </div>
              <div className="col-3">
                <p className="mb-0 transaction-container--title">Order ID</p>
                <p className="mb-0 transaction-container--text">{data._id}</p>
              </div>
              <div className="col-3">
                <p className="mb-0 transaction-container--title">Total payment</p>
                <p className="mb-0 transaction-container--text">Rp {data.totalTransactions.price}</p>
              </div>
              <div className="col-3">
                <p className="mb-0 transaction-container--title">Status</p>
                <p className="mb-0 transaction-container--text">Transaction Done</p>
              </div>
            </div>
          </div>
        )
      }
      

    </div>
  )
}