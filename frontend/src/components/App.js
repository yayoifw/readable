import React, { Component } from 'react';
import '../bootstrap.css'
import '../App.css';
//import PostDetail from './PostDetail'



class App extends Component {
  state = {
    posts: null
  }

  componentDidMount() {
    const { store } = this.props

    store.subscribe(() => {
      this.setState(() => ({
        posts: store.getState()
      }))
    })
  }

  render() {
    console.log('my state', this.state)
    return (<div>Test</div>)
    // return (
    // <PostDetail post={post}/>
    // );
  }
}

export default App;
