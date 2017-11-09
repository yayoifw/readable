import React, { Component } from 'react';
import '../bootstrap.css'
import '../App.css';
import * as api from '../api'
import Posts from './Posts'


class App extends Component {
  state = {
    posts: null
  }

  componentDidMount() {
  }

  render() {
    // api.getPosts().then(data => { console.log(data) })
    // api.getPost("8xf0y6ziyjabvozdd253nd").then(data => { console.log(data) })
    // api.deletePost("8xf0y6ziyjabvozdd253nd").then(data => { console.log("deleted", data)})
    // console.log('my state', this.state)
    return (<Posts />)
    // return (
    // <PostDetail post={post}/>
    // );
  }
}

export default App;
