import {POST_VOTE, POST_EDIT, POST_DELETE, POST_FETCH, POSTS_FETCH} from './index'
import * as api from '../api'


export function fetchPostsAsync() {
  return dispatch => {
    api.getPosts().then(data => {
      dispatch(fetchPostsAction(data))
    })
  }
}
const fetchPostsAction = (data) => ({
  type: POSTS_FETCH,
  data
})


export function fetchPostAsync(postId) {
  return dispatch => {
    api.getPost(postId).then(data => {
      dispatch(fetchPostAction(data))
    })
  }
}
const fetchPostAction = (data) => ({
  type: POST_FETCH,
  data
})

export const votePost = (postId, voteType) => dispatch => {
  api.votePost(postId, voteType).then(data => {
    dispatch(votePostAction(data))
  })
}
const votePostAction = (data) => ({
  type: POST_VOTE,
  data
})

export const deletePost = (postId) => dispatch => {
  api.deletePost(postId).then(data => {
    dispatch(deletePostAction(data))
  })
}
const deletePostAction = (data) => ({
  type: POST_DELETE,
  data
})


const editPost = (post) => ({
  type: POST_EDIT,
  post
})
