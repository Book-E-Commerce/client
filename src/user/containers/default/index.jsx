import React, { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import Product from '../../components/product'
import './style.scss'
import axios from '../../../api/axios'

function Default() {
  const history = useHistory()
  const [ categories, setCategories ] = useState([
    {
      name: 'Business',
      img: 'https://i.imgur.com/Uxg8oOk.png'
    },
    {
      name: 'Children',
      img: 'https://i.imgur.com/bdOETVy.png'
    },
    {
      name: 'Computer',
      img: 'https://i.imgur.com/48Sc7f8.png'
    },
    {
      name: 'Cooking',
      img: 'https://i.imgur.com/r9TJ7qX.png'
    },
    {
      name: 'Fiction',
      img: 'https://i.imgur.com/iqtfOws.png'
    },
    {
      name: 'Health',
      img: 'https://i.imgur.com/IWQi2zG.png'
    },
    {
      name: 'History',
      img: 'https://i.imgur.com/QofPdYo.png'
    },
    {
      name: 'Parenting',
      img: 'https://i.imgur.com/quDAxSe.png'
    },
    {
      name: 'Science',
      img: 'https://i.imgur.com/q92uJ41.png'
    },
  ])
  const [ popularProducts, setPopularProducts ] = useState([])

  const getPopularProducts = () => {
    axios.get('/books/popular')
      .then(({data}) => {
        let temp = []
        for (let i = 0; i < 5; i++) {
          temp.push(data[i])
        }
        setPopularProducts(temp)
      })
  }

  const toDetails = (id) => {
    history.push(`/home/products/${id}`)
  }

  if (!popularProducts) return (
    <div className="loading-container">
      <div className="lds-circle d-flex justify-content-center align-items-center mx-auto"><div></div></div>
      <h6 style={{fontWeight: 'bold'}}>Loading . . . </h6>
    </div>
  )

  return (
    <>
      <div className="container main-container flex-column">
        <div className="row main-container--banners">
          <div className="col-8 main-container--banners--left">
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-interval="10000">
                  <img src="https://i.imgur.com/eKaUW8a.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-interval="2000">
                  <img src="https://i.imgur.com/EzzpY10.png" className="d-block w-100" alt="..." />
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
          </div>
          <div className="col-4 flex-column main-container--banners--right">
            <div className="main-container--banners--right--top">
              <img src="https://i.imgur.com/2lzmtwn.png" alt=""/>
            </div>
            <div className="main-container--banners--right--bottom">
              <img src="https://i.imgur.com/ACN211V.png" alt=""/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 main-container--categories">
            {
              categories.map((category, i) => {
                return (
                  <div className="main-container--categories--category flex-column">
                    <div className="main-container--categories--category--img">
                      <img src={category.img} alt=""/>
                    </div>
                    <p>{category.name}</p>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="main-container--popular-products">
              <div className="col-2 main-container--popular-products--header">
              </div>
              <div className="col-10 main-container--popular-products--listproducts">
                {
                  popularProducts.map((product, i) => {
                    return (
                      <div onClick={() => toDetails(product._id)} key={i} className="col-2 main-container--popular-products--listproducts--product d-block text-truncate">
                        <img src={product.image} alt=""/>
                        <div className="d-block text-truncate main-container--popular-products--listproducts--product--info">
                          <p className="d-block text-truncate main-container--popular-products--listproducts--product--info--title">{product.title}</p>
                          <p className="main-container--popular-products--listproducts--product--info--author" style={{marginTop: '3px'}}>{product.author}</p>
                          <p className="main-container--popular-products--listproducts--product--info--price">Rp. {product.price}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        
        <h4 className="genres-titles">Business & Investing</h4>
        <div className="row main-container--genre-1-products">
          <div className="col-2">
            <div className="main-container--genre-1-products--header">

            </div>
          </div>
          <div className="col-10 main-container--genre-1-products--listproducts">
            {
              popularProducts.map((product, i) => {
                return (
                  <div onClick={() => toDetails(product._id)} key={i} className="col-2 main-container--genre-1-products--listproducts--product d-block text-truncate">
                    <img src={product.image} alt=""/>
                    <div className="d-block text-truncate main-container--popular-products--listproducts--product--info">
                      <p className="d-block text-truncate main-container--genre-1-products--listproducts--product--info--title">{product.title}</p>
                      <p className="main-container--genre-1-products--listproducts--product--info--author" style={{marginTop: '3px'}}>{product.author}</p>
                      <p className="main-container--genre-1-products--listproducts--product--info--price">Rp. {product.price}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        
        <h4 className="genres-titles">Computers & Technology</h4>
        <div className="row main-container--genre-2-products">
          <div className="col-2">
            <div className="main-container--genre-2-products--header">

            </div>
          </div>
          <div className="col-10 main-container--genre-2-products--listproducts">
            {
              popularProducts.map((product, i) => {
                return (
                  <div onClick={() => toDetails(product._id)} key={i} className="col-2 main-container--genre-2-products--listproducts--product d-block text-truncate">
                    <img src={product.image} alt=""/>
                    <div className="d-block text-truncate main-container--genre-2-products--listproducts--product--info">
                      <p className="d-block text-truncate main-container--genre-2-products--listproducts--product--info--title">{product.title}</p>
                      <p className="main-container--genre-2-products--listproducts--product--info--author" style={{marginTop: '3px'}}>{product.author}</p>
                      <p className="main-container--genre-2-products--listproducts--product--info--price">Rp. {product.price}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Default;

{/* <div className="main-container--products--hotitems">
  <div className="main-container--products--hotitems--header">
    <img className="main-products-text-container" src="https://i.imgur.com/kQXV2H9.png" alt="HotItems"/>
  </div>
  <div className="main-container--products--hotitems--items container">
    <div className="row">
      <div className="main-container--products--hotitems--items--item col-2">
        <img style={{cursor: 'pointer'}} onClick={toDetails} src="https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg" alt="..." />
        <div className="main-container--products--hotitems--items--item--bottom-container">
          <p className="main-container--products--hotitems--items--item--bottom-container--title">Harry Potter</p>
          <span style={{marginBottom: '7px'}} className="badge badge-warning"><i className="far fa-star"></i> 5</span>
          <span style={{marginBottom: '7px'}} className="badge badge-dark">Price: $50</span>
        </div>
      </div>

      <div className="main-container--products--hotitems--items--item col-2">
        <img style={{cursor: 'pointer'}} onClick={toDetails} src="https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg" alt="..." />
        <div className="main-container--products--hotitems--items--item--bottom-container">
          <p className="main-container--products--hotitems--items--item--bottom-container--title">Harry Potter</p>
          <span style={{marginBottom: '7px'}} className="badge badge-warning"><i className="far fa-star"></i> 5</span>
          <span style={{marginBottom: '7px'}} className="badge badge-dark">Price: $50</span>
        </div>
      </div>

      <div className="main-container--products--hotitems--items--item col-2">
        <img style={{cursor: 'pointer'}} onClick={toDetails} src="https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg" alt="..." />
        <div className="main-container--products--hotitems--items--item--bottom-container">
          <p className="main-container--products--hotitems--items--item--bottom-container--title">Harry Potter</p>
          <span style={{marginBottom: '7px'}} className="badge badge-warning"><i className="far fa-star"></i> 5</span>
          <span style={{marginBottom: '7px'}} className="badge badge-dark">Price: $50</span>
        </div>
      </div>

      <div className="main-container--products--hotitems--items--item col-2">
        <img style={{cursor: 'pointer'}} onClick={toDetails} src="https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg" alt="..." />
        <div className="main-container--products--hotitems--items--item--bottom-container">
          <p className="main-container--products--hotitems--items--item--bottom-container--title">Harry Potter</p>
          <span style={{marginBottom: '7px'}} className="badge badge-warning"><i className="far fa-star"></i> 5</span>
          <span style={{marginBottom: '7px'}} className="badge badge-dark">Price: $50</span>
        </div>
      </div>
    </div>
  </div>
</div> */}
