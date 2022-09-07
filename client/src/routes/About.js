import React, { Component } from "react";
import { Navbar, NavItem } from 'react-bootstrap';
import { Link, Outlet } from "react-router-dom"; // basically our <a href='#'>
import Footer from "../components/Footer"
export default class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Can Of Books</Navbar.Brand>
        <NavItem><Link to="/books" className="nav-link">Home</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
      <Outlet/>
    <p>Made By Curtrick Walton</p>
    <a href="https://github.com/CurtWal/can-of-books-backend">MyGithub</a>
    <Footer/>
    </div>
    )
  }
};
