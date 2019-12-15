import React from 'react';
import { useHistory, Link } from "react-router-dom";

function Sidebar() {
  const history = useHistory()

  return (
    <div>
      <center>
        <h5 id="categories-title">Categories</h5>
        <button onClick={() => history.push('/home/categories')} type="button" className="btn main-container--sidebar--btns">Action</button>
        <button type="button" className="btn main-container--sidebar--btns">Adventure</button>
        <button type="button" className="btn main-container--sidebar--btns">Comedy</button>
        <button type="button" className="btn main-container--sidebar--btns">Drama</button>
        <button type="button" className="btn main-container--sidebar--btns">Romance</button>
        <button type="button" className="btn main-container--sidebar--btns">Sci-Fi</button>
        <button type="button" className="btn main-container--sidebar--btns">Supernatural</button>
      </center>
    </div>
  )
}

export default Sidebar;
