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
    order: 'desc'
  }

  onSortByVoteScore(order) {
    this.setState({
      sortBy: 'voteScore',
      order
    })
  }

  sortPostsByVoteScore(posts, order) {
    if (order === 'asc')
      return posts.sort((a,b) => (a.voteScore - b.voteScore))
    else
      return  posts.sort((a,b) => (b.voteScore - a.voteScore))
  }

  renderPostsSortControl() {
    if (this.state.order === 'asc') {
      return (<a className="btn btn-info" onClick={() => {
        this.onSortByVoteScore('desc')
      }}>Sort by vote (desc)</a>)
    } else {
      return (<a className="btn btn-info" onClick={() => {this.onSortByVoteScore('asc')}}>Sort by vote (asc)</a>)
    }
  }

  render() {
    let posts = this.props.posts
    posts = this.sortPostsByVoteScore(posts, this.state.order)
    return (
      <Page title="All Posts">
        <PostContainer>
          <Link to="/posts/add" className="btn btn-info">Add Post</Link>
          {this.renderPostsSortControl()}
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