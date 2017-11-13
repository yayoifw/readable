import {
  POST_VOTE,
  POSTS_FETCH,
  POST_DELETE,
  POST_EDIT,
  POST_ADD
} from "../actions/index";

function posts(state = [], action) {
  switch (action.type) {
    case POSTS_FETCH:
      // action.data is posts[]
      return action.data
    case POST_VOTE:
      // action.data is a post {}
      return state.map(aPost => ((aPost.id === action.data.id) ? action.data : aPost))
    case POST_DELETE:
      // action.data is a post {} with deleted=true
      return state.filter(aPost => (aPost.id !== action.data.id))
    case POST_EDIT:
      // action.data is a post {}
      return state
    case POST_ADD:
      // do not state.push(action.data), need to return a new array
      return [...state, action.data]
    default:
      return state
  }
}

export default posts
