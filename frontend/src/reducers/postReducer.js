import {
  POST_DELETE,
  POST_EDIT, POST_FETCH,
  POST_VOTE
} from "../actions/index";

function post(state = null, action) {
  switch (action.type) {
    case POST_DELETE:
      return null
    case POST_VOTE:
    case POST_EDIT:
    case POST_FETCH:
      return action.data
    default:
      return state
  }
}

export default post