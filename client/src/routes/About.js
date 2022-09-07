import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom"; // basically our <a href='#'>
import Footer from "../components/Footer"
export default class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
    <div>
      <nav>
      <Link to="/books">Home</Link> 
    </nav>
    <Outlet />
    <p>Made By Curtrick Walton</p>
    <a href="https://github.com/CurtWal/can-of-books-backend">MyGithub</a>
    <Footer/>
    </div>
    )
  }
};
