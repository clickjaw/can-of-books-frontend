import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Carousel } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import AddBook from "./AddBook";
import DeleteBook from "./DeleteBook";
import UpdateBook from "./UpdateBook";

// import BookFormModal from './BookFormModal'
export default function Books() {
  const { isAuthenticated } = useAuth0();
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const API = `${process.env.REACT_APP_HOST}/books`;
    let res = await axios.get(API);
    setBooks(res.data);
  };
  const addNewBooks = (newBook) => {
    setBooks([...books, newBook]);
  };
  useEffect(() => {
    getBooks();
  });
  return (
    <>
      {isAuthenticated ? (
        <div className="ShowBooks">
          <Logout />
          <AddBook addNewBooks={addNewBooks} />
          {books.length !== 0 ? (
            <Carousel fade style={{ width: "36rem" }}>
              {books.map((book) => (
                <Carousel.Item key={book._id}>
                  <Card
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      paddingBottom: "2rem",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={book.img}
                      style={{ height: "400px" }}
                    />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>{book.description}</Card.Text>
                      <Card.Text>{book.status}</Card.Text>
                      <Card.Footer
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {
                          <DeleteBook
                            bookId={book._id}
                            getAllBooks={getBooks}
                          />
                        }
                        {
                          <UpdateBook
                            bookId={book._id}
                            getAllBooks={getBooks}
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
      ) : (
        <Login />
      )}
    </>
  );
}
