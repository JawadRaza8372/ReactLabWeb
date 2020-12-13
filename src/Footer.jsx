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
</div></div></section>
        
    </>);
}
export default Footer;