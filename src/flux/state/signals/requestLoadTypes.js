import api from './../../../service/api'
import {
  SET_TYPES,
  START_LOADING_TYPES,
  STOP_LOADING_TYPES,
} from '../action-types'

export default function signalRequestLoadTypes () {
  return dispatch => {
    dispatch({type: START_LOADING_TYPES})

    api
      .getTypes()
      .then(types => {
        dispatch({type: STOP_LOADING_TYPES})
        dispatch({
          type: SET_TYPES,
          types,
        })
      })
      .catch(err => {
        dispatch({type: STOP_LOADING_TYPES})
        console.error(err)
      })
  }
}
