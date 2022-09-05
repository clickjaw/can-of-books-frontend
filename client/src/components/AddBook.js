import React, { Component } from "react";
import { Button } from "react-bootstrap";

import BookFormModal from "./BookFormModal";

export default class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleClick = () => {
    this.setState({ show: true });
  };

  handleClickedFalse = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        {/* Set the modal state false before the button is click */}
        {!this.state.show && (
          <Button onClick={this.handleClick}>Add Book</Button>
        )}
        {/* After button is clicked set the new state to true and render the form modal*/}
        {this.state.show && (
          <BookFormModal
            addNewBooks={this.props.addNewBooks}
            addButtonFalse={this.handleClickedFalse}
            show={this.state.show}
          />
        )}
      </>
    );
  }
}
