import React from 'react';
import store from './store/index'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import User from './user/containers/home'
import Admin from './admin/containers/home'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>  
          <Route path="/">
            <User />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
