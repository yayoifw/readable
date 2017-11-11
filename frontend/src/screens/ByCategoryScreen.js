import React, { Component } from 'react'
import { connect } from 'react-redux'
import Page from '../components/Page'
import PostList from '../components/PostList'
import CategoryList from '../components/CategoryList'
import PostContainer from '../components/PostContainer'
import { Link } from 'react-router-dom'

class ByCategoryScreen extends Component {
  render() {
    const categoryName = this.props.match.params.category || 'Unknown Category'
    const posts = this.props.posts.filter(aPost => (aPost.category === categoryName))
    return (
        <Page title={`Category: ${categoryName}`}>
          <PostContainer>
            <Link to="/posts/add" className="btn btn-info">Add Post</Link>
            <PostList posts={posts} category={categoryName}/>
          </PostContainer>
          <CategoryList/>
        </Page>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(ByCategoryScreen)
