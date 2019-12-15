import React from 'react';
import './style.scss'

function Product() {
  return (
    <div>
      <div className="main-container--products--hotitems--items--item">
        <img style={{cursor: 'pointer'}} src="https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg" alt="..." />
        <div className="main-container--products--hotitems--items--item--bottom-container">
          <p className="main-container--products--hotitems--items--item--bottom-container--title">Harry Potter</p>
          <span style={{marginBottom: '7px'}} className="badge badge-warning"><i className="far fa-star"></i> 5</span>
          <span style={{marginBottom: '7px'}} className="badge badge-dark">Price: $50</span>
          <button type="button" className="btn main-container--products--hotitems--items--item--bottom-container--buy"><i style={{marginRight: '5px'}} className="fas fa-shopping-basket"></i> Buy</button>
        </div>
      </div>
    </div>
  )
}

export default Product;
