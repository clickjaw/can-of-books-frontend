import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

export default class RemoveBook extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      book_id: this.props.bookId    }
  }

  handleDelete = async() => {
    console.log(this.state.book_id)
    this.setState({isLoading: true})
    const url = `http://localhost:3002/books/${this.state.book_id}`
    await axios.delete(url).then(()=>this.setState({isLoading: false}))
    this.props.getBooks()
  }

  render() {
    return (
      <>
        <Button disabled={this.state.isLoading} onClick={this.handleDelete}>
        {this.state.isLoading ? 'Loading...' : 'Delete'}
        </Button>
      </>
    )
  }
}
