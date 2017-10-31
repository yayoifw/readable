import React, { Component } from 'react'

import comments from './comments.json'

class CommentList extends Component {
  render() {
    console.log('comments', comments)
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
        <button>Add</button>
      </div>
    )
  }
}

export default CommentList