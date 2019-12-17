import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import Axios from '../../../api/axios'
import './style.scss'
import convertToRupiah from '../../helpers/convertToRupiah'

function Cart() {

  const history = useHistory()
  const [totalPrice, setTotalPrice]  = useState(0)
  const [cartData, setCartData] = useState([])
  const [ totalPriceToDisplay, setTotalPriceToDisplay ] = useState('')

  async function fetchCartData () {
    try{
      const { data } = await Axios({
        method: 'get',
        url: '/carts',
        headers: {
          token: localStorage.getItem('token')
        }
      })
      let temp = []
      for (let i = 0; i < data.length; i++) {
        data[i].priceToDisplay = convertToRupiah(data[i].idBook.price)
        temp.push(data[i])
      }
      console.log(temp)
      setCartData(temp)
    }
    catch(err){
      console.log(err.response)
    }
  }

  async function plusCart (id, qtyNow) {
    try{
      const { data } = await Axios({
        method: 'patch',
        url: `/carts/${id}/update`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          qty: Number(qtyNow) + 1
        }
      })
      console.log(data)
      // fetchCartData()
      setCartData(data)
    }
    catch(err){
      console.log(err.response)
    }
  }

  async function minusCart (id, qtyNow) {
    if(qtyNow === 1){
      console.log('1')
    }
    else{
      try{
        const { data } = await Axios({
          method: 'patch',
          url: `/carts/${id}/update`,
          headers: {
            token: localStorage.getItem('token')
          },
          data: {
            qty: Number(qtyNow) - 1
          }
        })
        console.log(data)
        // fetchCartData()
        setCartData(data)
      }
      catch(err){
        console.log(err.response)
      }
    }
  }

  async function deleteCartData (id) {
    try{
      const { data } = await Axios({
        method: 'delete',
        url: `/carts/${id}/delete`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
      console.log(data)
      fetchCartData()
    }
    catch(err){
      console.log(err.response)
    }
  }

  async function checkout () {
    try{
      const { data } = await Axios({
        method: 'get',
        url: '/transactions/new',
        headers: {
          token: localStorage.getItem('token')
        }
      })
      console.log(data)
      history.push('/home/history')
    }
    catch(err){
      console.log(err.response)
    }
  }

  useEffect(() => {
    let totalPrice = 0
    cartData.forEach(data => {
      totalPrice += Number(data.idBook.price) * Number(data.qty)
    })
    setTotalPrice(totalPrice)
    setTotalPriceToDisplay(convertToRupiah(totalPrice))
  },[cartData])

  useEffect(() => {
    fetchCartData()
  },[])
  
  return (
    <div>
      <div className="container">
        <p className="cart-title">Showing <b>{cartData.length} product</b> in cart</p>
        <div className="row">
          <div className="col-9">
            <div className="cartContainer">

              {
                cartData.length === 0
                ?
                <p className="no-data">You have 0 item in your cart</p>
                :
                cartData.map((data,i) => 
                  <div key={i} className="row cartContainer--cartItem row no-gutters">
                    <div className="col-2">
                      <img alt="book cover" className="cartContainer--cartItem--image" src={data.idBook.image} />
                    </div>
                    <div className="col-5">
                      <p className="mb-0 cartContainer--cartItem--book-title">{data.idBook.title}</p>
                      <p className="cartContainer--cartItem--author"> <small>{data.idBook.author[0]}</small></p>
                      <p><b>{data.priceToDisplay}</b></p>
                    </div>
                    <div className="col-2">
                      <div className="d-flex justify-content-end">
                        <button onClick={ () => minusCart(data._id, data.qty) } className="cartContainer--cartItem--plus-minus-btn">-</button>
                        <input readOnly min="1" className="cartContainer--cartItem--number-input" value={data.qty} type="number"/>
                        <button onClick={ () => plusCart(data._id, data.qty) } className="cartContainer--cartItem--plus-minus-btn">+</button>
                      </div>
                    </div>
                    <div className="col-2">
                      <p className="cartContainer--cartItem--subtotal-text">Subtotal</p>
                      <p className="cartContainer--cartItem--subtotal-number">Rp {Number(data.idBook.price) * Number(data.qty)}</p>
                      <p onClick={ () => deleteCartData(data._id) } className="cartContainer--cartItem--delete">DELETE</p>
                    </div>
                    <div className="offset-1"></div>
                  </div>
                )
              }

            </div>
          </div>
          <div className="col-3">
            <div className="checkout-container">
              <p className="checkout-container--title">Total Price</p>
              <p className="checkout-container--total-price"><b>{totalPriceToDisplay}</b></p>
              <button onClick={ () => checkout() } className="checkout-container--button">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
