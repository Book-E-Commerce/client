import React, { useEffect, useState } from 'react'
import Axios from '../../../api/axios'
import Moment from 'moment'
import './style.scss'
import convertToRupiah from '../../helpers/convertToRupiah'

export default function History (props) {

  const [historyData, setHistoryData] = useState([])
  const [ loading, setLoading ] = useState(false)

  async function fetchHistoryData () {
    setLoading(true)
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
        data.totalTransactionsToDisplay = convertToRupiah(totalPrice.price)
      })
      console.log(data)
      setHistoryData(data)
      setLoading(false)
    }
    catch(err){
      console.log(err.response)
    }
  }

  useEffect(() => {
    fetchHistoryData()
  },[])

  if (loading) return (
    <div className="loading-container">
      <div className="lds-circle d-flex justify-content-center align-items-center mx-auto"><div></div></div>
      <h6 style={{fontWeight: 'bold'}}>Loading . . . </h6>
    </div>
  )

  return (
    <div className="container ">
      <p className="transaction-main-title">Transaction History</p> 

      {
        historyData.length === 0
        ?
        <p className="no-data">You have 0 transaction</p>
        :
        historyData.map((data,i) => 
          <div className="transaction-container">
            <div className="row transaction-container--item">
              <div className="col-md-3 col-6 mt-md-0 mt-2">
                <p className="mb-0 transaction-container--title">Date</p>
                <p className="mb-0 transaction-container--text">{Moment(String(new Date(data.createdAt))).format("MMMM Do YYYY")}</p>
              </div>
              <div className="col-md-3 col-6 mt-md-0 mt-2">
                <p className="mb-0 transaction-container--title">Order ID</p>
                <p className="mb-0 transaction-container--text text-truncate">{data._id}</p>
              </div>
              <div className="col-md-3 col-6 mt-md-0 mt-2">
                <p className="mb-0 transaction-container--title">Total payment</p>
                <p className="mb-0 transaction-container--text">{data.totalTransactionsToDisplay}</p>
              </div>
              <div className="col-md-3 col-6 mt-md-0 mt-2">
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