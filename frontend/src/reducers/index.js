import { combineReducers } from 'redux'
import post from './postReducer'
import posts from './postsReducer'
import comments from './commentReducer'

export default combineReducers({
    post,
    posts,
    comments
})