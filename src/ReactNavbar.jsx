import React,{useState} from "react";
import {NavLink} from "react-router-dom";
import {Navbar,Nav,Button} from 'react-bootstrap';
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "./images/logo.png"

function ReactNavbar(){

return (<>
 <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="/home"><div style={{flexDirection:"row",display:"flex",marginLeft:"10px"}}>
  <img style={{objectFit:"contain",marginRight: ".5rem",alignSelf:"center"}} alt="logo" src={Logo}/>
</div></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  className="ml-auto">
        <NavLink style={{marginRight:"15px"}} exact activeClassName="active_class"  className="nav-link h6"  to="/home">Home</NavLink>
        <NavLink style={{marginRight:"15px"}} exact activeClassName="active_class"    className="nav-link h6"  to="/overview">Components</NavLink>
        <NavLink style={{marginRight:"15px"}} exact activeClassName="active_class"    className="nav-link h6"  to="/docs">Docs</NavLink>
        <NavLink style={{marginRight:"15px"}} exact activeClassName="active_class"    className="nav-link h6"  to="/about">About</NavLink>

    </Nav>
  </Navbar.Collapse>
</Navbar>
 
</>);
}
export default ReactNavbar;