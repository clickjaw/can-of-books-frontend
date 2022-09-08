import "./App.css";
import React, { Component } from "react";
// import { Link, Outlet } from "react-router-dom"; // basically our <a href='#'>
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from './components/Main'
// import Books from "./components/Books";

export default class App extends Component {

  const
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
