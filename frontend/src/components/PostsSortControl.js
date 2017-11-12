import React from 'react'

const PostsSortControl = (props) => {
  const { callback, title, order } = props
  const newOrder =  (order === 'asc') ? 'desc' : 'asc'
  return (<a className="btn btn-info post-btn" onClick={callback}>{title} ({newOrder})</a>)
}

export default PostsSortControl