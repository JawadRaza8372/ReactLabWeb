import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Footer(){
    return(<>

<section style={{marginBottom: "15rem!important",marginTop: "15rem!important",paddingTop:"30px",paddingBottom:"50px",background:"#303846"}}>
<div className="container ml-auto mr-auto p-2">
<div className="row">
<br/>
    <br/>
<div className="col col-10 col-lg-3 col-md-5 col-sm-8 col-xsm-10 mx-auto">
<h4 className="whitecolor">Docs</h4>
<p className="whitecolor">Getting Started</p>
<p className="whitecolor">Components</p>
</div>
<div className="col col-10 col-lg-3 col-md-5 col-sm-8 col-xsm-10 mx-auto">
<h4 className="whitecolor">Community</h4>
<p className="whitecolor">Facebook</p>
<p className="whitecolor">Instagram</p>
</div>

<div className="col col-10 col-lg-3 col-md-5 col-sm-8 col-xsm-10 mx-auto">
<h4 className="whitecolor">More</h4>
<p className="whitecolor">Github</p>
</div>
<br/>
<br/>
</div></div>
<br/>
  <div className="d-flex align-items-center">
<div className="container-fluid nav-bg">
    <div className="row">
<div className="col-2 mx-auto">
<div className="row">
<div style={{flexDirection:"row",display:"flex",marginLeft:"10px"}}>
  <img style={{height:"40px",marginRight: ".5rem",alignSelf:"center"}} alt="logo" src="https://reactnativeelements.com/img/logo-icon.svg"/>
  <h4 style={{alignSelf:"center",color:"white"}}>React Lab
  </h4></div>
</div>
</div>
</div>
</div>
</div> 
</section>
        
    </>);
}
export default Footer;