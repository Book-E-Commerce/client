import React, { useEffect, useState } from 'react'
import Axios from '../../../api/axios'
import Moment from 'moment'
import './style.scss'

import {
  Area, AreaChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Swal from 'sweetalert2';

const data = [
  {
    name: '2019-12-22', uv: 7000, selling: 2400, 'books sold': 2400,
  },
  {
    name: '2019-12-22', uv: 3000, selling: 1398, 'books sold': 2210,
  },
  {
    name: '2019-12-22', uv: 2000, selling: 9800, 'books sold': 2290,
  },
  {
    name: '2019-12-22', uv: 2780, selling: 3908, 'books sold': 2000,
  },
  {
    name: '2019-12-22', uv: 1890, selling: 4800, 'books sold': 2181,
  },
  {
    name: '2019-12-22', uv: 2390, selling: 3800, 'books sold': 2500,
  },
  {
    name: '2019-12-22', uv: 3490, selling: 4300, 'books sold': 2100,
  }
];

function History (props) {

  const [chartData, setChartData] = useState([])
  const [historyData, setHistoryData] = useState([])
  const [inModalData, setInModalData] = useState([])

  async function fetchChartData () {
    Swal.showLoading()
    try{
      const { data } = await Axios({
        method: 'get',
        url: '/transactions/weekly-report',
        headers: {
          token: localStorage.getItem('token')
        }
      })
      let finalData = data.reverse()
      console.log(finalData)
      setChartData(finalData)
      Swal.close()
    }
    catch(err){
      console.log(err.response)
    }
  }

  const getDetails = (data) => {
    var temp = []
    for (let i = 0; i < data.cart.length; i++) {
      temp.push(data.cart[i])
    }
    setInModalData(temp)
  }

  async function fetchHistoryData () {
    try{
      const { data } = await Axios({
        method: 'get',
        url: '/transactions/all',
        headers: {
          token: localStorage.getItem('token')
        }
      })
      // console.log(data.transactions)

      data.transactions.forEach(data => {
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
      setHistoryData(data.transactions)
      // console.log(data.transactions)
    }
    catch(err){
      console.log(err.response)
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    fetchChartData()
    fetchHistoryData()
    topFunction()
  },[])

  return (
    <div>
      <div className="row justify-content-between">
        <p className="chart-container--title">Sales Chart</p>
        <p className="chart-container--date">{Moment(new Date()).format("dddd, MMMM Do YYYY")}</p>
      </div>
      <div className="chart-container">
      
      <ResponsiveContainer>
      <AreaChart width="100%" height={250} data={chartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="_id.Date" />
        <YAxis dataKey="count" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="books sold" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
      </ResponsiveContainer>

      </div>
      <p className="table-title">Sales Table</p>
      <div className="table-container">
        <table className="table table-hover table-borderless table-responsive">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Transaction ID</th>
              <th scope="col">Sold</th>
              <th scope="col">Total(Rp)</th>
              <th scope="col">Customer</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {
              historyData.length == 0
              ?
              <tr></tr>
              :
              historyData.map((data,i) => 
                <tr key={i}>
                  <th scope="row">{i+1}</th>
                  <td>{Moment(String(new Date(data.createdAt))).format("MMMM Do YYYY")}</td>
                  <td>{data._id}</td>
                  <td>{data.totalTransactions.qty}</td>
                  <td>{data.totalTransactions.price}</td>
                  <td>{data.userId.username}</td>
                  <td>
                    <button type="button" onClick={() => getDetails(data)} class="btn admin-details-btn" data-toggle="modal" data-target="#exampleModal">
                      Details
                    </button>
                  </td>
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Products List</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <table class="table">
                            <thead class="thead-dark">
                              <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Title</th>
                                <th scope="col">Quantity</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                inModalData.map((data, i) => {
                                  return (
                                    <tr key={i}>
                                      <th scope="row">{i+1}</th>
                                      <td>{data.bookId.title}</td>
                                      <td>{data.qty}</td>
                                    </tr>
                                  )
                                })
                              }
                            </tbody>
                          </table>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default History