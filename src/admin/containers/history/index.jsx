import React, { useEffect, useState } from 'react'
import Axios from '../../../api/axios'
import './style.scss'

import {
  Area, AreaChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

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
  const [popularBook, setPopularBook] = useState([])
  const [historyData, setHistoryData] = useState([])

  // async function fetchChartData () {
  //   try{
  //     const { data } = await Axios({
  //       method: 'get',
  //       url: '/'
  //     })
  //     console.log(data)
  //     setChartData(data)
  //   }
  //   catch(err){
  //     console.log(err.response)
  //   }
  // }

  // async function fetchPopularBook () {
  //   try{
  //     const { data } = await Axios({
  //       method: 'get',
  //       url: '/'
  //     })
  //     console.log(data)
  //     setPopularBook(data)
  //   }
  //   catch(err){
  //     console.log(err.response)
  //   }
  // }

  // async function fetchHistoryData () {
  //   try{
  //     const { data } = await Axios({
  //       method: 'get',
  //       url: '/'
  //     })
  //     console.log(data)
  //     setHistoryData(data)
  //   }
  //   catch(err){
  //     console.log(err.response)
  //   }
  // }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    // fetchChartData()
    // fetchHistoryData()
    // fetchPopularBook()
    topFunction()
  },[])

  return (
    <div>
      <div className="row justify-content-between">
        <p className="chart-container--title">Sales Chart</p>
        <p className="chart-container--date">Wednesday, 20 December 2019</p>
      </div>
      <div className="chart-container">

      <AreaChart width={730} height={250} data={data}
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
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="selling" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="books sold" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>

      </div>
      <p className="table-title">Sales Table</p>
      <div className="table-container">
        <table className="table table-hover table-borderless table-responsive">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Transaction ID</th>
              <th scope="col">Books Sold</th>
              <th scope="col">Total(Rp)</th>
              <th scope="col">Customer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Tuesday, 20 June 2019</td>
              <td>alsdkladks1332llk1lk2l12k</td>
              <td>30</td>
              <td>80.000</td>
              <td>dipadana</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Tuesday, 20 June 2019</td>
              <td>alsdkladks1332llk1lk2l12k</td>
              <td>30</td>
              <td>80.000</td>
              <td>dipadana</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Tuesday, 20 June 2019</td>
              <td>alsdkladks1332llk1lk2l12k</td>
              <td>30</td>
              <td>80.000</td>
              <td>dipadana</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default History