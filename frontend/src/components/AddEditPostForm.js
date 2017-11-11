import React, { Component } from 'react'
import Header from './Header'

class AddEditPostForm extends Component {
  render() {
    const { isAdd } = this.props
    const title = isAdd ? 'Add Post' : 'Edit Post'
    return (
      <Header title={title} />
    )
  }
}