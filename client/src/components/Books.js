import React, { Component } from 'react'
import axios from 'axios';
import Card from "react-bootstrap/Card"

export default class Books extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         books: [],
      }
    }

    getBooks = async() =>{            
            const API = "http://localhost:3002/books";
            let res = await axios.get(API);
            this.setState({
              books: res.data
            })
            // console.log(this.description)
            // this.setState({dueDate: res.dueDate})
            console.log(this.state.books)

    }


  render() {
    return (
      <div>
        <button onClick={this.getBooks}>To Do</button>
        {this.state.books.map((obj)=>
        <Card>
        title = {obj.title}<br/>
        description = {obj.description}<br/>
        status = {obj.status}
        </Card>
        )}

      </div>
    )
  }
}
