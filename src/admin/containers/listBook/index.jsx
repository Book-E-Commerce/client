import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.scss'

function ListBook (props) {

  const history = useHistory()

  return (
    <div>
      <div className="row justify-content-between">
        <p className="list-book-tittle ml-3 mb-0">List Book</p>
        <p className="chart-container--date mr-3 mb-0">Wednesday, 20 December 2019</p>
        {/* <p className="lsit-book-title">Sales Chart</p> */}
      </div>
      <div className="list-book-table-container">
        <table className="table table-hover table-borderless">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Title</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price (Rp)</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={ () => history.push('/admin/editbook/1') }>
              <th scope="row">1</th>
              <td>Aku ada dipersimpangan jalan untuk selalu dan akan selalu bersama mu </td>
              <td>20</td>
              <td>80.000</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Laskar Pelangi</td>
              <td>15</td>
              <td>80.000</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Dikala embun menyingsing</td>
              <td>10</td>
              <td>80.000</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Laskar Pelangi</td>
              <td>15</td>
              <td>80.000</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Dikala embun menyingsing</td>
              <td>10</td>
              <td>80.000</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Laskar Pelangi</td>
              <td>15</td>
              <td>80.000</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Dikala embun menyingsing</td>
              <td>10</td>
              <td>80.000</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Laskar Pelangi</td>
              <td>15</td>
              <td>80.000</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Dikala embun menyingsing</td>
              <td>10</td>
              <td>80.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListBook