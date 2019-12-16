import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Axios from '../../../api/axios'
import './style.scss'

export default function Search (props) {

  const history = useHistory()
  const { keyword } = useParams()
  const [searchResultData, setSearchResultData] = useState([])

  async function getQueryData () {
    try{
      const { data } = await Axios({
        method: 'get',
        url: `/books/search?keyword=${ keyword }`
      })
      console.log(data)
      setSearchResultData(data)
    }
    catch(err){
      console.log(err.response)
    }
  }

  useEffect(() => {
    getQueryData()
  },[keyword])

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-3">
            <p className="category-list">Category List</p>
            <div className="ml-2 category-list--item">
              <p onClick={ () => history.push(`/home/search/business`) } className="category-list--item--text">Business & investing</p>
              <p onClick={ () => history.push(`/home/search/children`) } className="category-list--item--text">Children's books</p>
              <p onClick={ () => history.push(`/home/search/computer`) } className="category-list--item--text">Computer & technology</p>
              <p onClick={ () => history.push(`/home/search/cooking`) } className="category-list--item--text">Cooking & food</p>
              <p onClick={ () => history.push(`/home/search/fiction`) } className="category-list--item--text">Fiction</p>
              <p onClick={ () => history.push(`/home/search/health`) } className="category-list--item--text">Health, mind, & body</p>
              <p onClick={ () => history.push(`/home/search/history`) } className="category-list--item--text">History</p>
              <p onClick={ () => history.push(`/home/search/parenting`) } className="category-list--item--text">Parenting & families</p>
              <p onClick={ () => history.push(`/home/search/science`) } className="category-list--item--text">Science & math</p>
            </div>
          </div>
          <div className="col-9">
            <p className="search-result-text">Search Result "{keyword}"</p>
            <div className="row">
              {
                searchResultData.length === 0
                ?
                <p>No Data</p>
                :
                searchResultData.map((data,i) =>   
                  <div className="col-3" onClick={ () => history.push(`/home/products/${data._id}`) }>
                    <div className="book-item">
                      <img width="100%" src={data.image} alt=""/>
                      <div className="book-item--info">
                        <p className="mb-0 book-item--info--title text-truncate">{data.title}</p>
                        <p className="mb-0 book-item--info--author">{data.author[0]}</p>
                        <p className="mb-0 book-item--info--price">Rp {data.price}</p>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}