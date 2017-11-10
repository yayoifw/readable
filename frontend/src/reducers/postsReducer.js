import {
  POST_VOTE,
  POSTS_FETCH,
  POST_DELETE,
  POST_EDIT
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
    default:
      return state
  }
}

export default posts
