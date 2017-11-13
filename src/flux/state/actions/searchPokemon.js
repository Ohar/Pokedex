import { SEARCH_POKEMON, SET_SEARCH_STRING } from '../action-types'

export default function actionSearchPokemon (searchStr) {
  return dispatch => {
    dispatch({type: SET_SEARCH_STRING, searchStr})
    dispatch({type: SEARCH_POKEMON})
  }
}
