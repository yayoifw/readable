import React, { Component } from 'react'
import CommentList from './CommentList'
import Uparrow from 'react-icons/lib/go/triangle-up'
import Dnarrow from 'react-icons/lib/go/triangle-down'
import LikeHand from '../assets/like.svg'
import DislikeHand from '../assets/dislike.svg'

const style = {
  margin: 0,
  padding: '20px',
  background: 'white',
  border: '1px solid #d5d8df'
}

class PostDetail extends Component {
  state = {
    voteScore: post.voteScore
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
  render () {
    //console.log("Props", this.props)
    const post = this.props.post
    return (
      <div className="post-detail">
        <div className="header">
          <h2 className="post-title">{post.title}</h2>
          <div className="post-meta">
            <p>{this.timestampToDate(post.timestamp)} by {post.author} </p>
            <p>Category: {post.category}</p>
            <p>Vote score: {post.voteScore}
            <a className="icon-vote-container" onClick={this.voteUp}>
              <img src={LikeHand} className="icon-vote"/>
            </a>
              <a className="icon-vote-container">
                <img src={DislikeHand} className="icon-vote-down"/>
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
        <hr />
        <CommentList/>
      </div>
    )
  }
}

export default PostDetail;