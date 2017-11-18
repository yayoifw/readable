import React from 'react'
import { VOTE_UP, VOTE_DOWN } from "../actions/index";
import LikeHand from '../assets/like.svg'
import DislikeHand from '../assets/dislike.svg'
import { Link } from 'react-router-dom'

export function sortPostsByVoteScore(posts, order) {
  if (order === 'asc')
    return posts.sort((a,b) => (a.voteScore - b.voteScore))
  else
    return  posts.sort((a,b) => (b.voteScore - a.voteScore))
}

export function sortPostsByTimestamp(posts, order) {
  if (order === 'asc')
    return posts.sort((a,b) => (a.timestamp - b.timestamp))
  else
    return  posts.sort((a,b) => (b.timestamp - a.timestamp))
}

export function timestampToDate(timestamp) {
  //console.log(timestamp);
  const d = new Date(timestamp);
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return d.toLocaleDateString('en-US', options);
}

export function renderVoteButtons(postid, onPostVoteCallback) {
    // () => {onPostVote(post.id, VOTE_UP)
    return (
        <span>
        <a className="icon-vote-container" onClick={(e) => onPostVoteCallback(postid, VOTE_UP)}>
          <img src={LikeHand} className="icon-vote" alt="vote down post icon"/>
        </a>
        <a className="icon-vote-container" onClick={(e) => onPostVoteCallback(postid, VOTE_DOWN)}>
          <img src={DislikeHand} className="icon-vote-down" alt="vote up post icon"/>
        </a>
        </span>)
}

export function renderPostControlButtons(post, onPostDeleteCallback) {
  return (
    <div className="button-group">
      <Link to={`/edit/post/${post.id}`} className="btn btn-info post-btn">Edit</Link>
      <button onClick={(e) => {
        onPostDeleteCallback(post.id)
      }} type="button" className="btn btn-secondary post-btn">Delete
      </button>
    </div>
  )
}

export function renderAddPostButton() {
  return (
    <div className="post-add">
      <Link to="/add/post" className="post-add-btn">Add Post</Link>
    </div>
  )
}

export function renderLoader() {
  return (<div className="loader"></div>);
}