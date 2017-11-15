import React from 'react'
import { Link } from 'react-router-dom'

// Stateless Functional Component - props is passed in by React
const Header = (props) => {
  const { title, showBackButton } = props
  return (
    <div className="header">
      <h1 className="flex-container">
        {showBackButton && (<Link to="/" className="back-btn" />)}
        {title}
      </h1>
    </div>
  )
}

export default Header