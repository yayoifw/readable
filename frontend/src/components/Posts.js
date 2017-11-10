import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsAsync } from "../actions/post";
import PostDetail from "./PostDetail";

class Posts extends Component {
  componentDidMount() {
    const { getPosts } = this.props
    getPosts();
  }

  render () {
    console.log("posts", this.props.posts)
    const { posts } = this.props
    return (
      <ul className="post-page">
        {posts.map(aPost =>
          (<li key={aPost.id}>
              <PostDetail post={aPost} showComments="false"/>
          </li>))}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = {
  getPosts: fetchPostsAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)