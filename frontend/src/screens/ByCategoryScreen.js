import React, { Component } from 'react'
import Page from '../components/Page'
import PostList from '../components/PostList'
import CategoryList from '../components/CategoryList'

class ByCategoryScreen extends Component {
  render() {
    const categoryName = this.props.match.params.category || 'Unknown Category'
    return (
        <Page title={`Category: ${categoryName}`}>
          <CategoryList/>
          <PostList category={categoryName} />
        </Page>
    )
  }
}

export default ByCategoryScreen