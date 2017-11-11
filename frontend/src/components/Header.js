import React from 'react'

// Stateless Functional Component - props is passed in by React
const Header = (props) => {
  const { title } = props
  return (
    <div className="header">
      <h1 className="container">{title}</h1>
    </div>
  )
}

export default Header