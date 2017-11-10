import React, { Component } from 'react'
import PostList from '../components/PostList'

class HomeScreen extends Component {
  render() {
    return (
      <div className="screen">
          <h1>All Posts</h1>
          <PostList/>
      </div>
    )
  }
}

export default HomeScreen