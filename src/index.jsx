import ReactDOM from 'react-dom'
import Pokedex from './components/Pokedex'
import store from './flux/store'
import { Provider } from 'react-redux'
import React from 'react'

ReactDOM.render(
  <Provider store={store}>
    <Pokedex />
  </Provider>,
  document.getElementById('app'),
)
