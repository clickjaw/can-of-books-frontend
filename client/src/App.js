import "./App.css";
import React, { Component } from "react";
// import { Link, Outlet } from "react-router-dom"; // basically our <a href='#'>
import Footer from "./components/Footer"
import Header from "./components/Header";

import Books from "./components/Books";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Books />
        <Footer/>
      </div>
    );
  }
}
