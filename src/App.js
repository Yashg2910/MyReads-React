import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksCategory from './BooksCategory'
import SearchBook from './Search_Book'

class BooksApp extends Component {
  state = {
    Books: []
  }

  componentDidMount(){
    this.populate_book_details();
    console.log(this.state.Books);
  }
  
  populate_book_details = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({Books: books})
    })
  }
  
  update_books_details = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.populate_book_details()
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<BooksCategory books={this.state.Books} onChange={this.update_books_details}/>)}/>
        <Route exact path="/search" render={({history}) => (<SearchBook onChange={this.update_books_details} myBooks={this.state.Books}/>)}/>
      </div>
    )
  }
}

export default BooksApp
