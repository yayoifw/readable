import React, { Component } from 'react'
import PostDetail from "./PostDetail";

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
              <PostDetail post={aPost} showDetails={false}/>
          </li>))}
      </ul>
    )
  }
}

export default PostList