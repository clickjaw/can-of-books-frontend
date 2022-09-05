import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

export default class DeleteBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book_id: this.props.bookId,
    };
  }

  handleDelete = async () => {
    // get the direct url to the book the user wants to delete
    const url = `http://localhost:3002/books/${this.state.book_id}`;
    await axios.delete(url);
    this.props.getAllBooks();
  };

  render() {
    return (
      <>
        <Button onClick={this.handleDelete}>Delete</Button>
      </>
    );
  }
}
