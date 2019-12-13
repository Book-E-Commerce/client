import React, { useState } from 'react'
import './style.scss'

function AddBook (props) {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [rating, setRating] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  return (
    <div className="mb-5 mt-2">
      <p className="add-book-title">Add New Book</p>
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
          <input value={rating} onChange={ (e) => setRating(e.target.value)} className="form-control" type="number" placeholder="Rating max 5.0"/>
        </div>
        <div className="form-group">
          <input value={price} onChange={ (e) => setPrice(e.target.value)} className="form-control" type="number" placeholder="Price"/>
        </div>
        <div className="form-group">
          <input value={stock} onChange={ (e) => setStock(e.target.value)} className="form-control" type="number" placeholder="Stock"/>
        </div>
        <div className="form-group">
          <textarea onChange={ (e) => setDescription(e.target.value) } className="form-control" rows="3" placeholder="Description">{ description }</textarea>
        </div>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="inputGroupFile03" />
            <label className="custom-file-label">Choose file</label>
          </div>
        </div>
        <button type="submit" className="btn btn-green mr-2">Submit</button>
        <button className="btn btn-salmon">Reset</button>
      </form>
    </div>
  )
}

export default AddBook