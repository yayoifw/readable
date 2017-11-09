import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsAsync } from "../actions/post";
import PostDetail from "./PostDetail";

const initialPost = {
  "id": "8xf0y6ziyjabvozdd253nd",
  "timestamp": 1467166872634,
  "title": "Udacity is the best place to learn React",
  "body": "Everyone says so after all.",
  "author": "thingtwo",
  "category": "react",
  "voteScore": 6,
  "deleted": false,
  "commentCount": 2
}

class Posts extends Component {
  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
  }

  render () {
    console.log("posts", this.props.posts)
    return (
      <ul className="post-page">
        <li>
          <PostDetail post={initialPost} showComments="true"/>
        </li>
        <li>
          <PostDetail post={initialPost} showComments="false"/>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  getPosts: fetchPostsAsync
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)