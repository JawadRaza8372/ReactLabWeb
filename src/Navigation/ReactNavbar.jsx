import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../images/logo.png";
import Loginnav from "./Loginnav";
import { useSelector } from "react-redux";
function ReactNavbar() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Navbar
        style={{ borderBottom: "2px solid #d1cdcd" }}
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand href="/home">
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              marginLeft: "10px",
            }}
          >
            <img
              style={{
                objectFit: "contain",
                marginRight: ".5rem",
                alignSelf: "center",
              }}
              alt="logo"
              src={Logo}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ marginLeft: "auto" }}>
            <NavLink
              style={{ marginRight: "15px" }}
              exact
              activeClassName="active_class"
              className="nav-link h6"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              style={{ marginRight: "15px" }}
              exact
              activeClassName="active_class"
              className="nav-link h6"
              to="/overview"
            >
              Components
            </NavLink>
            <NavLink
              style={{ marginRight: "15px" }}
              exact
              activeClassName="active_class"
              className="nav-link h6"
              to="/docs"
            >
              Docs
            </NavLink>
            <NavLink
              style={{ marginRight: "15px" }}
              exact
              activeClassName="active_class"
              className="nav-link h6"
              to="/searchComponent"
            >
              Search
            </NavLink>

            <NavLink
              style={{ marginRight: "15px" }}
              exact
              activeClassName="active_class"
              className="nav-link h6"
              to="/about"
            >
              About
            </NavLink>
            {user ? (
              <Loginnav />
            ) : (
              <NavLink
                style={{ marginRight: "15px" }}
                exact
                activeClassName="active_class"
                className="nav-link h6"
                to="/login"
              >
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default ReactNavbar;
