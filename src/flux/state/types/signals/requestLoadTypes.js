import api from './../../../../service/api'
import {
  SET_TYPE_LIST,
  START_LOADING_TYPES,
  STOP_LOADING_TYPES,
} from '../action-types'

export default function signalRequestLoadTypes () {
  return dispatch => {
    dispatch({type: START_LOADING_TYPES})

    api
      .getTypes()
      .then(list => {
        dispatch({type: STOP_LOADING_TYPES})
        dispatch({
          type: SET_TYPE_LIST,
          list,
        })
      })
      .catch(err => {
        dispatch({type: STOP_LOADING_TYPES})
        console.error(err)
      })
  }
}
