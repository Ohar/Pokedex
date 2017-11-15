import { CHANGE_TYPE_FILTER} from '../action-types'

export default function actionChangeTypeFilter (typeName, value) {
  return dispatch => {
    dispatch({type: CHANGE_TYPE_FILTER, typeName, value})
  }
}
