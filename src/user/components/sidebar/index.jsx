import React from 'react';

function Sidebar() {
  return (
    <div>
      <h6 id="categories-title">Categories</h6>
      <button type="button" className="btn btn-outline-light main-container--sidebar--btns">Action</button>
      <button type="button" className="btn btn-outline-light main-container--sidebar--btns">Adventure</button>
      <button type="button" className="btn btn-outline-light main-container--sidebar--btns">Comedy</button>
      <button type="button" className="btn btn-outline-light main-container--sidebar--btns">Drama</button>
      <button type="button" className="btn btn-outline-light main-container--sidebar--btns">Romance</button>
      <button type="button" className="btn btn-outline-light main-container--sidebar--btns">Sci-Fi</button>
      <button type="button" className="btn btn-outline-light main-container--sidebar--btns">Supernatural</button>
    </div>
  )
}

export default Sidebar;
