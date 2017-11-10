import {CATEGORIES_FETCH} from './index'
import * as api from '../api'

export const fetchCategories = () => dispatch => {
  api.getCatetories().then(({categories}) => {
    dispatch({
      type: CATEGORIES_FETCH,
      categories
    })
  })
}