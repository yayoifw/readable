import {
  POST_DELETE,
  POST_EDIT, POST_FETCH,
  POST_VOTE,
  COMMENT_ADD,
  COMMENT_DELETE
} from "../actions/index";

function post(state = null, action) {
  switch (action.type) {
    case POST_EDIT:
    case POST_DELETE:
      return null
    case POST_VOTE:
      // Only update the matching post
      if ((state) && (state.id === action.data.id)) {
        return action.data
      } else {
        return state
      }
    case POST_FETCH:
      return action.data

    case COMMENT_ADD: {
      // action.data is comment {} object
      const parentPostId = action.data.parentId
      if (state.id === parentPostId) {
        return { ...state, noOfComments: state.noOfComments++ }
      }
      else return state
    }

    case COMMENT_DELETE: {
      // action.data is comment {} object
      const parentPostId = action.data.parentId
      if (state.id === parentPostId) {
        return {...state, noOfComments: state.noOfComments--}
      }
      else return state
    }

    default:
      return state
  }
}

export default post