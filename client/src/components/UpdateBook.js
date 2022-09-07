import React, { Component } from "react";
import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";

export default class UpdataBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book_id: this.props.bookId,
      clicked: false,
    };
  }

  handleUpdate = async (e) => {
    e.preventDefault();
    // get the direct url to the book the user wants to delete
    const url = `http://localhost:3002/updatebook/${this.state.book_id}`;
    let editedBook = {
      img: e.target.img.value,
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
    };
    try {
      await axios.put(url, editedBook);
      this.setState({
        clicked: false,
      });
      this.props.getAllBooks();
    } catch (error) {
      console.log(error);
    }
  };
  handleOpen = () => {
    this.setState({
      clicked: true,
    });
  };
  handleClosed = () => {
    this.setState({
      clicked: false,
    });
  };
  render() {
    return (
      <>
        <Button
          className="EditBook"
          variant="warning"
          onClick={this.handleOpen}
        >
          Edit
        </Button>
        <Modal
          show={this.state.clicked}
          onHide={this.handleClosed}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Edit Your book
              <br></br>
              <h6>All fields required before book can be submitted</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleUpdate}>
              <Form.Group className="mb-3" controlId="img">
                <Form.Label>Book Title </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter a img url https://"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Book Title </Form.Label>
                <Form.Control type="text" placeholder="The 3 Little Pigs" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Book Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Three Little Pigs Bulding Their Homes"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Book Status</Form.Label>
                <Form.Control type="text" placeholder="Sold Out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit Edited Book!
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClosed}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
