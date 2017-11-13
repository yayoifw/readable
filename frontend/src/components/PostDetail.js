import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost, deletePost, editPost, fetchPostAsync } from '../actions/post'
import { fetchPostCommentsAsync } from "../actions/comment"
import { timestampToDate, renderVoteButtons } from "../utils/utils";
import { Link, withRouter } from 'react-router-dom'

import CommentList from './CommentList'

class PostDetail extends Component {
  state = {
    postEditModalOpen: false
  }

  componentDidMount() {
    const { getComments } = this.props
    const postid = this.props.post.id
    getComments(postid)
  }

  onPostDeleteClick(postid) {
    this.props.onPostDelete(postid)
    this.props.history.push("/")
  }

  // renderPostEditModal() {
  //     return (
  //       <Modal
  //         className="modal"
  //         isOpen={this.state.postEditModalOpen}
  //         onRequestClose={this.closeModal}
  //         contentLabel="Modal"
  //       >
  //         <div>
  //           <input type='text' placeholder='Title' ref={(input) => this.titleInput = input}/>
  //           <input type='text' placeholder='Body' ref={(input) => this.bodyInput = input}/>
  //           <button>Save</button>
  //         </div>
  //       </Modal>
  //     )
  // }

  renderPostControlButtons() {
    const { post } = this.props
    return (
        <div className="button-group">
          <Link to={`/edit/post/${post.id}`} className="btn btn-info">Edit</Link>
          <button onClick={() => {this.onPostDeleteClick(post.id)}} type="button" className="btn btn-secondary post-btn">Delete</button>
        </div>
      )
  }

  render () {
    const { post, comments, onPostVote } = this.props
    return (
      <div className="post-detail">
        <div className="post-header">
          <h2 className="post-title">{post.title}</h2>
          <div className="post-meta">
            <p>{timestampToDate(post.timestamp)} by {post.author} </p>
            <p>Category: {post.category}</p>
            <p>Vote score: {post.voteScore}
            {renderVoteButtons(post.id, onPostVote)}
            </p>
          </div>
        </div>
        <div className="post-content">
          {post.body}
        </div>
        {this.renderPostControlButtons()}
        <CommentList comments={comments}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
    comments: state.comments
  }
}

const mapDispatchToProps = {
  onPostVote: votePost,
  onPostDelete: deletePost,
  onPostEdit: editPost,
  getPost: fetchPostAsync,
  getComments: fetchPostCommentsAsync,
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail));