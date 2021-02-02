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
 <button style={{marginLeft:"15px"}} onClick={props.click} className="btn btn-outline-primary"><AppsIcon/></button>
  <Navbar.Brand href="/home"><div style={{flexDirection:"row",display:"flex",marginLeft:"10px"}}>
  <img style={{height:"50px",objectFit:"contain",alignSelf:"center"}} alt="logo" src={Logo}/>
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
export default ReactNavbar2;