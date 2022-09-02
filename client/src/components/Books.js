import React, { Component } from "react";
import axios from "axios";
import { Card, Carousel } from "react-bootstrap";

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
    // console.log(this.description)
    // this.setState({dueDate: res.dueDate})
    console.log(this.state.books);
  };

  render() {
    return (
      <div>
        <Carousel
          fade
          style={{
            alignItems: "center",
            marginLeft: "10px",
            textAlign: "center",
            width: "450px",
            height: "150px",
            color: "white",
            boxShadow: "5px 5px 5px white",
          }}
        >
          {this.state.books.map((obj) => {
            return (
              <Carousel.Item key={obj.id}>
                <Card
                  style={{
                    backgroundColor: "grey",
                  }}
                >
                  <Card.Body>
                    <Card.Title>{obj.title}</Card.Title>
                    <Card.Text>
                      Description: {obj.description} <br />
                      status: {obj.status}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
