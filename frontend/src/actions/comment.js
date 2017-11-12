import { COMMENT_ADD, COMMENT_EDIT, COMMENT_DELETE, COMMENTS_FETCH } from './index'
import * as api from '../api'

const addComment = (comment) => {
  return {
    type: COMMENT_ADD,
    comment
  }
}

const editComment = (comment) => {
  return {
    type: COMMENT_EDIT,
    comment
  }
}

const deleteComment = (id) => {
  return {
    type: COMMENT_DELETE,
    id
  }
}

export const fetchPostCommentsAsync = (postid) => dispatch => {
  api.getPostComments(postid).then(data => {
    dispatch({
      type: COMMENTS_FETCH,
      data
    })
  })
}
