import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import LoggedUser from './reducers/LoggedUser'
// import productDetails from './reducers/productDetails'

const rootReducer = combineReducers({
  // productDetails,
  LoggedUser
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store