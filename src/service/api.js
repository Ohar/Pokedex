import { API_URL } from './../../config.json'
import 'whatwg-fetch'

const URL = __DEV__
  ? API_URL.dev
  : API_URL.prod

const API = {
  getPokedex () {
    return fetch(`${URL}/pokedex`)
      .then(response => response.json())
      .then(pokedex => pokedex.filter(e => e.id)) // Exclude broken pokemondata
  },
  getTypes () {
    return fetch(`${URL}/types`)
      .then(response => response.json())
  },
}

module.exports = API
