import {
  POST_DELETE,
  POST_EDIT,
  POST_VOTE
} from "../actions/index";

function post(state = {}, action) {
  switch (action.type) {
    case POST_VOTE:
    case POST_EDIT:
    case POST_DELETE:
      return action.data
    default:
      return state
  }
}

export default post