import { combineReducers } from 'redux'
import post from './postReducer'
import posts from './postsReducer'
import comments from './commentReducer'
import categories from './categoriesReducer'
import commentCount from './commentCountReducer'

export default combineReducers({
    post,
    posts,
    comments,
    categories,
    commentCount
})