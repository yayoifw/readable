import React, { Component } from 'react';
import '../bootstrap.css'
import '../App.css';
import Posts from './PostList'
import { BrowserRouter, Route } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import ByCategoryScreen from '../screens/ByCategoryScreen'


class App extends Component {
  render() {
    // api.getPosts().then(data => { console.log(data) })
    // api.getPost("8xf0y6ziyjabvozdd253nd").then(data => { console.log(data) })
    // api.deletePost("8xf0y6ziyjabvozdd253nd").then(data => { console.log("deleted", data)})
    // console.log('my state', this.state)
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/:category" component={ByCategoryScreen} />
        </div>
      </BrowserRouter>)
  }
}

export default App;
