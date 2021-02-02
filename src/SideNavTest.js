import React from 'react'
import sideManuItems from "./sideManuItems"
import {sideManuItem2,sideManuItem3} from "./sideManuItems"
import {NavLink} from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap';
import AppsIcon from '@material-ui/icons/Apps';
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "./images/logo.png"
import NavLists from './NavLists';
import ReactNavbar from "./ReactNavbar"
function SideNavTest({children}) {
  return (
    <>
     <ReactNavbar/>
    <div style={{backgroundColor:"white",display:"flex",flexDirection:"row",justifyContent:"center",overflow:"hidden"}}>
    <div className="col-12">
      <div className="row">
        <div className="col-xs-10 col-sm-10 col-md-2 col-lg-2 col-xl-2  order-1">
        <div style={{overflowY:"auto",maxHeight:"89vh"}}>
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
<div style={{display:"flex",flexDirection:"column"}}>
<div style={{display:"flex",flexDirection:"row",paddingTop:"10px"}}>
<Navbar.Brand href="/home">
  <h5>Create Something New</h5>
</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
</div>


        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav> 
<div>

<NavLists title="It Starts Basic" item={sideManuItems}/>
        <NavLists title="Components" item={sideManuItem2}/>
        <NavLists title="React Lab+" item={sideManuItem3}/>
       
</div>
  </Nav>
  </Navbar.Collapse>
  </div>
        </Navbar>
        </div>
        </div>
        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 order-2">
        <div style={{overflowY:"auto",maxHeight:"89vh"}}>
        {children}</div>
        </div>
      </div>
    </div>
    </div></>
  )
}

export default SideNavTest
