import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../bootstrap.css'
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import ByCategoryScreen from '../screens/ByCategoryScreen'
import PostDetailScreen from '../screens/PostDetailScreen'

import { fetchCategories } from "../actions/categories";
import { fetchPostsAsync } from "../actions/post";
import AddEditPostScreen from "../screens/AddEditPostScreen";


class App extends Component {
  state = {
    loading: true
  }

  componentWillMount() {
    this.props.getCategories()
    this.setState({ loading: true })
    this.props.getPosts().then(posts => {
      this.setState({ loading: false })
    })
  }

  render() {
    //api.getCatetories().then(data => { console.log(data) })
    // api.getPosts().then(data => { console.log(data) })
    // api.getPost("8xf0y6ziyjabvozdd253nd").then(data => { console.log(data) })
    // api.deletePost("8xf0y6ziyjabvozdd253nd").then(data => { console.log("deleted", data)})

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={HomeScreen} loading={this.state.loading}/>
            <Route exact path="/add/post" component={AddEditPostScreen}/>
            <Route exact path="/edit/post/:postid" component={AddEditPostScreen}/>
            <Route exact path="/:category" component={ByCategoryScreen} loading={this.state.loading}/>
            <Route exact path="/:category/:postid" component={PostDetailScreen}/>
          </Switch>
        </div>
      </BrowserRouter>)
  }
}

const mapDispatchToProps = {
  getCategories: fetchCategories,
  getPosts: fetchPostsAsync
}

export default connect(null, mapDispatchToProps)(App);
