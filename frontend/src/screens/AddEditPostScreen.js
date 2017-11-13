import React, { Component } from 'react'
import { fetchPostAsync } from '../actions/post'
import { connect } from 'react-redux'
import Page from '../components/Page'
import PostForm from '../components/PostForm'


class AddEditPostScreen extends Component {
  state = {
    isNew: (!this.props.match.params.postid) ? true : false
  }

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
    const post = (this.state.isNew) ? null : this.props.post
    return (
      <Page title="Post Form">
        <PostForm post={post}/>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  post: state.post
})

const mapDispatchToProps = {
  getPost: fetchPostAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditPostScreen);