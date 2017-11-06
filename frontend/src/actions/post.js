import {VOTE_DOWN, VOTE_UP, POST_VOTE, POST_EDIT, POST_DELETE} from './index'

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
    type: VOTE_POST,
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
