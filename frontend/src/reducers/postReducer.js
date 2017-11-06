import {
  POST_DELETE,
  POST_EDIT,
  POST_VOTE
} from "../actions/index";

const initialPosts = [{
  "id": "8xf0y6ziyjabvozdd253nd",
  "timestamp": 1467166872634,
  "title": "Udacity is the best place to learn React",
  "body": "Everyone says so after all.",
  "author": "thingtwo",
  "category": "react",
  "voteScore": 6,
  "deleted": false,
  "commentCount": 2
}]

function postReducer(state = { posts: initialPosts }, action) {
  switch (action.type) {
    case POST_VOTE:
      return state
      break;
    case POST_EDIT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.post.id)
            return action.post
          else
            return post
        })
      }
      break;
    case POST_DELETE:
      return {
        ...state,
        posts: state.posts.filter(post => (post.id !== action.post.id))
      }
      break;
    default:
      return state
  }

}

export default postReducer