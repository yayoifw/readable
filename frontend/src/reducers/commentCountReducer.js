import { COMMENTS_COUNT_FETCH } from '../actions/index'

/**
 * commentCount per post
 * {
 *   postid: numOfComments
 *  }
 */
function commentCount(state = {}, action) {
  switch (action.type) {
    case COMMENTS_COUNT_FETCH:
      const { postid, noOfComments } = action.data
      return {
        ...state,
        postid: noOfComments
      }
    default:
      return state
  }
}

export default commentCount