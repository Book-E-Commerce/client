import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AfetchCart, AplusCart, AminusCart, AdeleteCartData, Acheckout } from '../../../store/actions/cart'
import './style.scss'
import convertToRupiah from '../../helpers/convertToRupiah'

function Cart() {

  const history = useHistory()
  const dispatch = useDispatch()
  const cartData = useSelector(state => state.Cart.cart)
  const [totalPrice, setTotalPrice]  = useState(0)
  const [ totalPriceToDisplay, setTotalPriceToDisplay ] = useState('')

  function handlePlusCart (id, qtyNow) {
    dispatch(AplusCart(id, qtyNow))
  }

  function handleMinusCart (id, qtyNow) {
    dispatch(AminusCart(id, qtyNow))
  }

  function handleDeleteCartData (id) {
    dispatch(AdeleteCartData(id))
  }

  function handleCheckout () {
    dispatch(Acheckout(history))
  }

  const toDetails = (id) => {
    history.push(`/home/products/${id}`)
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
    dispatch(AfetchCart())
  },[])
  
  return (
    <div>
      <div className="container">
        <p className="cart-title">Showing <b>{cartData.length} product</b> in cart</p>
        <div className="row">
          <div className="col-md-9 col-12">
            <div className="cartContainer">

              {
                cartData.length === 0
                ?
                <p className="no-data">You have 0 item in your cart</p>
                :
                cartData.map((data,i) => 
                  <div key={i} className="row cartContainer--cartItem row no-gutters">
                    <div className="col-md-2 col-4">
                      <img onClick={() => toDetails(data.idBook._id)} alt="book cover" className="cartContainer--cartItem--image" src={data.idBook.image} />
                    </div>
                    <div className="col-md-5 col-3">
                      <p className="mb-0 cartContainer--cartItem--book-title">{data.idBook.title}</p>
                      <p className="cartContainer--cartItem--author"> <small>{data.idBook.author[0]}</small></p>
                      <p><b>{data.priceToDisplay}</b></p>
                    </div>
                    <div className="col-3 col-md-2">
                      <div className="d-flex justify-content-end">
                        <button onClick={ () => handleMinusCart(data._id, data.qty) } className="cartContainer--cartItem--plus-minus-btn">-</button>
                        <input readOnly min="1" className="cartContainer--cartItem--number-input" value={data.qty} type="number"/>
                        <button onClick={ () => handlePlusCart(data._id, data.qty) } className="cartContainer--cartItem--plus-minus-btn">+</button>
                      </div>
                    </div>
                    <div className="col-2">
                      <p className="cartContainer--cartItem--subtotal-text">Subtotal</p>
                      <p className="cartContainer--cartItem--subtotal-number">{convertToRupiah(Number(data.idBook.price) * Number(data.qty))}</p>
                      <p onClick={ () => handleDeleteCartData(data._id) } className="cartContainer--cartItem--delete"><b>REMOVE</b></p>
                    </div>
                    <div className="offset-1"></div>
                  </div>
                )
              }

            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="checkout-container">
              <p className="checkout-container--title">Total Price</p>
              <p className="checkout-container--total-price"><b>{totalPriceToDisplay || 0}</b></p>
              <button onClick={ () => handleCheckout() } className="checkout-container--button">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;

//   const toDetails = (id) => {
//     history.push(`/home/products/${id}`)
//   }

//   async function plusCart (id, qtyNow) {
//     try{
//       const { data } = await Axios({
//         method: 'patch',
//         url: `/carts/${id}/update`,
//         headers: {
//           token: localStorage.getItem('token')
//         },
//         data: {
//           qty: Number(qtyNow) + 1
//         }
//       })
//       console.log(data)
//       // fetchCartData()
//       for (let i = 0; i < data.length; i++) {
//         data[i].priceToDisplay = convertToRupiah(data[i].idBook.price)
//       }
//       setCartData(data)
//     }
//     catch(err){
//       console.log(err.response)
//     }
//   }

//   async function minusCart (id, qtyNow) {
//     if(qtyNow === 1){
//       console.log('1')
//     }
//     else{
//       try{
//         const { data } = await Axios({
//           method: 'patch',
//           url: `/carts/${id}/update`,
//           headers: {
//             token: localStorage.getItem('token')
//           },
//           data: {
//             qty: Number(qtyNow) - 1
//           }
//         })
//         console.log(data)
//         // fetchCartData()
//         for (let i = 0; i < data.length; i++) {
//           data[i].priceToDisplay = convertToRupiah(data[i].idBook.price)
//         }
//         setCartData(data)
//       }
//       catch(err){
//         console.log(err.response)
//       }
//     }

