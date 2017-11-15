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

    case actionTypes.START_LOADING_TYPES:
      return {
        ...state,
        typesLoading: true,
      }

    case actionTypes.STOP_LOADING_TYPES:
      return {
        ...state,
        typesLoading: false,
      }

    case actionTypes.SET_POKEMON_LIST_FULL:
      return {
        ...state,
        pokemonListFull: action.pokemonListFull,
      }

    case actionTypes.SET_TYPE_FILTER_LIST:
      return {
        ...state,
        typeFilterList: action.typeFilterList,
      }

    case actionTypes.CHANGE_TYPE_FILTER:
      return {
        ...state,
        typeFilterList: state.typeFilterList.map(
          typeFilter => typeFilter.type === action.typeName
            ? {
              ...typeFilter,
              state: action.value,
            }
            : typeFilter,
        ),
      }

    case actionTypes.SET_SEARCH_STRING:
      return {
        ...state,
        searchStr: action.searchStr,
      }

    case actionTypes.SEARCH_POKEMON:
      return {
        ...state,
        pokemonList: state.pokemonListFull.filter(
          ({name}) => name.toLowerCase().includes(state.searchStr.toLowerCase()),
        ),
      }

    default:
      return state
  }
}
