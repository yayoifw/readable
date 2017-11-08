import {VOTE_DOWN, VOTE_UP, POST_VOTE, POST_EDIT, POST_DELETE, POST_FETCH, POSTS_FETCH} from './index'
import * as api from '../api'


export function fetchPostsAsync() {
  return dispatch => {
    api.getPosts().then(data => {
      dispatch(fetchPosts(data))
    })
  }
}

/**
 * Action Creator
 * @param data -- [] array of posts
 */
const fetchPosts = (data) => ({
  type: POSTS_FETCH,
  data
})


export function fetchPostAsync(postId) {
  return dispatch => {
    api.getPost(postId).then(data => {
      dispatch(fetchPost(data))
    })
  }
}

/**
 * Action Creator
 * @param data -- {} post object
 */
const fetchPost = (data) => ({
  type: POST_FETCH,
  data
})

/**
 * Action Creator:
 * @param post
 * @param vote_type
 */
const votePost = ({post, vote_type}) => {
  switch (vote_type) {
    case VOTE_UP:
      post.voteScore++
      break;
    case VOTE_DOWN:
      post.voteScore--
      break;
  }

  return
  {
    type: POST_VOTE,
    post
  }
}

const deletePost = (id) => {
  return
  {
    type: POST_DELETE
    id
  }
}

const editPost = (post) => ({
  type: POST_EDIT,
  post
})
