import "./App.css";
import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom"; // basically our <a href='#'>

import Books from "./components/Books";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/about">About</Link>
        </nav>
        <Outlet />
        <Books />
      </div>
    );
  }
}
