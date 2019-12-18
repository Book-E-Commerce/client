import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AfetchCart } from '../../../store/actions/cart'
import Product from '../../components/product'
import axios from '../../../api/axios'
import Swal from 'sweetalert2'
import './style.scss'
import convertToRupiah from '../../helpers/convertToRupiah'

function Details(props) {
  const dispatch = useDispatch()
  const [ title, setTitle ] = useState('')
  const [ author, setAuthor ] = useState('')
  const [ categories, setCategories ] = useState([])
  const [ rating, setRating ] = useState(0)
  const [ price, setPrice ] = useState(0)
  const [ priceToDisplay, setPriceToDisplay ] = useState('')
  const [ stock, setStock ] = useState(0)
  const [ description, setDescription ] = useState('')
  const [ image, setImage ] = useState('')
  const [ qty, setQty ] = useState(1)
  const [ loading, setLoading ] = useState(false)
  const [ cartStatus, setCartStatus ] = useState(false)
  const [ checkCartData, setCheckCartData] = useState(false)
  const cartData = useSelector(state => state.Cart.cart)
  const { id } = useParams()

  useEffect(() => {
    getDetails()
    inTheCart()
  }, []);

  useEffect(() => {
    convertToRupiahs()
  }, [price, priceToDisplay]);
  
  const convertToRupiahs = () => {
    const converted = convertToRupiah(price)
    setPriceToDisplay(converted)
  }

  const getDetails = () => {
    setLoading(true)
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
        setLoading(false)
      })
  }

  const addToCart = () => {
    Swal.showLoading()
    axios({
      method: 'post',
      url: `/carts/${id}/add-to-cart`,
      headers: {
        token: localStorage.getItem('token')
      },
      data: {
        qty
      }
    })
      .then(({data}) => {
        Swal.close()
        setCartStatus(true)
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
        })
      })
  }

  const inTheCart = () => {
    cartData.forEach(data => {
      console.log(data)
      if(id == data.idBook._id){
        setCartStatus(true)
      }
    })
  }

  useEffect(() => {
    if(!checkCartData && cartData.length == 0){
      dispatch(AfetchCart())
      setCheckCartData(true)
    }
    else{
      inTheCart()
    }
  },[cartData])

  if (loading) return (
    <div className="loading-container">
      <div className="lds-circle d-flex justify-content-center align-items-center mx-auto"><div></div></div>
      <h6 style={{fontWeight: 'bold'}}>Loading . . . </h6>
    </div>
  )

  return (
    <div className="container details-container">
    <div className="row container details-container--main">
      <div className="pr-md-0 col-md-4 col-12 container details-container--main--image">
        <img src={image} className="" alt="..." />
      </div>
      <div className="pl-md-0 col-md-4 col-12 container details-container--main--info">
        <div className="details-container--main--info--prime">
          <p className="details-container--main--info--prime--title">{title}</p>
          <p className="details-container--main--info--prime--author"><strong>Author:</strong> {author}</p>
          <p className="details-container--main--info--prime--author"><strong>Stock:</strong> {stock}</p>
          <p className="details-container--main--info--prime--author"><i style={{marginRight: '8px'}} className="far fa-star"></i> {rating}</p>
          <div className="details-container--main--info--prime--categories">
          {
            categories.map((category, i) => {
              return <span key={i} style={{marginRight: '7px'}} className="badge details-container--main--info--prime--categories--category">{category}</span>
            })
          }
          </div>
        </div>
      </div>
      <div className="col-md-4 col-12">
        <div className="container details-container--main--add-to-cart">
          <div className="details-container--main--add-to-cart--extra">
            <div className="pricetext-container">
              <p>Price</p>
            </div>
            <p className="details-container--main--add-to-cart--extra--info">{priceToDisplay}</p>
            <div className="details-container--main--add-to-cart--extra--buy">
              {
                cartStatus
                ?
                <button disabled type="button" className="btn details-container--main--add-to-cart--extra--buy--clear"><i style={{marginRight: '5px'}} className="fas fa-check"></i>This item already in your cart</button>
                :
                <button onClick={addToCart} type="button" className="btn details-container--main--add-to-cart--extra--buy--btn"><i style={{marginRight: '5px'}} className="fas fa-shopping-cart"></i>Add to Cart</button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="details-overview px-3">
      <h3>Overview</h3>
      <div className="hr"></div>
    </div>
    <div className="row container details-container--overview">
      {/* <div className="col-12"> */}
        <div className="details-container--overview--contents">
          <p style={{margin: '7px'}}>
            {description}
          </p>
        </div>
      {/* </div> */}
    </div>
  </div>
  )
}

export default Details;

{/* <div className="container details-container">
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
        <p style={{margin: '7px'}}>
          {description}
        </p>
      </div>
      <div className="details-container--information--extra">
        <p className="details-container--information--extra--info" style={{marginLeft: '10px', marginTop: '10px'}}>Stock: {stock}</p>
        <p className="details-container--information--extra--info" style={{marginLeft: '10px'}}>Price: Rp.{price}</p>
        <p className="details-container--information--extra--info" style={{marginLeft: '10px', marginBottom: '25px'}}><i style={{marginRight: '8px'}} className="far fa-star"></i> {rating}</p>
        <div className="details-container--information--extra--buy">
          <button onClick={addToCart} type="button" className="btn details-container--information--extra--buy--btn"><i style={{marginRight: '5px'}} className="fas fa-shopping-cart"></i> Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>  */}
