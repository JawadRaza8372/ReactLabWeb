import React from "react";
import {NavLink} from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap';
import AppsIcon from '@material-ui/icons/Apps';
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "./images/logo.png"

function ReactNavbar2(props){
return (<>
 <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="/home"><div style={{flexDirection:"row",display:"flex",marginLeft:"10px"}}>
  <img style={{height:"50px",objectFit:"contain",alignSelf:"center"}} alt="logo" src={Logo}/>
</div></Navbar.Brand>
  <Nav className="mr-auto">
  <button onClick={props.click} className="btn btn-outline-primary"><AppsIcon/></button>
  </Nav>
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
export default ReactNavbar2;