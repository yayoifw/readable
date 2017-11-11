import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost, deletePost, editPost } from '../actions/post'
import { VOTE_UP, VOTE_DOWN } from "../actions/index";

import Modal from 'react-modal'
import CommentList from './CommentList'
import LikeHand from '../assets/like.svg'
import DislikeHand from '../assets/dislike.svg'


class PostDetail extends Component {
  state = {
    postEditModalOpen: true
  }

  timestampToDate(timestamp) {
    //console.log(timestamp);
    const d = new Date(timestamp);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
  }

  renderPostEditModal(show) {
    if (show) {
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
    else {
      return null
    }
  }

  renderVoteButtons(show) {
    const { post, onPostVote } = this.props
    if (show) {
      return (
        <span>
        <a className="icon-vote-container" onClick={() => {onPostVote(post.id, VOTE_UP) }}>
          <img src={LikeHand} className="icon-vote" alt="vote down post icon"/>
        </a>
        <a className="icon-vote-container" onClick={() => {onPostVote(post.id, VOTE_DOWN) }}>
          <img src={DislikeHand} className="icon-vote-down" alt="vote up post icon"/>
        </a>
        </span>)
    } else {
      return null
    }
  }

  renderPostControlButtons(show) {
    const { post, onPostDelete } = this.props
    if (show) {
      return (
        <div className="button-group">
          <button type="button" className="btn btn-info">Edit</button>
          <button onClick={() => {onPostDelete(post.id)}} type="button" className="btn btn-secondary">Delete</button>
        </div>
      )
    } else {
      return null
    }
  }

  renderComments(show) {
    if (show) {
      return <CommentList/>
    } else {
      return null
    }
  }

  render () {
    console.log("Post", this.props.post)
    const { post, showDetails } = this.props
    return (
      <div className="post-detail">
        <div className="post-header">
          <h2 className="post-title">{post.title}</h2>
          <div className="post-meta">
            <p>{this.timestampToDate(post.timestamp)} by {post.author} </p>
            <p>Category: {post.category}</p>
            <p>Vote score: {post.voteScore}
              {this.renderVoteButtons(showDetails)}
            </p>
          </div>
        </div>
        <div className="post-content">
          {post.body}
        </div>
        {this.renderPostControlButtons(showDetails)}
        {this.renderComments(showDetails)}
        {this.renderPostEditModal(showDetails)}
      </div>
    )
  }
}

const mapDispatchToProps = {
  onPostVote: votePost,
  onPostDelete: deletePost,
  onPostEdit: editPost
}


export default connect(undefined, mapDispatchToProps)(PostDetail);