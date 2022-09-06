//copied from Storm's

import React, { Component } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import axios from 'axios'

export default class BookModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: this.props.show,
      isChecked: false
    }
  }

  closeModal = () => {
    this.setState({ show: false })
    this.props.addButtonFalse()
  }

  toggleStatusCheck = () => {
    this.setState({isChecked: !this.state.isChecked})
  }

  handleFormSubmit = async(e) => {
    e.preventDefault()
    const url = `${process.env.REACT_APP_SERVER}books`
    let newBookBody = {
      "title":e.target.title.value,
      "image":e.target.image.value,
      "description":e.target.description.value,
      "status":e.target.status.checked
    }
    try {
      await axios.post(url, newBookBody).then((res)=> this.props.addNewBooks(res.data)).catch(err=>console.log(err.message))
      // not sure if clearing out the form field is necessary since i immediately close the modal, but here we are
      e.target.title.value = ''
      e.target.image.value = ''
      e.target.description.value = ''
      e.target.status.checked = ''
      this.closeModal()
    } catch (error) {
      console.log(error.message)
    }
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.closeModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleFormSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Book Title </Form.Label>
              <Form.Control type="text" placeholder="Their Eyes Were Watching God" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Book Cover</Form.Label>
              <Form.Control type="text" />
              <Form.Text className="text-muted">
                Please use an image address: http://...
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control type="text" />
              <Form.Text className="text-muted">
                An amazing book by Zora Neale Hurston
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="status">
              <Form.Check type="checkbox" label="Available?" checked={this.state.isChecked} onChange={this.toggleStatusCheck}/>
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
    )
  }
}
