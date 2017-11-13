import * as actionTypes from './action-types'
import DEFAULT_STATE from './default_state'

export default function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.SET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: action.pokemonList,
      }

    case actionTypes.START_LOADING_POKEMON_LIST:
      return {
        ...state,
        pokemonListLoading: true,
      }

    case actionTypes.STOP_LOADING_POKEMON_LIST:
      return {
        ...state,
        pokemonListLoading: false,
      }

    default:
      return state
  }
}
