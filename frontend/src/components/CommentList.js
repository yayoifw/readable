import React, { Component } from 'react'
import Modal from 'react-modal'
import { timestampToDate, renderVoteButtons } from "../utils/utils";
import { voteComment, deleteComment } from '../actions/comment'
import { connect } from 'react-redux'


class CommentList extends Component {
  state = {
    commentEditModalOpen: false
  }
  renderCommentEditModal() {
      return (
        <Modal
          className="modal"
          isOpen={this.state.commentEditModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
        >
          <div>
            <input type='text' placeholder='Title' value="Modal Title" ref={(input) => this.titleInput = input}/>
            <input type='text' placeholder='Body' value="Modal Body" ref={(input) => this.bodyInput = input}/>
            <button>Save</button>
          </div>
        </Modal>
      )
  }

  onCommentDeleteClick(commentid) {
    this.props.onDelete(commentid)
  }

  renderCommentControlButtons(comment, onEditCallback) {
    return (
      <div className="button-group">
        <button onClick={() => {onEditCallback(comment)}} type="button" className="btn btn-info">Edit</button>
        <button onClick={() => {this.onCommentDeleteClick(comment.id)}} type="button" className="btn btn-secondary post-btn">Delete</button>
      </div>
    )
  }

  render() {
    const { comments, onVote, onEditComment } = this.props

    if ((!comments) || (comments.length === 0)) {
      return null
    }

    return (
      <div>
        <p>{comments.length} comments</p>
        <ol className="comments">
          {comments.map((comment) => (
            <li key={comment.id}>
              <div className="post-meta">
                <p>{timestampToDate(comment.timestamp)} by {comment.author} </p>
                <p>Vote score: {comment.voteScore}
                  {renderVoteButtons(comment.id, onVote)}
                </p>
              </div>
              <div className="post-content">
                {comment.body}
              </div>
              {this.renderCommentControlButtons(comment, onEditComment)}
            </li>
          ))}
        </ol>
        {this.renderCommentEditModal()}
      </div>
    )
  }
}

const mapDispatchToProps = {
  onVote: voteComment,
  onDelete: deleteComment,
}

export default connect(null, mapDispatchToProps)(CommentList)
