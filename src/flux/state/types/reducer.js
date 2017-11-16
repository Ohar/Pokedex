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

    case actionTypes.SET_TYPE_FILTER_LIST:
      return {
        ...state,
        filterList: action.filterList,
      }

    case actionTypes.CHANGE_TYPE_FILTER:
      return {
        ...state,
        filterList: state.filterList.map(
          typeFilter => typeFilter.type === action.typeName
            ? {
              ...typeFilter,
              state: action.value,
            }
            : typeFilter,
        ),
      }

    default:
      return state
  }
}
