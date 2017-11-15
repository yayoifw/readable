import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const CategoryList = (props) => {
  const { categories } = props
  return (
    <div className="flex-item-sidebar">
      <h2>Categories</h2>
      <ul className="post-categories">
        {categories.map((aCat) => {
          return (
            <li key={aCat.path}>
              <Link to={`/category/${aCat.path}`}>{aCat.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  categories: state.categories
})

export default connect(mapStateToProps)(CategoryList)