import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from '../../../api/axios'
import './style.scss'
import Swal from 'sweetalert2'

function AddBook (props) {

  const history = useHistory()

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [rating, setRating] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState([])
  const [imageFile, setImageFile] = useState('')

  async function handleSubmit (e) {
    e.preventDefault()

    let tempAuthor = author.split(',')
    let finalAuthor = []
    tempAuthor.forEach(data => finalAuthor.push(data.trim()))

    let tempCategory = category.split(',')
    let finalCategory = []
    tempCategory.forEach(data => finalCategory.push(data.trim()))

    const formData = new FormData()
    formData.append('title',title)
    formData.append('author',finalAuthor)
    formData.append('category',finalCategory)
    formData.append('rating',Number(rating))
    formData.append('price', Number(price))
    formData.append('stock', Number(stock))
    formData.append('description', description)
    console.log(image)
    formData.append('image',image[0])

    try{
      Swal.showLoading()
      const { data } = await Axios({
        method: 'post',
        url: '/books',
        data: formData,
        headers: {
          token: localStorage.getItem('token')
        }
      })
      history.push('/admin/listbook')
    }
    catch(err){
      console.log(err.response)
      Swal.fire({
        toast: true,
        icon: 'error',
        position: 'top',
        title: err.response.data || 'Opps, something wrong.',
      })
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    topFunction()
  })

  return (
    <div className="mb-5 mt-2">
      <p className="add-book-title">Add New Book</p>
      <form onSubmit={  (e) => handleSubmit(e) }>
        <div className="form-group">
          <input required value={title} onChange={ (e) => setTitle(e.target.value) } className="form-control" type="text" placeholder="Title"/>
        </div>
        <div className="form-group">
          <input required value={author} onChange={ (e) => setAuthor(e.target.value) } className="form-control" type="text" placeholder="Author"/>
        </div>
        <div className="form-group">
          <input required value={category} onChange={ (e) => setCategory(e.target.value)} className="form-control" type="text" placeholder="Category"/>
        </div>
        <div className="form-group">
          <input required value={rating} onChange={ (e) => setRating(e.target.value)} className="form-control" type="number" max="5" min="1" placeholder="Rating"/>
        </div>
        <div className="form-group">
          <input required value={price} onChange={ (e) => setPrice(e.target.value)} className="form-control" type="number" placeholder="Price"/>
        </div>
        <div className="form-group">
          <input required value={stock} onChange={ (e) => setStock(e.target.value)} className="form-control" type="number" placeholder="Stock"/>
        </div>
        <div className="form-group">
          <textarea onChange={ (e) => setDescription(e.target.value) } className="form-control" rows="3" placeholder="Description" value={ description }>{ description }</textarea>
        </div>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input onChange={ (e) => {
              setImageFile(e.target.value)
              setImage(e.target.files)
            }} type="file" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputImage123" />
            <label className="custom-file-label" htmlFor="inputImage123">{  image.length === 0 ? 'Choose File' : image[0].name }</label>
          </div>
        </div>
        <button onClick={() => history.push('/admin/history')} className="mr-2 btn btn-secondary">Cancel</button>
        <button type="submit" className="btn btn-green mr-2">Submit</button>
      </form>
    </div>
  )
}

export default AddBook