import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Can Of Books</Navbar.Brand>
          <NavItem>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </NavItem>
          {/* PLACEHOLDER: render a navigation link to the about page */}
        </Navbar>
        <Outlet />
      </>
    );
  }
}

export default Header;
