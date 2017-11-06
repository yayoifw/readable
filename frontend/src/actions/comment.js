import { COMMENT_ADD, COMMENT_EDIT, COMMENT_DELETE } from '../index'

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