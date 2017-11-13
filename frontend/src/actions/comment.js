import { COMMENT_ADD, COMMENT_EDIT, COMMENT_DELETE, COMMENTS_FETCH } from './index'
import * as api from '../api'

export const addComment = (comment) => dispatch => {
  api.addComment(comment).then(data => {
    dispatch({
      type: COMMENT_ADD,
      data
    })
  })
}

export const editComment = (comment) => dispatch => {
  api.editComment(comment).then(data => {
    dispatch({
      type: COMMENT_EDIT,
      data
    })
  })
}

export const deleteComment = (id) => dispatch => {
  api.deleteComment(id).then(data => {
    dispatch({
      type: COMMENT_DELETE,
      data
    })
  })
}

export const fetchPostCommentsAsync = (postid) => dispatch => {
  api.getPostComments(postid).then(data => {
    dispatch({
      type: COMMENTS_FETCH,
      data
    })
  })
}
