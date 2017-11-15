import React, { Component } from 'react'
import { fetchPostAsync } from '../actions/post'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Page from '../components/Page'
import PostDetail from '../components/PostDetail'
import CategoryList from '../components/CategoryList'
import PostContainer from '../components/PostContainer'


class PostDetailScreen extends Component {
  componentDidMount() {
    const { getPost } = this.props
    const postid = this.props.match.params.postid
    getPost(postid)
  }

  renderPostContent(post) {
    if (!post) {
      return (<h2 className="post-warning">Loading...</h2>)
    } else if ((post.error) || (post.id === undefined)) {
      return (<h2 className="post-warning">Post not found</h2>)
    } else {
      return (<PostDetail post={post}/>)
    }
  }

  render() {
    const {post} = this.props

    return (
      <Page title="Readable - Post Detail" showBackButton={true}>
        <CategoryList/>
        <PostContainer>
          {this.renderPostContent(post)}
        </PostContainer>
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
  }
}

const mapDispatchToProps = {
  getPost: fetchPostAsync,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailScreen);