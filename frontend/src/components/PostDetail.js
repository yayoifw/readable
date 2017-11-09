import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost } from '../actions/post'
import { VOTE_UP, VOTE_DOWN } from "../actions/index";

import CommentList from './CommentList'
import LikeHand from '../assets/like.svg'
import DislikeHand from '../assets/dislike.svg'


const initialPost = {
  "id": "8xf0y6ziyjabvozdd253nd",
  "timestamp": 1467166872634,
  "title": "Udacity is the best place to learn React",
  "body": "Everyone says so after all.",
  "author": "thingtwo",
  "category": "react",
  "voteScore": 6,
  "deleted": false,
  "commentCount": 2
}

class PostDetail extends Component {
  state = {
    post: initialPost
  }

  timestampToDate(timestamp) {
    console.log(timestamp);
    const d = new Date(timestamp);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
  }

  voteUp(event) {

  }
  voteDown(event) {

  }

  renderComments() {
    if (this.props.showComments === "true") {
      return <CommentList/>
    } else {
      return null
    }
  }

  render () {
    //console.log("Props", this.props)
    const post = this.state.post
    return (
      <div className="post-detail">
        <div className="header">
          <h2 className="post-title">{post.title}</h2>
          <div className="post-meta">
            <p>{this.timestampToDate(post.timestamp)} by {post.author} </p>
            <p>Category: {post.category}</p>
            <p>Vote score: {post.voteScore}
            <a className="icon-vote-container" onClick={() => {this.props.onPostVote(post.id, VOTE_UP) }}>
              <img src={LikeHand} className="icon-vote" alt="vote down post icon"/>
            </a>
              <a className="icon-vote-container" onClick={() => {this.props.onPostVote(post.id, VOTE_DOWN) }}>
                <img src={DislikeHand} className="icon-vote-down" alt="vote up post icon"/>
              </a>
            </p>
          </div>
        </div>
        <div className="content">
          {post.body}
        </div>
        <div className="button-group">
          <button type="button" className="btn btn-info">Edit</button>
          <button type="button" className="btn btn-secondary">Delete</button>
        </div>
        {this.renderComments()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    post: state.post
  }
}

const mapDispatchToProps = () => ({
  onPostVote: votePost
})


export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);