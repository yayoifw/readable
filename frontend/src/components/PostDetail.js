import React, { Component } from 'react'
import Comment from './Comment'

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
    return (d.getDate() +'/'+ d.getMonth() +'/'+ d.getFullYear())
  }
  render () {
    //console.log("Props", this.props)
    const post = this.props.post
    return (
      <div style={style}>
        <div className="header">
          <div>
            <span>By {post.author}, </span>
            <span>{this.timestampToDate(post.timestamp)}</span>
          </div>
          <h2>{post.title}</h2>
        </div>
        <div className="content">{post.body}
        <Comment />
        </div>
      </div>
    )
  }
}

export default PostDetail;