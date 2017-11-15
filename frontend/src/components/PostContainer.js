import React from 'react'

// Stateless Functional Component - props is passed in by React
const PostContainer = (props) => {
  const { children } = props
  return (
    <div className="flex-item-content">
      {children}
    </div>
  )
}

export default PostContainer