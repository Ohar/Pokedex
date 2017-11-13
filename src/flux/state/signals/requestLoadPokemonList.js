import api from './../../../service/api'
import { SET_POKEMON_LIST } from '../action-types'

export default function signalRequestLoadPokemonList () {
  return dispatch => {
    api
      .getPokemonList()
      .then(pokemonList => {
        dispatch({
          type: SET_POKEMON_LIST,
          pokemonList,
        })
      })
      .catch(err => {
        console.error(err)
      })
  }
}
