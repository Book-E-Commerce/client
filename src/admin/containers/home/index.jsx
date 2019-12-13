import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import './style.scss'

import Navbar from '../../components/navbar'
import Navigation from '../../components/navigation'
import ListBook from '../listBook'
import History from '../history'
import EditBook from '../editBook'
import AddBook from '../addBook'
import PopularBook from '../../components/popularBook'

function Home (props) {
  
  const { path } = useRouteMatch()

  return(
    <>
      <Navbar />
      <div className="container">
        <p className="admin-title">Admin Dashboard</p>
        <div className="row">
          <div className="col-3">
            <Navigation />
            <PopularBook />
          </div>
          <div className="col-9">
            <Switch>
              <Route path={`${path}/listbook`}>
                <ListBook />
              </Route>
              <Route path={`${path}/history`}>
                <History />
              </Route>
              <Route path={`${path}/editbook/:id`}>
                <EditBook />
              </Route>
              <Route path={`${path}/addbook`}>
                <AddBook />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

