import React, { Component} from 'react';
import axios from 'axios';
import {Carousel, Card} from 'react-bootstrap'

import AddBook from './AddBook'
import RemoveBook from "./RemoveBook"

export default class BestBooks extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         books: ''
      }
    }

    getBooks = async() =>{
        const API = `http://localhost:3002/books`
        const res = await axios.get(API)
        this.seState({books: res.data})
    }

    componentDidMount = () =>{
        this.getBooks()
    }

    addNewBooks = (newBook) => {
        this.setState({books: [...this.state.books,  newBook]})
    }

  render() {
    return (
        <>
        {this.state.books.length !== 0 (<Carousel fade style = {{width:"18rem"}}>
            {this.state.books.map((book) => 
            <Carousel.Item key={book.id}>
                <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '2rem' }}>
                <Card.Img variant="top" src={book.image} alt={`${book.title} book cover`} style={{ width: '18rem', height: '24rem' }} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.description}</Card.Text>
                    <Card.Footer>{<RemoveBook bookID = {book._id} getBooks = {this.getBooks}/>}</Card.Footer>
                </Card.Body>

                </Card>
            </Carousel.Item>)}
        </Carousel>
        
    )}
        
        <AddBook addNewBook = {this.addNewBooks}/>
        </>
    )
  }
}
