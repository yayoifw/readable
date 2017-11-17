import { combineReducers } from 'redux'
import post from './postReducer'
import posts from './postsReducer'
import comments from './commentReducer'
import categories from './categoriesReducer'

export default combineReducers({
    post,
    posts,
    comments,
    categories
})