import * as actionTypes from './action-types'
import DEFAULT_STATE from './default_state'

export default function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.SET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: action.pokemonList,
      }

    default:
      return state
  }
}
