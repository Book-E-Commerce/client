import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

function rootReducer (state={name: 'name'}, action) {
  switch(action.type) {

  }
}

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store