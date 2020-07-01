import React, {Component} from 'react'
import Book from './Book'
import {PropTypes} from 'prop-types'

class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  update_book = (book, shelf) => {
    this.props.onChangeShelf(book, shelf)
  }
  render() {
    const books = this.props.books
    return (
      <div>
        <ol className="books-grid">
              {books.map((book, index) => (<Book book={book} key={index} onUpdate={(shelf) => {
                this.update_book(book, shelf)
              }}/>))}
        </ol>
      </div>
    )
  }
}

export default BookShelf;