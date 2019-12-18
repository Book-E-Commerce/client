import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import convertToRupiah from '../../helpers/convertToRupiah'
import Axios from '../../../api/axios'
import './style.scss'

export default function Search (props) {

  const history = useHistory()
  const { keyword } = useParams()
  const [searchResultData, setSearchResultData] = useState([])
  const [ loading, setLoading ] = useState(false)

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


  async function getQueryData () {
    setLoading(true)
    try{
      const { data } = await Axios({
        method: 'get',
        url: `/books/search?keyword=${ keyword }`
      })
      console.log(data)
      setSearchResultData(data)
      setLoading(false)
    }
    catch(err){
      console.log(err.response)
    }
  }

  useEffect(() => {
    topFunction()
    getQueryData()
  },[keyword])

  if (loading) return (
    <div className="loading-container">
      <div className="lds-circle d-flex justify-content-center align-items-center mx-auto"><div></div></div>
      <h6 style={{fontWeight: 'bold'}}>Loading . . . </h6>
    </div>
  )

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 order-2 order-md-1 col-md-3">
            <p className="category-list">Category List</p>
            <div className="ml-2 category-list--item">
              <p onClick={ () => history.push(`/home/search/Business`) } className="category-list--item--text">Business & investing</p>
              <p onClick={ () => history.push(`/home/search/Children`) } className="category-list--item--text">Children's books</p>
              <p onClick={ () => history.push(`/home/search/Computer`) } className="category-list--item--text">Computer & technology</p>
              <p onClick={ () => history.push(`/home/search/Cooking`) } className="category-list--item--text">Cooking & food</p>
              <p onClick={ () => history.push(`/home/search/Fiction`) } className="category-list--item--text">Fiction</p>
              <p onClick={ () => history.push(`/home/search/Health`) } className="category-list--item--text">Health, mind, & body</p>
              <p onClick={ () => history.push(`/home/search/History`) } className="category-list--item--text">History</p>
              <p onClick={ () => history.push(`/home/search/Parenting`) } className="category-list--item--text">Parenting & families</p>
              <p onClick={ () => history.push(`/home/search/Science`) } className="category-list--item--text">Science & math</p>
            </div>
          </div>
          <div className="col-12 order-1 order-md-2 col-md-9">
            <p className="search-result-text">Search Result "{keyword}"</p>
            
              {
                searchResultData.length === 0
                ?
                  <p className="no-data">No data found</p>
                :
                <div className="row">
                  {
                  searchResultData.map((data,i) =>   
                    <div className="col-6 col-md-3" onClick={ () => history.push(`/home/products/${data._id}`) }>
                      <div className="book-item">
                        <img width="100%" src={data.image} alt=""/>
                        <div className="book-item--info">
                          <p className="mb-0 book-item--info--title text-truncate">{data.title}</p>
                          <p className="text-truncate mb-0 book-item--info--author">{data.author[0]}</p>
                          <p className="mb-0 book-item--info--price">{convertToRupiah(data.price)}</p>
                        </div>
                      </div>
                    </div>
                  )
                  }
                </div>
              }
            
          </div>
        </div>
      </div>
    </div>
  )
}