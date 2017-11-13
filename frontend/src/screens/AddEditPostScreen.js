import React, { Component } from 'react'
import { addPost } from '../actions/post'
import { connect } from 'react-redux'
import Page from '../components/Page'
import PostForm from '../components/PostForm'


class AddEditPostScreen extends Component {
  componentDidMount() {
    const { getPost } = this.props
    const postid = this.props.match.params.postid
    if (postid) {
      getPost(postid)
    }
  }

  onPostSave(post, addPostCallback) {
    addPostCallback(post)

  }

  render() {
    return (
      <Page title="Post Form">
        <PostForm />
      </Page>
    )
  }
}

const mapDispatchToProps = {
  onAddPost: addPost
}

export default connect(null, mapDispatchToProps)(AddEditPostScreen);