import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Axios from '../../../api/axios'
import './style.scss'
import Swal from 'sweetalert2'
import convertHttp from '../../helpers/convertHttp'

function EditBook (props) {

  const {id} = useParams()
  const history = useHistory()

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [rating, setRating] = useState(null)
  const [price, setPrice] = useState(null)
  const [stock, setStock] = useState(null)
  const [description, setDescription] = useState('')
  const [image, setImage] = useState([])
  const [imageURL, setImageURL] = useState('')
  const [bookId, setBookId] = useState('')

  async function handleSubmitEdit (e) {
    e.preventDefault()
    Swal.showLoading()

    // console.log(author)
    // let tempAuthor = author.split(',')
    // let finalAuthor = []
    // tempAuthor.forEach(data => finalAuthor.push(data.trim()))

    // let tempCategory = category.split(',')
    // let finalCategory = []
    // tempCategory.forEach(data => finalCategory.push(data.trim()))

    const formData = new FormData()
    formData.append('title',title)
    formData.append('author',author)
    formData.append('category',category)
    formData.append('rating',Number(rating || 1))
    formData.append('price', Number(price))
    formData.append('stock', Number(stock))
    formData.append('description', description)
    formData.append('image',image[0])

    try{
      const { data } = await Axios({
        method: 'patch',
        url: `/books/${bookId}`,
        data: formData,
        headers: {
          token: localStorage.getItem('token')
        }
      })
      fetchDetailData()
      Swal.fire({
        toast: true,
        icon: 'success',
        title: 'Edit successfully',
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      })
    }
    catch(err){
      Swal.close()
      console.log(err.response)
    }
  }

  async function fetchDetailData () {
    try{
      const { data } = await Axios({
        method: 'get',
        url: `/books/find-one/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
      setTitle(data.title)
      setAuthor(data.author)
      setCategory(data.category.join(','))
      setRating(data.rating)
      setPrice(data.price)
      setStock(data.stock)
      setDescription(data.description)
      setImageURL(data.image)
      setBookId(data._id)
    }
    catch(err){
      console.log(err.response)
    }
  }

  async function deleteBook (e) {
    e.preventDefault()

    try{
      Swal.showLoading()
      const { data } = await Axios({
        method: 'delete',
        url: `/books/${bookId}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
      history.push('/admin/listbook')
    }
    catch(err){
      Swal.fire({
        icon: 'error',
        position: 'top',
        title: err.response.data || 'Opps, something wrong.',
      })
      console.log(err.response)
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    fetchDetailData()
    topFunction()
  },[])

  return (
    <div className="mb-5 mt-2">
      <p className="add-book-title">Edit Book</p>
      <form>
        <div className="form-group">
          <input value={title} onChange={ (e) => setTitle(e.target.value) } className="form-control" type="text" placeholder="Title"/>
        </div>
        <div className="form-group">
          <input value={author} onChange={ (e) => setAuthor(e.target.value) } className="form-control" type="text" placeholder="Author"/>
        </div>
        <div className="form-group">
          <input value={category} onChange={ (e) => setCategory(e.target.value)} className="form-control" type="text" placeholder="Category"/>
        </div>
        <div className="form-group">
          <input value={rating} onChange={ (e) => setRating(e.target.value)} className="form-control" min="1" max="5" type="number" placeholder="Rating max 5.0"/>
        </div>
        <div className="form-group">
          <input value={price} onChange={ (e) => setPrice(e.target.value)} className="form-control" type="number" min="1" step="1" placeholder="Price"/>
        </div>
        <div className="form-group">
          <input value={stock} onChange={ (e) => setStock(e.target.value)} className="form-control" type="number" placeholder="Stock"/>
        </div>
        <div className="form-group">
          <textarea onChange={ (e) => setDescription(e.target.value) } className="form-control" rows="3" placeholder="Description" value={ description }>{ description }</textarea>
        </div>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input onChange={ (e) => setImage(e.target.files) } type="file" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputImage123" />
            <label className="custom-file-label" htmlFor="inputImage123">{  image.length === 0 ? 'Choose File' : image[0].name }</label>
          </div>
        </div>
        <button onClick={() => history.push('/admin/listbook')} className="mr-2 btn btn-secondary">Cancel</button>
        <button onClick={(e) => handleSubmitEdit(e)} className="btn btn-green mr-2">Update</button>
        <button onClick={(e) => deleteBook(e)} className="btn btn-admin-delete mr-2">Delete</button>
      </form>
        <img alt="book" className="mt-3" width="100%" src={convertHttp(imageURL)} />
    </div>
  )
}

export default EditBook