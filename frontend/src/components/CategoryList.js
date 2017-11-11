import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const CategoryList = (props) => {
  const { categories } = props
  return (
    <ul>
      {categories.map((aCat) => (
        <li key={aCat.path}>
          <Link to={`/category/${aCat.path}`}>{aCat.name}</Link>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = (state) => ({
  categories: state.categories
})

export default connect(mapStateToProps)(CategoryList)