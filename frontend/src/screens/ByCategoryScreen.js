import React, { Component } from 'react'
import { connect } from 'react-redux'
import Page from '../components/Page'
import PostList from '../components/PostList'
import CategoryList from '../components/CategoryList'
import PostContainer from '../components/PostContainer'
import { Link } from 'react-router-dom'
import {sortPostsByTimestamp, sortPostsByVoteScore} from "../utils/utils";
import PostsVoteScoreSortControl from '../components/PostsSortControl'

const SORT_BY_TIMESTAMP = 'timestamp'
const SORT_BY_VOTESCORE = 'voteScore'

class ByCategoryScreen extends Component {
  state = {
    sortBy: SORT_BY_VOTESCORE,
    order: 'desc'
  }

  onVoteScoreSortClicked(event) {
    // toggle sort order
    const newOrder = (this.state.order === 'asc') ? 'desc' : 'asc'
    this.setState({
      sortBy: SORT_BY_VOTESCORE,
      order: newOrder
    })
  }

  onTimestampSortClicked(event) {
    // toggle sort order
    const newOrder = (this.state.order === 'asc') ? 'desc' : 'asc'
    this.setState({
      sortBy: SORT_BY_TIMESTAMP,
      order: newOrder
    })
  }

  render() {
    const categoryName = this.props.match.params.category || 'Unknown Category'
    let posts = this.props.posts.filter(aPost => (aPost.category === categoryName))

    let voteScoreOrder = 'desc'
    let timestampOrder = 'desc'
    if (this.state.sortBy === SORT_BY_VOTESCORE) {
      posts = sortPostsByVoteScore(posts, this.state.order)
      voteScoreOrder = this.state.order
    } else if (this.state.sortBy === SORT_BY_TIMESTAMP) {
      posts = sortPostsByTimestamp(posts, this.state.order)
      timestampOrder = this.state.order
    }
    return (
        <Page title={`Readable - category: ${categoryName}`}>
          <CategoryList/>
          <PostContainer>
            <Link to="/add/post" className="btn btn-info">Add Post</Link>
            <PostsVoteScoreSortControl callback={e => this.onVoteScoreSortClicked(e)} title="Sort by vote score" order={voteScoreOrder}/>
            <PostsVoteScoreSortControl callback={e => this.onTimestampSortClicked(e)} title="Sort by timestamp" order={timestampOrder}/>
            <PostList posts={posts}/>
          </PostContainer>
        </Page>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(ByCategoryScreen)
