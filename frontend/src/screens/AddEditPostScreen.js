import React, { Component } from 'react'
import { fetchPostAsync } from '../actions/post'
import { connect } from 'react-redux'
import Page from '../components/Page'
import PostForm from '../components/PostForm'
import CategoryList from '../components/CategoryList'
import PostContainer from '../components/PostContainer'
import { renderLoader } from "../utils/utils";


class AddEditPostScreen extends Component {
  state = {
    isNew: true,
    loading: true
  }

  componentWillMount() {
    const { getPost } = this.props
    const postid = this.props.match.params.postid
    if (postid) {
      // edit an existing post
      this.setState({
        isNew: false,
        loading: true
      })
      getPost(postid).then(post => {
        // loading completed.
        this.setState({
          loading: false
        })
      })
    } else {
      // add new post
      this.setState({
        isNew: true,
        loading: false
      })
    }
  }

  onPostSave(post, addPostCallback) {
    addPostCallback(post)

  }

  renderPostLoader() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {renderLoader()}
      </div>
    )
  }

  render() {
    const post = (this.state.isNew) ? null : this.props.post
    const title = (this.state.isNew) ? 'Readable - New Post' : 'Readable - Edit Post'
    const loading = this.state.loading
    return (
      <Page title={title} showBackButton={true}>
        <CategoryList/>
        <PostContainer>
          { (loading) ? this.renderPostLoader() : (<PostForm post={post}/>) }
        </PostContainer>
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