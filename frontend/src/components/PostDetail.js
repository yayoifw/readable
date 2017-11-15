import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost, deletePost, editPost, fetchPostAsync } from '../actions/post'
import { fetchPostCommentsAsync, addComment, editComment } from "../actions/comment"
import { timestampToDate, renderVoteButtons } from "../utils/utils";
import { Link, withRouter } from 'react-router-dom'
import Modal from 'react-modal'
import CloseIcon from 'react-icons/lib/fa/close'
import uuidv1 from 'uuid/v1'

import CommentList from './CommentList'

class PostDetail extends Component {
  state = {
    modalOpen: false,
    commentId: null,
    commentBody: '',
    commentAuthor: '',
    newComment: true
  }

  onPostDeleteClick(postid) {
    this.props.onPostDelete(postid)
    this.props.history.push("/")
  }

  openModal = (comment = null) => {
    console.log('openModal', comment)

    this.setState({
      modalOpen: true,
      commentId: (comment) ? comment.id : uuidv1(),
      commentBody: (comment) ? comment.body : '',
      commentAuthor: (comment) ? comment.author : '',
      newComment: (comment) ? false : true
    })
  }

  closeModal = () => {
    this.setState({
      modalOpen: false,
    })
  }

  updateCommentBody = (val) => {
    this.setState({
      commentBody: val
    })
  }
  updateCommentAuthor = (val) => {
    this.setState({
      commentAuthor: val
    })
  }

  onSaveComment = () => {
    let comment = {
      id: this.state.commentId,
      body: this.state.commentBody.trim(),
      author: this.state.commentAuthor.trim(),
      parentId: this.props.post.id,
    }
    comment.timestamp = new Date().getTime()

    if (this.state.newComment) {
      this.props.addComment(comment)
    } else {
      this.props.editComment(comment)
    }
  }

  onEditCommentClick = (comment) => {
    this.openModal(comment)
  }
  onAddCommentClick() {
    this.openModal()
  }

  renderModal() {
    const modalTitle = this.state.newComment ? "Add Comment" : "Edit Comment"
    return (
      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        contentLabel="Modal"
        className="modal-panel"
        overlayClassName="modal-overlay"
      >
        <form>
          <CloseIcon size={30} onClick={this.closeModal} className="modal-close-btn"/>
          <h3>{modalTitle}</h3>
          <div className="form-group">
            <label htmlFor="postAuthor">Author</label>
            <input type="text" className="form-control" id="commentAuthor"
                   placeholder="Enter Author" value={this.state.commentAuthor}
                   onChange={(e) => this.updateCommentAuthor(e.target.value)}
                   disabled={!this.state.newComment}
            />
            <div className="form-group">
              <label htmlFor="commentBody">Body</label>
              <textarea type="text" className="form-control" id="commentBody"
                        placeholder="Enter Title" value={this.state.commentBody}
                        onChange={(e) => this.updateCommentBody(e.target.value)}
              />
            </div>
            <button className="btn btn-info" onClick={(e) => {
              this.onSaveComment(e)
            }}>Save
            </button>
          </div>
        </form>
      </Modal>
    )
  }

  renderPostControlButtons() {
    const { post } = this.props
    return (
        <div className="button-group">
          <Link to={`/edit/post/${post.id}`} className="btn btn-info post-btn">Edit</Link>
          <button onClick={() => {this.onPostDeleteClick(post.id)}} type="button" className="btn btn-secondary post-btn">Delete</button>
        </div>
      )
  }

  renderCommentAddButton() {
    return (<button className="btn btn-info" onClick={(e) => {this.onAddCommentClick()}}>Add Comment</button>)
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
        <CommentList comments={comments} onEditComment={this.onEditCommentClick}/>
        {this.renderCommentAddButton()}
        {this.renderModal()}
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
  addComment: addComment,
  editComment: editComment
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail));