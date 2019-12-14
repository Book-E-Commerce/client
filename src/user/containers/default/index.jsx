import React from 'react';
import { useHistory, Link } from "react-router-dom";

function Default() {
  const history = useHistory()
  const toDetails = () => {
    history.push('/home/details')
  }

  return (
    <>
      <div id="carouselExampleInterval" className="carousel slide main-container--products" data-ride="carousel">
        <div className="carousel-inner main-container--products--carousel">
          <div className="carousel-item active" data-interval="10000">
            <img src="https://images2.alphacoders.com/261/thumb-1920-26102.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-interval="2000">
            <img src="https://images2.alphacoders.com/261/thumb-1920-26102.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <img className="main-products-text-container" src="https://i.imgur.com/hF339zi.png" alt="HotItems"/>
      <div className="main-container--products--hotitems">
        <div className="main-container--products--hotitems--item">
          <img style={{cursor: 'pointer'}} onClick={toDetails} src="https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg" alt="..." />
          <div className="main-container--products--hotitems--item--bottom-container">
            <p className="main-container--products--hotitems--item--bottom-container--title">Harry Potter</p>
            <span style={{marginBottom: '7px'}} className="badge badge-warning"><i className="far fa-star"></i> 5</span>
            <span style={{marginBottom: '7px'}} className="badge badge-dark">Price: $50</span>
            <button type="button" className="btn main-container--products--hotitems--item--bottom-container--buy"><i style={{marginRight: '5px'}} className="fas fa-shopping-cart"></i> Buy</button>
          </div>
        </div>

        <div className="main-container--products--hotitems--item">
          <img style={{cursor: 'pointer'}} onClick={toDetails} src="https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg" alt="..." />
          <div className="main-container--products--hotitems--item--bottom-container">
            <p className="main-container--products--hotitems--item--bottom-container--title">Harry Potter</p>
            <span style={{marginBottom: '7px'}} className="badge badge-warning"><i className="far fa-star"></i> 5</span>
            <span style={{marginBottom: '7px'}} className="badge badge-dark">Price: $50</span>
            <button type="button" className="btn main-container--products--hotitems--item--bottom-container--buy"><i style={{marginRight: '5px'}} className="fas fa-shopping-cart"></i> Buy</button>
          </div>
        </div>

        <div className="main-container--products--hotitems--item">
          <img style={{cursor: 'pointer'}} onClick={toDetails} src="https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg" alt="..." />
          <div className="main-container--products--hotitems--item--bottom-container">
            <p className="main-container--products--hotitems--item--bottom-container--title">Harry Potter</p>
            <span style={{marginBottom: '7px'}} className="badge badge-warning"><i className="far fa-star"></i> 5</span>
            <span style={{marginBottom: '7px'}} className="badge badge-dark">Price: $50</span>
            <button type="button" className="btn main-container--products--hotitems--item--bottom-container--buy"><i style={{marginRight: '5px'}} className="fas fa-shopping-cart"></i> Buy</button>
          </div>
        </div>

        <div className="main-container--products--hotitems--item">
          <img style={{cursor: 'pointer'}} onClick={toDetails} src="https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg" alt="..." />
          <div className="main-container--products--hotitems--item--bottom-container">
            <p className="main-container--products--hotitems--item--bottom-container--title">Harry Potter</p>
            <span style={{marginBottom: '7px'}} className="badge badge-warning"><i className="far fa-star"></i> 5</span>
            <span style={{marginBottom: '7px'}} className="badge badge-dark">Price: $50</span>
            <button type="button" className="btn main-container--products--hotitems--item--bottom-container--buy"><i style={{marginRight: '5px'}} className="fas fa-shopping-cart"></i> Buy</button>
          </div>
        </div>
      </div>

      <img style={{height: '120px'}} className="main-products-text-container" src="https://i.imgur.com/39wpF58.png" alt="SaleItems"/>
      <div className="main-container--products--saleitems">
        <div className="main-container--products--hotitems--item">
          <img style={{cursor: 'pointer'}} onClick={toDetails} src="https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg" alt="..." />
          <div className="main-container--products--hotitems--item--bottom-container">
            <p className="main-container--products--hotitems--item--bottom-container--title">Harry Potter</p>
            <span style={{marginBottom: '7px'}} className="badge badge-warning"><i className="far fa-star"></i> 5</span>
            <span style={{marginBottom: '7px'}} className="badge badge-dark">Price: $50</span>
            <button type="button" className="btn main-container--products--hotitems--item--bottom-container--buy"><i style={{marginRight: '5px'}} className="fas fa-shopping-cart"></i> Buy</button>
          </div>
        </div>

        <div className="main-container--products--hotitems--item">
          <img style={{cursor: 'pointer'}} onClick={toDetails} src="https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg" alt="..." />
          <div className="main-container--products--hotitems--item--bottom-container">
            <p className="main-container--products--hotitems--item--bottom-container--title">Harry Potter</p>
            <span style={{marginBottom: '7px'}} className="badge badge-warning"><i className="far fa-star"></i> 5</span>
            <span style={{marginBottom: '7px'}} className="badge badge-dark">Price: $50</span>
            <button type="button" className="btn main-container--products--hotitems--item--bottom-container--buy"><i style={{marginRight: '5px'}} className="fas fa-shopping-cart"></i> Buy</button>
          </div>
        </div>

        <div className="main-container--products--hotitems--item">
          <img style={{cursor: 'pointer'}} onClick={toDetails} src="https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg" alt="..." />
          <div className="main-container--products--hotitems--item--bottom-container">
            <p className="main-container--products--hotitems--item--bottom-container--title">Harry Potter</p>
            <span style={{marginBottom: '7px'}} className="badge badge-warning"><i className="far fa-star"></i> 5</span>
            <span style={{marginBottom: '7px'}} className="badge badge-dark">Price: $50</span>
            <button type="button" className="btn main-container--products--hotitems--item--bottom-container--buy"><i style={{marginRight: '5px'}} className="fas fa-shopping-cart"></i> Buy</button>
          </div>
        </div>

        <div className="main-container--products--hotitems--item">
          <img style={{cursor: 'pointer'}} onClick={toDetails} src="https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg" alt="..." />
          <div className="main-container--products--hotitems--item--bottom-container">
            <p className="main-container--products--hotitems--item--bottom-container--title">Harry Potter</p>
            <span style={{marginBottom: '7px'}} className="badge badge-warning"><i className="far fa-star"></i> 5</span>
            <span style={{marginBottom: '7px'}} className="badge badge-dark">Price: $50</span>
            <button type="button" className="btn main-container--products--hotitems--item--bottom-container--buy"><i style={{marginRight: '5px'}} className="fas fa-shopping-cart"></i> Buy</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Default;
