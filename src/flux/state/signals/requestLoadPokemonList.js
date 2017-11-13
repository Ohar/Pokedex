import api from './../../../service/api'
import { SET_POKEMON_LIST, START_LOADING_POKEMON_LIST, STOP_LOADING_POKEMON_LIST } from '../action-types'

export default function signalRequestLoadPokemonList () {
  return dispatch => {
    dispatch({type: START_LOADING_POKEMON_LIST})

    api
      .getPokemonList()
      .then(pokemonList => {
        dispatch({type: STOP_LOADING_POKEMON_LIST})
        dispatch({
          type: SET_POKEMON_LIST,
          pokemonList,
        })
      })
      .catch(err => {
        dispatch({type: STOP_LOADING_POKEMON_LIST})
        console.error(err)
      })
  }
}
