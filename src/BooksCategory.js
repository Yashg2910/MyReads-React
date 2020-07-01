import React, {Component} from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'


class BooksCategory extends Component {
  
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render(){
    const books = this.props.books;
    
    const shelves = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf, index) => {
            const shelfBooks = books.filter(book => book.shelf === shelf.type);
            return (
              <div className="bookshelf" key={index}>
                <h2 className="bookshelf-title">{shelf.title}</h2>
                 <div className="bookshelf-books">
                   <BookShelf books={shelfBooks} onChangeShelf={this.props.onChange} />
                 </div>
              </div>
             );
          })}
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BooksCategory;