import React, { Component } from 'react'
import { fetchPostsAsync } from "../actions/post";
import PostDetail from "./PostDetail";

class Posts extends Component {
  render () {
    return (
      <ul className="post-page">
        <li>
          <PostDetail showComments="true"/>
        </li>
        <li>
          <PostDetail showComments="false"/>
        </li>
      </ul>
    )
  }
}

export default Posts