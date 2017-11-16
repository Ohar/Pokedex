import * as actionTypes from './action-types'
import DEFAULT_STATE from './default_state'

export default function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.SET_SEARCH_STRING:
      return {
        ...state,
        str: action.str,
      }

    default:
      return state
  }
}
