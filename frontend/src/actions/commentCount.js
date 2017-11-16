import { COMMENTS_COUNT_FETCH } from './index'
import * as api from '../api'

export const fetchCommentCountForPost = (postid) => dispatch => {
  api.getPostComments(postid).then(data => {
    let noOfComments = 0
    if (data && Array.isArray(data)) {
      noOfComments = data.length
    }
    dispatch({
      type: COMMENTS_COUNT_FETCH,
      data: { postid, noOfComments }
    })
  })
}