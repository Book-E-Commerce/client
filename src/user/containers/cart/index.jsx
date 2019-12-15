import React from 'react';
import './style.scss'

function Cart() {
  
  return (
    <div>
      <div className="container">
        <p className="cart-title">Showing 2 product in cart</p>
        <div className="row">
          <div className="col-9">
            <div className="cartContainer">

              <div className="row cartContainer--cartItem row no-gutters">
                <div className="col-2">
                  <img alt="book cover" className="cartContainer--cartItem--image" src="https://cdn.gramedia.com/uploads/items/9786020635163_MANAJEMEN_RISIKO_KRISIS_DAN_BENCANA_UNTUK_INDUSTRI_PARIWISATA_YANG_BERKELANJUTAN-1__w110_hauto.jpg" />
                </div>
                <div className="col-5">
                  <p className="mb-0">Manajemen Risiko, Krisis, Dan Bencana Untuk Industri Pariwisata yang Berkelanjutan</p>
                  <p className="cartContainer--cartItem--author"> <small>DIPADANA PUTU</small></p>
                  <p><b>Rp 20.000</b></p>
                </div>
                <div className="col-2">
                  <div className="d-flex justify-content-end">
                    <button className="cartContainer--cartItem--plus-minus-btn">-</button>
                    <input className="cartContainer--cartItem--number-input" value="0" type="number"/>
                    <button className="cartContainer--cartItem--plus-minus-btn">+</button>
                  </div>
                </div>
                <div className="col-2">
                  <p className="cartContainer--cartItem--subtotal-text">Subtotal</p>
                  <p className="cartContainer--cartItem--subtotal-number">Rp 40.000</p>
                </div>
                <div className="offset-1"></div>
              </div>

              <div className="row cartContainer--cartItem row no-gutters">
                <div className="col-2">
                  <img alt="book cover" className="cartContainer--cartItem--image" src="https://cdn.gramedia.com/uploads/items/9786020635163_MANAJEMEN_RISIKO_KRISIS_DAN_BENCANA_UNTUK_INDUSTRI_PARIWISATA_YANG_BERKELANJUTAN-1__w110_hauto.jpg" />
                </div>
                <div className="col-5">
                  <p className="mb-0">Manajemen Risiko, Krisis, Dan Bencana Untuk Industri Pariwisata yang Berkelanjutan</p>
                  <p className="cartContainer--cartItem--author"> <small>DIPADANA PUTU</small></p>
                  <p><b>Rp 20.000</b></p>
                </div>
                <div className="col-2">
                  <div className="d-flex justify-content-end">
                    <button className="cartContainer--cartItem--plus-minus-btn">-</button>
                    <input className="cartContainer--cartItem--number-input" value="0" type="number"/>
                    <button className="cartContainer--cartItem--plus-minus-btn">+</button>
                  </div>
                </div>
                <div className="col-2">
                  <p className="cartContainer--cartItem--subtotal-text">Subtotal</p>
                  <p className="cartContainer--cartItem--subtotal-number">Rp 40.000</p>
                </div>
                <div className="offset-1"></div>
              </div>

              <div className="row cartContainer--cartItem row no-gutters">
                <div className="col-2">
                  <img alt="book cover" className="cartContainer--cartItem--image" src="https://cdn.gramedia.com/uploads/items/9786020635163_MANAJEMEN_RISIKO_KRISIS_DAN_BENCANA_UNTUK_INDUSTRI_PARIWISATA_YANG_BERKELANJUTAN-1__w110_hauto.jpg" />
                </div>
                <div className="col-5">
                  <p className="mb-0">Manajemen Risiko, Krisis, Dan Bencana Untuk Industri Pariwisata yang Berkelanjutan</p>
                  <p className="cartContainer--cartItem--author"> <small>DIPADANA PUTU</small></p>
                  <p><b>Rp 20.000</b></p>
                </div>
                <div className="col-2">
                  <div className="d-flex justify-content-end">
                    <button className="cartContainer--cartItem--plus-minus-btn">-</button>
                    <input className="cartContainer--cartItem--number-input" value="0" type="number"/>
                    <button className="cartContainer--cartItem--plus-minus-btn">+</button>
                  </div>
                </div>
                <div className="col-2">
                  <p className="cartContainer--cartItem--subtotal-text">Subtotal</p>
                  <p className="cartContainer--cartItem--subtotal-number">Rp 40.000</p>
                </div>
                <div className="offset-1"></div>
              </div>
              


            </div>
          </div>
          <div className="col-3">
            <div className="checkout-container">
              <p className="checkout-container--title">Total Price:</p>
              <p className="checkout-container--total-price"><b>Rp 40.000</b></p>
            </div>
            <button className="checkout-container--button">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
