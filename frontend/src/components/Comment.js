import React, { Component } from 'react'

import comments from './comments.json'

class Comment extends Component {
  render() {
    console.log('comments', comments)
    return (
      <ol className="comments">
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.body}
          </li>
        ))}
      </ol>
    )
  }
}

export default Comment