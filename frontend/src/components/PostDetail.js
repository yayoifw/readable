import React, { Component } from 'react'
import CommentList from './CommentList'
import Uparrow from 'react-icons/lib/go/triangle-up'
import Dnarrow from 'react-icons/lib/go/triangle-down'

const style = {
  margin: 0,
  padding: '20px',
  background: 'white',
  border: '1px solid #d5d8df'
}

class PostDetail extends Component {
  timestampToDate(timestamp) {
    console.log(timestamp);
    const d = new Date(timestamp);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
  }
  render () {
    //console.log("Props", this.props)
    const post = this.props.post
    return (
      <div style={style}>
        <div className="header">
          <h2 className="post-title">{post.title}</h2>
          <div className="post-meta">
            <p>{this.timestampToDate(post.timestamp)} by {post.author} </p>
            <p>Vote score: {post.voteScore} <a><Uparrow /></a><a><Dnarrow /></a></p>
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