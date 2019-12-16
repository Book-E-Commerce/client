import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from '../../../api/axios'
import Swal from 'sweetalert2'
import './style.scss'

function Details(props) {
  const [ title, setTitle ] = useState('')
  const [ author, setAuthor ] = useState('')
  const [ categories, setCategories ] = useState([])
  const [ rating, setRating ] = useState(0)
  const [ price, setPrice ] = useState(0)
  const [ stock, setStock ] = useState(0)
  const [ description, setDescription ] = useState('')
  const [ image, setImage ] = useState('')
  const [ qty, setQty ] = useState(0)

  const { id } = useParams()
  useEffect(() => {
    getDetails()
  }, []);

  const getDetails = () => {
    axios.get(`/books/find-one/${id}`)
      .then(({data}) => {
        setTitle(data.title)
        setAuthor(data.author)
        setCategories(data.category)
        setRating(data.rating)
        setPrice(data.price)
        setStock(data.stock)
        setDescription(data.description)
        setImage(data.image)
      })
  }

  const addToCart = () => {
    axios.post(`/carts/${id}/add-to-cart`, { qty })
      .then(({data}) => {
        Swal.fire(
          'Added to the cart!',
          'Success',
          'success'
        )
      })
  }

  return (
    <div className="container details-container">
      <div className="row">
        <div className="col-3 card details-container--card" style={{width: '17rem'}}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body details-container--card--body">
            <p className="card-text details-container--card--body--main-info">{title}</p>
            <p className="card-text details-container--card--body--main-info">Author: {author}</p>
            <div className="details-container--card--body--categories">
            {
              categories.map((category, i) => {
                return <span key={i} style={{marginLeft: '7px'}} className="badge details-container--card--body--categories--category">{category}</span>
              })
            }
            </div>
          </div>
        </div>

        <div className="col-8 details-container--information">
          <div className="details-container--information--overview">
            <h5 style={{marginTop: '8px', fontWeight: 'bold'}}>Overview: </h5>
            <p style={{margin: '7px'}}>
              {description}
            </p>
          </div>
          <div className="details-container--information--extra">
            <p className="details-container--information--extra--info" style={{marginLeft: '10px', marginTop: '10px'}}>Stock: {stock}</p>
            <p className="details-container--information--extra--info" style={{marginLeft: '10px'}}>Price: Rp.{price}</p>
            <p className="details-container--information--extra--info" style={{marginLeft: '10px', marginBottom: '7px'}}><i style={{marginRight: '8px'}} className="far fa-star"></i> {rating}</p>
            <div className="details-container--information--extra--buy">
              <div className="col-sm-3">
                <input className="form-control" type="number" value={qty} onChange={event => setQty(event.target.value)} id="input-stock" />
              </div>
              <button onClick={addToCart} type="button" className="btn details-container--information--extra--buy--btn"><i style={{marginRight: '5px'}} className="fas fa-shopping-cart"></i> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;
