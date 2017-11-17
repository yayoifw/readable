import React, { Component } from 'react'
import { connect } from 'react-redux'
import Page from '../components/Page'
import PostList from '../components/PostList'
import CategoryList from '../components/CategoryList'
import PostContainer from '../components/PostContainer'
import {sortPostsByTimestamp, sortPostsByVoteScore} from "../utils/utils";
import PostsSortControl from '../components/PostsSortControl'
import { renderAddPostButton } from "../utils/utils";

const SORT_BY_TIMESTAMP = 'timestamp'
const SORT_BY_VOTESCORE = 'voteScore'

class HomeScreen extends Component {
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
    let posts = this.props.posts
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
      <Page title="Readable - All Posts">
        <CategoryList/>
        <PostContainer>
          {renderAddPostButton()}
          <div className="post-sort-control-group">
            <PostsSortControl callback={e => this.onVoteScoreSortClicked(e)} title="Sort by vote score"
                              order={voteScoreOrder}/>
            <PostsSortControl callback={e => this.onTimestampSortClicked(e)} title="Sort by timestamp"
                              order={timestampOrder}/>
          </div>
          <PostList posts={posts}/>
        </PostContainer>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(HomeScreen)