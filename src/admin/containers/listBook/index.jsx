import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from '../../../api/axios'
import './style.scss'
import Swal from 'sweetalert2'

function ListBook (props) {

  const history = useHistory()
  const [bookData, setBookData] = useState([])

  async function fetchBookData () {
    Swal.showLoading()
    try{
      const { data } = await Axios({
        method: 'get',
        url: '/books/find-all'
      })
      console.log(data)
      setBookData(data)
      Swal.close()
    }
    catch(err){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
      console.log(err.response)
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  const searchByKeyword = (e) => {
    try {
      const filteredByKeyword = bookData.filter(function(book) {
        const testCase = new RegExp(e.target.value, 'i')
        const regexTest = testCase.test(book.title)
        return regexTest
      })
      if (e.target.value === '') {  
        fetchBookData()
      }
        setBookData(filteredByKeyword)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchBookData()
    topFunction()
  },[])

  return (
    <div>
      <div className="column justify-content-between">
      <div className="row justify-content-between">
        <p className="list-book-tittle ml-3 mb-0">List Book</p>
        <p className="chart-container--date mr-3 mb-0">Wednesday, 20 December 2019</p>
      </div>
      <center><input onChange={e => searchByKeyword(e)} className="form-control mr-sm-2 search-in-admin" type="search" placeholder="Search books" aria-label="Search" /> </center>
        {/* <p className="lsit-book-title">Sales Chart</p> */}
      </div>
      <div className="list-book-table-container">
        <table className="table table-hover table-borderless">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Title</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price (Rp)</th>
            </tr>
          </thead>
          <tbody>
            {
              bookData.length == 0
              ?
              <p></p>
              :
              bookData.map((data,i) => 
                <tr onClick={ () => history.push(`/admin/editbook/${data._id}`) }>
                  <th scope="row">{i+1}</th>
                  <td>{data.title}</td>
                  <td>{data.stock}</td>
                  <td>{data.price}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListBook