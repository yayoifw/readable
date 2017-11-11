import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../bootstrap.css'
import '../App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import ByCategoryScreen from '../screens/ByCategoryScreen'
import * as api from '../api'

import { fetchCategories } from "../actions/categories";


class App extends Component {
  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    //api.getCatetories().then(data => { console.log(data) })
    // api.getPosts().then(data => { console.log(data) })
    // api.getPost("8xf0y6ziyjabvozdd253nd").then(data => { console.log(data) })
    // api.deletePost("8xf0y6ziyjabvozdd253nd").then(data => { console.log("deleted", data)})
    // console.log('my state', this.state)
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/category/:category" component={ByCategoryScreen} />
        </div>
      </BrowserRouter>)
  }
}

const mapDispatchToProps = {
  getCategories: fetchCategories
}

export default connect(null, mapDispatchToProps)(App);
