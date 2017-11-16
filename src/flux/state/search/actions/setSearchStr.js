import { SET_SEARCH_STRING } from '../action-types'

export default function actionSetSearchStr (str) {
  return dispatch => {
    dispatch({type: SET_SEARCH_STRING, str})
  }
}
