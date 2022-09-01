
import React, { Component } from 'react'
import axios from 'axios';


export default class Books extends Component {
constructor(props) {
  super(props)

  this.state = {
     book: []
  }
}

getBooks=async()=>{
    const API = "http://localhost:3002/books"
    const res = await axios.get(API)
    console.log(res.data)
}

  render() {

    return (
      <div>Books</div>
    )
  }
}
