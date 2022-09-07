import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

export default class BookFormModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: this.props.show,
    };
  }
  closeModal = () => {
    this.setState({ show: false });
    this.props.addButtonFalse();
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:3002/new-book`;
    let newBookBody = {
      img: e.target.img.value,
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
    };
    try {
      await axios
        .post(url, newBookBody)
        .then((res) => this.props.addNewBooks(res.data))
        .catch((err) => alert("Fields Not Filled, Try Again", err));
      this.closeModal();
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <Modal
        show={this.state.show}
        onHide={this.closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Add A Book
            <br></br>
            <h6>All fields required before book can be submitted</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleFormSubmit}>
            <Form.Group className="mb-3" controlId="img">
              <Form.Label>Book Cover</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter a img url https://"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Book Title </Form.Label>
              <Form.Control
                type="text"
                placeholder="Book Title: The 3 Little Pigs"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Three Little Pigs Building their Homes"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="status">
              <Form.Label>Book Status</Form.Label>
              <Form.Control type="text" placeholder="Sold Out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Book!
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
