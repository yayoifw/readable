import {
  POSTS_FETCH
} from "../actions/index";

function posts(state = [], action) {
  switch (action.type) {
    case POSTS_FETCH:
      return action.data
    default:
      return state
  }
}

export default posts
