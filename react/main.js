import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { apiMiddleware } from 'redux-api-middleware';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import rootReducer from './reducers/index'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      apiMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop
  )
)

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
