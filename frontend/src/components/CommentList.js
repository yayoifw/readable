import React, { Component } from 'react'
import Modal from 'react-modal'


class CommentList extends Component {

  renderCommentEditModal() {
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
  renderCommentAddButton() {
    return (<button className="btn btn-info">Add Comment</button>)
  }

  render() {
    const { comments } = this.props

    if ((!comments) || (comments.length === 0)) {
      return this.renderCommentAddButton()
    }

    return (
      <div>
        <p>{comments.length} comments</p>
        <ol className="comments">
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.body}</p>
              <a>Vote Up</a><a>Vote Down</a>
              <button>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ol>
        {this.renderCommentAddButton()}
        {this.renderCommentEditModal()}
      </div>
    )
  }
}

export default CommentList