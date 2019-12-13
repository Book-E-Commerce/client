import React from 'react';
import './style.scss'

const home = () => {
  return(
    <>
      <p className="text">Ini Home User
        <span className="text--subtext">Home saya</span>
      </p>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
    </>
  )
}

export default home

