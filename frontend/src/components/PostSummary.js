import React from 'react'
import { Link } from 'react-router-dom'
import { timestampToDate, renderVoteButtons } from "../utils/utils"
import { votePost } from '../actions/post'
import { connect } from 'react-redux'
import CommentIcon from 'react-icons/lib/md/comment'

const PostSummary = (props) => {
  const {post, onPostVote } = props
  return (
    <div className="post-detail">
      <div className="post-header">
        <Link to={`/${post.category}/${post.id}`}><h2 className="post-title">{post.title}</h2></Link>
        <div className="post-meta">
          <p>{timestampToDate(post.timestamp)} by {post.author} </p>
          <p>Category: {post.category}</p>
          <p>Vote score: {post.voteScore}
            {renderVoteButtons(post.id, onPostVote)}
          </p>
          <p><CommentIcon className="comment-icon" />{post.noOfComments} Comments</p>
        </div>
      </div>
      <div className="post-content">
        {post.body}
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  onPostVote: votePost
}

export default connect(null, mapDispatchToProps)(PostSummary)