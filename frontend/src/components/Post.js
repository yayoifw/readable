import React, { Component } from 'react'


class Post extends Component {
  render () {
    //console.log("Props", this.props)
    const post = this.props.post
    return (
      <div className="post">
      <div className="header">
        <div>
          <span>By {post.author}</span>
          <span>Oct 31, 2017</span>
        </div>
        <h1>{post.title}</h1>
      </div>
      <div className="content">{post.body}</div>
      </div>
    )
  }
}

export default Post;