import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import configureStore from './configureStore'
import { apiMiddleware } from 'redux-api-middleware';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import rootReducer from './reducers/index'
import App from './components/App'

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      apiMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
