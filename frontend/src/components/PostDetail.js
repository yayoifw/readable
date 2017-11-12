import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost, deletePost, editPost, fetchPostAsync } from '../actions/post'
import { fetchPostCommentsAsync } from "../actions/comment"
import { VOTE_UP, VOTE_DOWN } from "../actions/index";
import { timestampToDate } from "../utils/utils";
import { Link } from 'react-router-dom'

import Modal from 'react-modal'
import CommentList from './CommentList'
import LikeHand from '../assets/like.svg'
import DislikeHand from '../assets/dislike.svg'


class PostDetail extends Component {
  state = {
    postEditModalOpen: false
  }

  componentDidMount() {
    const { getPost, getComments } = this.props
    const postid = this.props.match.params.postid
    getPost(postid)
    getComments(postid)
  }

  onPostDeleteClick(postid) {
    this.props.onPostDelete(postid)
    this.props.history.push("/")
  }

  renderPostEditModal() {
      return (
        <Modal
          className="modal"
          isOpen={this.state.postEditModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
        >
          <div>
            <input type='text' placeholder='Title' ref={(input) => this.titleInput = input}/>
            <input type='text' placeholder='Body' ref={(input) => this.bodyInput = input}/>
            <button>Save</button>
          </div>
        </Modal>
      )
  }

  renderVoteButtons() {
    const { post, onPostVote } = this.props
    return (
        <span>
        <a className="icon-vote-container" onClick={() => {onPostVote(post.id, VOTE_UP) }}>
          <img src={LikeHand} className="icon-vote" alt="vote down post icon"/>
        </a>
        <a className="icon-vote-container" onClick={() => {onPostVote(post.id, VOTE_DOWN) }}>
          <img src={DislikeHand} className="icon-vote-down" alt="vote up post icon"/>
        </a>
        </span>)
  }

  renderPostControlButtons() {
    const { post } = this.props
    return (
        <div className="button-group">
          <button type="button" className="btn btn-info">Edit</button>
          <button onClick={() => {this.onPostDeleteClick(post.id)}} type="button" className="btn btn-secondary">Delete</button>
        </div>
      )
  }

  render () {
    const { post, comments } = this.props
    if (!post) {
      return (
        <div>
          <h2>Post not found</h2>
          <Link to="/" >Back to All Posts</Link>
        </div>
      )
    } else {
      return (
        <div className="post-detail">
          <div className="post-header">
            <h2 className="post-title">{post.title}</h2>
            <div className="post-meta">
              <p>{timestampToDate(post.timestamp)} by {post.author} </p>
              <p>Category: {post.category}</p>
              <p>Vote score: {post.voteScore}
                {this.renderVoteButtons()}
              </p>
            </div>
          </div>
          <div className="post-content">
            {post.body}
          </div>
          {this.renderPostControlButtons()}
          <CommentList comments={comments}/>
          {this.renderPostEditModal()}
        </div>
      )
    }
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


export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);