import React from 'react'

// Stateless Functional Component - props is passed in by React
const Content = (props) => {
  const { children } = props
  return (
    <div className="content">
      <div className="flex-container">{children}</div>
    </div>
  )
}

export default Content