import React from 'react';
import './style.scss'

function Cart() {
  
  return (
    <div className="cart-container">
      <div className="cart-container--title">
        <h1 style={{padding: '15px'}}>Cart</h1>
      </div>
      <div className="cart-container--contents">
        <div className="cart-container--contents--products">
          <div className="cart-container--contents--products--product">
            <div className="cart-container--contents--products--product--image">
              <img src="http://books.google.com/books/content?id=kztrAwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71WwjdniapJBEWl3Q0tTYm0Sh_dbGyY-TReSX-FaZnLx2wNDsv7UnmUkPfTFALS2GplAZ1GO5Ajlzsd2rrJF6IyS8g3mmEFLMwCnpHMDPt2MW7KsAt9649hHq6ezl569JzO9ooK&source=gbs_api" alt=""/>
            </div>
            <div className="cart-container--contents--products--product--infos">
              <p className="cart-container--contents--products--product--infos--info">Harry Potter</p>
              <p className="cart-container--contents--products--product--infos--info">Price: Rp. 500000</p>
              <p className="cart-container--contents--products--product--infos--info">Quantity: 3</p>
            </div>
          </div>

          <div className="cart-container--contents--products--product">
            <div className="cart-container--contents--products--product--image">
              <img src="http://books.google.com/books/content?id=kztrAwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71WwjdniapJBEWl3Q0tTYm0Sh_dbGyY-TReSX-FaZnLx2wNDsv7UnmUkPfTFALS2GplAZ1GO5Ajlzsd2rrJF6IyS8g3mmEFLMwCnpHMDPt2MW7KsAt9649hHq6ezl569JzO9ooK&source=gbs_api" alt=""/>
            </div>
            <div className="cart-container--contents--products--product--infos">
              <p className="cart-container--contents--products--product--infos--info">Harry Potter</p>
              <p className="cart-container--contents--products--product--infos--info">Price: Rp. 500000</p>
              <p className="cart-container--contents--products--product--infos--info">Quantity: 3</p>
            </div>
          </div>

        </div>
        <div className="cart-container--contents--checkout">
          <div className="cart-container--contents--checkout--pay">
            <button type="button" style={{marginBottom: '15px'}} class="btn cart-container--contents--checkout--pay--total"> Total: Rp. 100000 <i style={{marginLeft: '5px'}} className="fas fa-money-bill"></i></button>
            <button type="button" class="btn cart-container--contents--checkout--pay--checkout">Checkout! <i className="fas fa-arrow-circle-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
