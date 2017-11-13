import React, { Component } from 'react'
import { addPost, editPost } from "../actions/post"
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import { withRouter } from 'react-router-dom'

class PostForm extends Component {
  state = {
    id: uuidv1(),
    title: '',
    body: '',
    author: '',
    category: '',
    formErrors: {},
    isNew: true
  }

  componentWillMount() {
    let { post } = this.props
    if (post && post.id) {
      this.setState({
        id:       post.id,
        title:    post.title,
        body:     post.body,
        author:   post.author,
        category: post.category,
        isNew: false
      })
    }
  }

  updateTitle(text) {
    this.setState({
      title: text,
    })
  }

  updateBody(text) {
    this.setState({
      body: text,
    })
  }

  updateAuthor(text) {
    this.setState({
      author: text,
    })
  }

  updateCategory(cat) {
    this.setState({
      category: cat,
    })
  }

  validateField(fieldName, value, validationErrors = {}) {
    switch (fieldName) {
      case 'title':
        if (!value) validationErrors.title = 'Post title cannot be empty.'
        break
      case 'body':
        if (!value) validationErrors.body = 'Post body cannot be empty.'
        break
      case 'author':
        if (!value) validationErrors.author = 'Post author cannot be empty.'
        break
      default:
        break
    }
  }

  onSavePost(e) {
    e.preventDefault()

    let validationErrors = {}
    this.validateField('title',   this.state.title.trim(), validationErrors)
    this.validateField('body',    this.state.body.trim(), validationErrors)
    this.validateField('author',  this.state.author.trim(), validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      this.setState({
        formErrors: validationErrors
      })
      return
    }

    // Create post
    let post = {
      id:       this.state.id,
      title:    this.state.title.trim(),
      body:     this.state.body.trim(),
      author:   this.state.author.trim(),
      category: this.state.category,
    }
    post.timestamp = new Date().getTime()
    if (!this.state.category) post.category = this.props.categories[0].name

    if (this.state.isNew) {
      this.props.addPost(post)
    } else {
      this.props.editPost(post)
    }
    this.props.history.push("/")
  }

  onCalcelPost(e) {
    e.preventDefault()
    this.props.history.push("/")
  }


  render() {
    const { title, body, author, category, formErrors } = this.state
    const { categories } = this.props
    return (
      <form>
        <div className="form-group">
          <label htmlFor="postTitle">Title {(formErrors.title) && (<span className="form-error"> - {formErrors.title}</span>)}</label>
          <input type="text" className="form-control" id="postTitle"
                 placeholder="Enter Title" value={title} onChange={(e) => this.updateTitle(e.target.value)}
                 disabled={!this.state.isNew}
          />
        </div>
        <div className="form-group">
          <label htmlFor="postAuthor">Author {(formErrors.author) && (<span className="form-error"> - {formErrors.author}</span>)}</label>
          <input type="text" className="form-control" id="postAuthor"
                 placeholder="Enter Author" value={author} onChange={(e) => this.updateAuthor(e.target.value)}
                 disabled={!this.state.isNew}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categorySelect">Category</label>
          <select id="categorySelect" className="form-control"
                  onChange={(e) => this.updateCategory(e.target.value)}
                  value={category} disabled={!this.state.isNew}>
            {categories.map(aCat => (<option key={aCat.name}>{aCat.name}</option>))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="postBody">Body {(formErrors.body) && (<span className="form-error"> - {formErrors.body}</span>)}</label>
          <textarea type="text" className="form-control" id="postBody" placeholder="Enter Body" value={body} onChange={(e) => this.updateBody(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-info" onClick={(e) => {this.onSavePost(e)}}>Save</button>
        <button type="button" className="btn btn-secondary post-btn" onClick={(e) => {this.onCalcelPost(e)}}>Cancel</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories
})

const mapDispatchToProps = {
  addPost,
  editPost
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm))