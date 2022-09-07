import "./App.css";
import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom"; // basically our <a href='#'>
import Footer from "./components/Footer"


import Books from "./components/Books";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="Links">
          <Link to="/about">About</Link>
        </nav>
        <Outlet />
        <h1 style={{textAlign: 'center'}}>Can Of Books</h1>
        <Books />
        <Footer/>
      </div>
    );
  }
}
