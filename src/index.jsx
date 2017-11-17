import ReactDOM from 'react-dom'
import Pokedex from './components/Pokedex'
import store from './flux/store'
import { Provider } from 'react-redux'
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/:page?' component={Pokedex}/>
    </Router>
  </Provider>,
  document.getElementById('app'),
)
