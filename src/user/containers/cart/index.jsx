import React from 'react';
import './style.scss'

function Cart() {
  return (
    <div className="cart-container">
      <div className="cart-container--title">
        <h1>TITLE</h1>
      </div>
      <div className="cart-container--contents">
        <div className="cart-container--contents--products">
          <div className="cart-container--contents--products--product">
            <div className="cart-container--contents--products--product--image">
              <img src="http://books.google.com/books/content?id=kztrAwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71WwjdniapJBEWl3Q0tTYm0Sh_dbGyY-TReSX-FaZnLx2wNDsv7UnmUkPfTFALS2GplAZ1GO5Ajlzsd2rrJF6IyS8g3mmEFLMwCnpHMDPt2MW7KsAt9649hHq6ezl569JzO9ooK&source=gbs_api" alt=""/>

            </div>
            <div className="cart-container--contents--products--product--info">
              <p>product info</p>

            </div>
          </div>

        </div>
        <div className="cart-container--contents--checkout">
          <p>checkout</p>

        </div>
      </div>
    </div>
  )
}

export default Cart;
