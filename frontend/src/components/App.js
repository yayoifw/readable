import React, { Component } from 'react';
import '../bootstrap.css'
import '../App.css';
import PostDetail from './PostDetail'

const post = {
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

class App extends Component {
  render() {
    return (
    <PostDetail post={post}/>
    );
  }
}

export default App;
