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