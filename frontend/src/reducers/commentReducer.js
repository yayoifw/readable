import {
  COMMENTS_FETCH,
  COMMENT_ADD,
  COMMENT_EDIT,
  COMMENT_DELETE
} from "../actions/index"

function comments(state = [], action) {
  switch (action.type) {
    case COMMENTS_FETCH:
      return action.data
    case COMMENT_ADD:
    case COMMENT_EDIT:
    case COMMENT_DELETE:
    default:
      return state
  }
}

export default comments