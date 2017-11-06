import {
  COMMENT_ADD,
  COMMENT_EDIT,
  COMMENT_DELETE
} from "../actions/index"

function commentReducer(state = { }, action) {
  switch (action.type) {
    case COMMENT_ADD:
    case COMMENT_EDIT:
    case COMMENT_DELETE:
    default:
      return state
  }
}

export default commentReducer