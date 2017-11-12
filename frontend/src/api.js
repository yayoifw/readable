
const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': 'Basic '+btoa('username:password'),
}

export const getCatetories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())

export const getPosts = (category = null) => {
  const url = (category) ? `${api}/${category}/posts` : `${api}/posts`
  return fetch(url, {headers})
    .then(res => res.json())
}

export const getPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())

export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, { method: 'DELETE', headers })
    .then(res => res.json())

export const updatePost = (post) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ post: post.title, body: post.body })
  }).then(res => res.json())

export const votePost = (postId, voteType) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: voteType })
  }).then(res => res.json())

export const getPostComments = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())

