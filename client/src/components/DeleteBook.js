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
    try {
      const url = `${process.env.REACT_APP_HOST}/books/${this.state.book_id}`;
      await axios.delete(url);
      this.props.getAllBooks();
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <div>
        <Button
          variant="danger"
          className="DeleteButton"
          onClick={this.handleDelete}
        >
          Delete
        </Button>
      </div>
    );
  }
}
