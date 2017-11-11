import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Page from '../components/Page'
import PostList from '../components/PostList'
import CategoryList from '../components/CategoryList'

class HomeScreen extends Component {
  render() {
    return (
      <Page title="All Posts">
        <Link to="/posts/add" className="btn btn-info">Add Post</Link>
        <CategoryList/>
        <PostList/>
      </Page>
    )
  }
}

export default HomeScreen