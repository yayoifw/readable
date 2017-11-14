import {
  COMMENTS_FETCH,
  COMMENT_ADD,
  COMMENT_EDIT,
  COMMENT_DELETE,
  COMMENT_VOTE
} from "../actions/index"

function comments(state = [], action) {
  switch (action.type) {
    case COMMENTS_FETCH:
      return action.data

    case COMMENT_ADD:
      return [...state].push(action.data)

    case COMMENT_VOTE:
    case COMMENT_EDIT:
      return state.map(aComment => ((aComment.id === action.data.id) ? action.data : aComment))

    case COMMENT_DELETE:
      return state.filter(aComment => (aComment.id !== action.data.id))

    default:
      return state
  }
}

export default comments