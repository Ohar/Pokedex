import {SET_TYPE_FILTER} from '../action-types'

export default function actionSetTypeFilter (filter) {
  return dispatch => {
    dispatch({type: SET_TYPE_FILTER, filter})
  }
}
