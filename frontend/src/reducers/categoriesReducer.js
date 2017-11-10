import { CATEGORIES_FETCH } from "../actions/index";

function categories(state = [], action) {
  switch (action.type) {
    case CATEGORIES_FETCH:
      return action.categories
    default:
      return state
  }
}

export default categories