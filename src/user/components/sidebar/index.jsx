import React, { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import axios from '../../../api/axios'

function Sidebar() {
  const history = useHistory()
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = () => {
    axios.get('/books/get-categories')
      .then(({data}) => {
        setCategories(data)
      })
  }

  return (
    <div>
      <center>
        <h5 id="categories-title">Categories</h5>
        {
          categories.map((category, i) => {
            return <button key={i} type="button" className="btn main-container--sidebar--btns">{category.category}</button>
          })
        }
      </center>
    </div>
  )
}

export default Sidebar;
