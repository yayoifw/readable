import {
  POST_VOTE,
  POSTS_FETCH,
  POST_DELETE,
  POST_EDIT,
  POST_ADD,
  COMMENT_ADD,
  COMMENT_DELETE
} from "../actions/index";

function posts(state = [], action) {
  switch (action.type) {
    case POSTS_FETCH:
      // action.data is posts[]
      return action.data
    case POST_VOTE:
      // action.data is a post {}
      return state.map(aPost => ((aPost.id === action.data.id) ? { ...action.data, noOfComments: aPost.noOfComments } : aPost))
    case POST_DELETE:
      // action.data is a post {} with deleted=true
      return state.filter(aPost => (aPost.id !== action.data.id))
    case POST_EDIT:
      // action.data is a post {}
      return state.map(aPost => ((aPost.id === action.data.id) ? { ...action.data, noOfComments: aPost.noOfComments } : aPost))
    case POST_ADD:
      // do not state.push(action.data), need to return a new array
      const newPostWithNoOfComments = { ...action.data, noOfComments: 0 }
      return [...state, newPostWithNoOfComments]

    case COMMENT_ADD: {
      // action.data is comment {} object
      const parentPostId = action.data.parentId
      return state.map(aPost => {
        if (aPost.id === parentPostId) {
          return {...aPost, noOfComments: aPost.noOfComments+1}
        } else {
          return aPost
        }
      })
    }

    case COMMENT_DELETE: {
      // action.data is comment {} object
      const parentPostId = action.data.parentId
      return state.map(aPost => {
        if (aPost.id === parentPostId) {
          return {...aPost, noOfComments: aPost.noOfComments-1}
        } else {
          return aPost
        }
      })
    }

    default:
      return state
  }
}

export default posts
