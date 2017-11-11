import React, { Component } from 'react'
import Page from '../components/Page'
import PostList from '../components/PostList'
import { Link } from 'react-router-dom'

class HomeScreen extends Component {
  render() {
    return (
      <Page title="All Posts">
        <Link to="/posts/newpost" className="btn btn-info">Add Post</Link>
        <PostList/>
      </Page>
    )
  }
}

export default HomeScreen