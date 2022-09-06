import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'

import BookModal from './BookModal'
export default class AddBook extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         addButtonClicked: false
      }
    }

    handleClick = () =>{
        this.setState({addButtonClicked: true})
    }

    buttonClickFalse = () =>{
        this.setState({addButtonClicked: false})
    }

  render() {
    return (
        <>
        {!this.state.addButtonClicked && <Button onClick ={this.handleClick}>Add New Book</Button>}
        {this.state.addButtonClicked && <BookModal addNewBook ={this.props.addNewBook} addButtonFalse = {this.buttonClickFalse} show = {this.addButtonClicked}/>}
        
        </>

    )
  }
}
