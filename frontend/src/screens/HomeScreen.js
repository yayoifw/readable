import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Page from '../components/Page'
import PostList from '../components/PostList'
import CategoryList from '../components/CategoryList'
import PostContainer from '../components/PostContainer'

class HomeScreen extends Component {
  state = {
    sortBy: 'voteScore',
    order: 'asc'
  }

  sortByVoteScore(order) {
    this.setState({ order })
  }

  render() {
    const posts = this.props.posts
    return (
      <Page title="All Posts">
        <PostContainer>
          <Link to="/posts/add" className="btn btn-info">Add Post</Link>
          <a onClick={() => {this.sortByVoteScore('asc')}}>Sort by vote (asc)</a>
          <a onCLick={() => {this.sortByVoteScore('desc')}}>Sort by vote (desc)</a>
          <PostList posts={posts}/>
        </PostContainer>
        <CategoryList/>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(HomeScreen)