import {POST_VOTE, POST_EDIT, POST_ADD, POST_DELETE, POST_FETCH, POSTS_FETCH} from './index'
import * as api from '../api'

export function fetchPostsAsync(category = null) {
  return async dispatch => {
    // Fetch list of all posts in array.
    // posts = [{post1}, {post2}, {post3}]
    const posts = await api.getPosts(category)

    // For each post, fetch comment list and count the number of comments.
    // noOfComments = [ 2, 0, 5 ]
    const noOfComments = await Promise.all(posts.map(async (aPost) => {
      let comments = await api.getPostComments(aPost.id)
      return comments.length;
    }))
    // Create a post object with additional field - noOfComments field
    // aPost = { id, title, body, ... noOfComments }
    const newPosts = posts.map((aPost, index) => ({ ...aPost,
        noOfComments: noOfComments[index]}))

    // Finally, fire PostsAction event
    dispatch(fetchPostsAction(newPosts))
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

export const editPost = (post) => dispatch => {
  api.updatePost(post).then(data => {
    dispatch(editPostAction(data))
  })
}
const editPostAction = (data) => ({
  type: POST_EDIT,
  data
})

export const addPost = (post) => dispatch => {
  api.addPost(post).then(data => {
    dispatch(addPostAction(data))
  })
}
const addPostAction = (data) => ({
  type: POST_ADD,
  data
})


// export function fetchPostAsync(postId) {
//   return async dispatch => {
//     const post = await api.getPost(postId)
//     const comments = await api.getPostComments(postId)
//     const aPost = {
//       ...post,
//       noOfComments: comments.length
//     }
//     dispatch(fetchPostAction(aPost))
//   }
// }
// const fetchPostAction = (data) => ({
//   type: POST_FETCH,
//   data
// })

// export function fetchPostsAsync(category = null) {
//   return dispatch => {
//     api.getPosts(category).then(data => {
//       dispatch(fetchPostsAction(data))
//     })
//   }
// }
// const fetchPostsAction = (data) => ({
//   type: POSTS_FETCH,
//   data
// })

