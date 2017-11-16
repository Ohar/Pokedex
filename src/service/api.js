import { API_URL } from './../../config.json'
import 'whatwg-fetch'

const API = {
  getPokedex () {
    return fetch(`${API_URL}/pokedex`)
      .then(response => response.json())
      .then(pokedex => pokedex.filter(e => e.id)) // Exclude broken pokemondata
  },
  getTypes () {
    return fetch(`${API_URL}/types`)
      .then(response => response.json())
  },
}

module.exports = API
