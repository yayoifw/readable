import React from 'react'
import { Link } from 'react-router-dom'
import { timestampToDate } from "../utils/utils";

const PostSummary = (props) => {
    const { post } = props
    return (
      <div className="post-detail">
        <div className="post-header">
          <Link to={`/post/${post.id}`}><h2 className="post-title">{post.title}</h2></Link>
          <div className="post-meta">
            <p>{timestampToDate(post.timestamp)} by {post.author} </p>
            <p>Category: {post.category}</p>
            <p>Vote score: {post.voteScore}
            </p>
          </div>
        </div>
        <div className="post-content">
          {post.body}
        </div>
      </div>
    )
}

export default PostSummary