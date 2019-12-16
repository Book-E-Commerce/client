import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import Axios from '../../../api/axios'
import './style.scss'

function Cart() {

  const history = useHistory()
  const [totalPrice, setTotalPrice]  = useState(0)
  const [cartData, setCartData] = useState([])

  async function fetchCartData () {
    try{
      const { data } = await Axios({
        method: 'get',
        url: '/carts',
        headers: {
          token: localStorage.getItem('token')
        }
      })
      console.log(data)
      setCartData(data)
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
                <p>No Data</p>
                :
                cartData.map((data,i) => 
                  <div key={i} className="row cartContainer--cartItem row no-gutters">
                    <div className="col-2">
                      <img alt="book cover" className="cartContainer--cartItem--image" src={data.idBook.image} />
                    </div>
                    <div className="col-5">
                      <p className="mb-0 cartContainer--cartItem--book-title">{data.idBook.title}</p>
                      <p className="cartContainer--cartItem--author"> <small>{data.idBook.author[0]}</small></p>
                      <p><b>Rp {data.idBook.price}</b></p>
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
              <p className="checkout-container--total-price"><b>Rp {totalPrice}</b></p>
              <button onClick={ () => checkout() } className="checkout-container--button">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
