import React, { useState } from 'react';
import './style.scss'

function Details() {
  const [ title, setTitle ] = useState('Harry Potter')
  const [ author, setAuthor ] = useState('J.K. Rowling')
  const [ categories, setCategories ] = useState(['Action', 'Adventure', 'Magic'])
  const [ rating, setRating ] = useState(5)
  const [ price, setPrice ] = useState(50000)
  const [ stock, setStock ] = useState(100)
  const [ description, setDescription ] = useState("Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths.")
  const [ image, setImage ] = useState(0)

  return (
    <div className="details-container">
      <div class="card details-container--card" style={{width: '18rem'}}>
        <img src="https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg" class="card-img-top" alt="..." />
        <div class="card-body details-container--card--body">
          <p class="card-text details-container--card--body--main-info">{title}</p>
          <p class="card-text details-container--card--body--main-info">Author: {author}</p>
          <div className="details-container--card--body--categories">
          {
            categories.map((category, i) => {
              return <span key={i} style={{marginLeft: '7px'}} class="badge details-container--card--body--categories--category">{category}</span>
            })
          }
          </div>
        </div>
      </div>
      <div className="details-container--information">
        <div className="details-container--information--overview">
          <p style={{margin: '10px'}}>
            {description}
          </p>
        </div>
        <div className="details-container--information--extra">
          <p className="details-container--information--extra--info" style={{marginLeft: '10px', marginTop: '10px'}}>Stock: 100</p>
          <p className="details-container--information--extra--info" style={{marginLeft: '10px'}}>Price: Rp.{price}</p>
          <p className="details-container--information--extra--info" style={{marginLeft: '10px'}}><i style={{marginRight: '8px'}} className="far fa-star"></i> {rating}</p>
          <div className="details-container--information--extra--buy">
            <div className="col-sm-3">
              <input className="form-control" type="number" value="0" id="input-stock" />
            </div>
            <button type="button" className="btn details-container--information--extra--buy--btn"><i style={{marginRight: '5px'}} className="fas fa-shopping-cart"></i> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;