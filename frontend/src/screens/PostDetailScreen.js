import React, { Component } from 'react'
import { fetchPostAsync } from '../actions/post'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Page from '../components/Page'
import PostDetail from '../components/PostDetail'


class PostDetailScreen extends Component {
  componentDidMount() {
    const { getPost } = this.props
    const postid = this.props.match.params.postid
    getPost(postid)
  }

  render() {
    const {post} = this.props
    if (!post) {
      return (
        <Page title="Post Detail">
          <h2>Loading...</h2>
        </Page>
      )
    }
    else if ((post.error) || (post.id === undefined)){
      return (
        <Page title="Post Detail">
          <h2>Post not found</h2>
          <Link className="btn btn-info" to="/">Back to All Posts</Link>
        </Page>
      )
    } else {
      return (
        <Page title="Post Detail">
          <PostDetail post={post}/>
        </Page>
      )
    }
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