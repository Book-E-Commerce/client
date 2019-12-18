import React from 'react';
import './style.scss'

function DisplayByCategory() {
  return (
    <div className="displaybycategory-container">
      <div className="displaybycategory-container--title">
        <h1>Comedy</h1>
      </div>
      <div className="displaybycategory-container--products">
        <div className="displaybycategory-container--products--product">
        <img src="http://books.google.com/books/content?id=kztrAwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71WwjdniapJBEWl3Q0tTYm0Sh_dbGyY-TReSX-FaZnLx2wNDsv7UnmUkPfTFALS2GplAZ1GO5Ajlzsd2rrJF6IyS8g3mmEFLMwCnpHMDPt2MW7KsAt9649hHq6ezl569JzO9ooK&source=gbs_api" alt=""/>
          <div className="displaybycategory-container--products--product--infos">
            <p>Title: Harry Potter</p>
            <p>Author: J.K. Rowlings</p>
            <p>Rating: <i style={{marginRight: '2px'}} className="far fa-star"></i> 5</p>
            <p>Price: Rp. 50000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayByCategory;
