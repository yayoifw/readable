import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

let store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
  )

export default store