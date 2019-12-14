import React from 'react';
import MainNavbar from '../../components/main-navbar'
import './style.scss'

function Main() {
  return (
    <div>
      <MainNavbar />
      <div class="container">
        <div class="row">
          <div class="col-3">col-3</div>
          <div class="col-9">col-9</div>
        </div>
      </div>
    </div>
  )
}

export default Main;
