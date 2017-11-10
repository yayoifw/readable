import React, { Component } from 'react'
import PostList from '../components/PostList'

class ByCategoryScreen extends Component {
  render() {
    const categoryName = this.props.match.params.category || 'Unknown Category'
    return (
      <div>
        <h1>Category: {categoryName}</h1>
        <PostList category={categoryName} />
      </div>
    )
  }
}

export default ByCategoryScreen