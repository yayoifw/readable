import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../bootstrap.css'
import '../App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import ByCategoryScreen from '../screens/ByCategoryScreen'
import PostDetailScreen from '../screens/PostDetailScreen'

import { fetchCategories } from "../actions/categories";
import { fetchPostsAsync } from "../actions/post";
import AddEditPostScreen from "../screens/AddEditPostScreen";


class App extends Component {
  componentWillMount() {
    this.props.getCategories()
    this.props.getPosts()
  }

  render() {
    //api.getCatetories().then(data => { console.log(data) })
    // api.getPosts().then(data => { console.log(data) })
    // api.getPost("8xf0y6ziyjabvozdd253nd").then(data => { console.log(data) })
    // api.deletePost("8xf0y6ziyjabvozdd253nd").then(data => { console.log("deleted", data)})
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/category/:category" component={ByCategoryScreen} />
          <Route exact path="/post/:postid" component={PostDetailScreen} />
          <Route exact path="/add/post" component={AddEditPostScreen} />
          <Route exact path="/edit/post/:postid" component={AddEditPostScreen} />
        </div>
      </BrowserRouter>)
  }
}

const mapDispatchToProps = {
  getCategories: fetchCategories,
  getPosts: fetchPostsAsync
}

export default connect(null, mapDispatchToProps)(App);
