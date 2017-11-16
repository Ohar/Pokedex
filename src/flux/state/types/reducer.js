import * as actionTypes from './action-types'
import DEFAULT_STATE from './default_state'

export default function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.START_LOADING_TYPES:
      return {
        ...state,
        loading: true,
      }

    case actionTypes.STOP_LOADING_TYPES:
      return {
        ...state,
        loading: false,
      }

    case actionTypes.SET_TYPE_LIST:
      return {
        ...state,
        list: action.list,
      }

    case actionTypes.SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      }

    default:
      return state
  }
}
