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
              bookList: res.data
            })
            // console.log(this.description)
            // this.setState({dueDate: res.dueDate})
            console.log(this.state.bookList)

    }


  render() {
    return (
      <div>
        <button onClick={this.getToDo}>To Do</button>
        {this.state.toDoList.map((obj)=>
        <Card>
        title = {obj.title}<br/>
        description = {obj.description}
        status = {obj.status}
        </Card>
        )}

      </div>
    )
  }
}
