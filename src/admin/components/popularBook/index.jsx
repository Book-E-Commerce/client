import React, { useState, useEffect } from 'react'
import Axios from '../../../api/axios'
import './style.scss'
import badge from '../../../image/best.svg'

export default function PopularBook (props) {

  const [popularBook, setPopularBook] = useState([])

  async function fetchPopularBook () {
    try{
      const { data } = await Axios({
        method: 'get',
        url: '/transactions/best-selling',
        headers: {
          token: localStorage.getItem('token')
        }
      })
      let temp = []
      for (let i = 0; i < 10; i++) {
        temp.push(data[i])
      }
      setPopularBook(temp)
    }
    catch(err){
      console.log(err.response)
    }
  }

  useEffect(() => {
    fetchPopularBook()
  },[])

  return (
    <div className="card popular-card-modif">
      <ul className="list-group list-group-flush">
        <li className="list-group-item navigation-title">
          <div className="row justify-content-between">
            <p className="mb-0 pl-3">Best Seller</p>
            <div className="mr-2"><img src={badge} width="22" height="22" alt=""/></div>
          </div>
        </li>
        {
          popularBook.map((data,i) => 
            <li className="list-group-item">
              <div className="row">
                <div className="col-10 popular-navigation-title">
                  {data.title.title}
                </div>
                <div className="col-2">
                  {data.qty}
                </div>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  )
}