import * as actionTypes from './action-types'
import DEFAULT_STATE from './default_state'

export default function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.SET_POKEMON_LIST:
      return {
        ...state,
        list: action.list,
      }

    case actionTypes.START_LOADING_POKEMON_LIST:
      return {
        ...state,
        loading: true,
      }

    case actionTypes.STOP_LOADING_POKEMON_LIST:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}
