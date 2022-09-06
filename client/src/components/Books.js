import React, { Component } from "react";
import axios from "axios";
import { Card, Carousel } from "react-bootstrap";
import AddBook from "./AddBook";
import DeleteBook from "./DeleteBook";
import UpdateBook from "./UpdateBook";
// import BookFormModal from './BookFormModal'
export default class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    const API = "http://localhost:3002/books";
    let res = await axios.get(API);
    this.setState({
      books: res.data,
    });
  };
  addNewBooks = (newBook) => {
    this.setState({ books: [...this.state.books, newBook] });
  };

  render() {
    return (
      <div>
        <AddBook addNewBooks={this.addNewBooks} />
        {this.state.books.length !== 0 ? (
          <Carousel fade style={{ width: "36rem" }}>
            {this.state.books.map((book) => (
              <Carousel.Item key={book._id}>
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "2rem",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.description}</Card.Text>
                    <Card.Text>{book.status}</Card.Text>
                    <Card.Footer>
                      {
                        <DeleteBook
                          bookId={book._id}
                          getAllBooks={this.getBooks}
                        />
                      }
                      {
                        <UpdateBook
                          bookId={book._id}
                          getAllBooks={this.getBooks}
                        />
                      }
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books in collection, FeelsBad</h3>
        )}
      </div>
    );
  }
}
