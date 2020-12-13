import React,{useState} from "react";
import {NavLink} from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap';
import AppsIcon from '@material-ui/icons/Apps';
import SideNav from "./SideNav"
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function ReactNavbar2(props){
  const [drawer, setdrawer] = useState(false)
return (<>
 <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="/home"><div style={{flexDirection:"row",display:"flex",marginLeft:"10px"}}>
  <img style={{height:"40px",marginRight: ".5rem",alignSelf:"center"}} alt="logo" src="https://reactnativeelements.com/img/logo-icon.svg"/>
  <h4 style={{alignSelf:"center"}}>React Lab
  </h4></div></Navbar.Brand>
  <Nav className="mr-auto">
  <button onClick={props.click} className="btn btn-outline-primary"><AppsIcon/></button>
  </Nav>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  className="ml-auto">

        <NavLink exact activeClassName="active_class"  className="nav-link h6"  to="/home">Home</NavLink>
        <NavLink exact activeClassName="active_class"    className="nav-link h6"  to="/services">Services</NavLink>
        <NavLink exact activeClassName="active_class"    className="nav-link h6"  to="/about">About</NavLink>
        <NavLink exact activeClassName="active_class"    className="nav-link h6"  to="/contact">Contact</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>);
}
export default ReactNavbar2;