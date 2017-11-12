import React, { Component } from 'react'
import PostSummary from "./PostSummary";

class PostList extends Component {
  render () {
    console.log("PostList posts", this.props.posts)
    const { posts } = this.props

    if (posts.length === 0) return (<p>No Post Found</p>)
    else
    return (
      <ul className="post-page">
        {posts.map(aPost =>
          (<li key={aPost.id}>
              <PostSummary post={aPost} />
          </li>))}
      </ul>
    )
  }
}

export default PostList