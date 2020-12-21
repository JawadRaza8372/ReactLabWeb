import React from "react";
import {NavLink} from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap';
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function ReactNavbar(){
return (<>
 <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="/home"><div style={{flexDirection:"row",display:"flex",marginLeft:"10px"}}>
  <img style={{height:"40px",marginRight: ".5rem",alignSelf:"center"}} alt="logo" src="https://reactnativeelements.com/img/logo-icon.svg"/>
  <h4 style={{alignSelf:"center"}}>React Lab
  
  </h4></div></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  className="ml-auto">

        <NavLink exact activeClassName="active_class"  className="nav-link h6"  to="/home">Home</NavLink>
        <NavLink exact activeClassName="active_class"    className="nav-link h6"  to="/overview">Components</NavLink>
        <NavLink exact activeClassName="active_class"    className="nav-link h6"  to="/about">Docs</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
   
</>);
}
export default ReactNavbar;