import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Founder from "./Founder";
function Home(){
    return(<>
    <section>
<div className="hero">
<div style={{margin:"auto"}}>
<h1 style={{color:"white",textAlign:"center",fontSize:"3rem",marginBottom:"10px"}}>React Lab</h1>
<h3 style={{color:"white",textAlign:"center",fontSize:"1.5rem",marginBottom:"10px"}}>Cross Platform React Native UI Toolkit</h3>
<div style={{display:"flex",flexDirection:"row",justifyItems:"center",margin:"auto",marginBottom:"10px"}}>

<NavLink style={{textAlign:"center",marginLeft:"auto",marginRight:"auto"}} to="/docs"><button className="btn btn-outline-light">Get Started</button>
</NavLink><NavLink style={{textAlign:"center",marginLeft:"auto",marginRight:"auto"}} to="/overview"><button  className="btn btn-outline-light">Read Docs</button>
</NavLink></div>
</div>
</div>
</section>
<br/>
<br/>
<br/>
<br/>
<section style={{marginBottom: "70px !important",marginTop: "71px !important"}}>
<div className="container ml-auto mr-auto">
<div className="row">
<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xsm-12 g-3 mx-auto">
<h3>Cross-Platform</h3>
<p className="margin-none">Consistent design across android, iOS, and web.</p></div>
<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xsm-12  g-3 mx-auto">
<h3>Easy to use</h3>
<p className="margin-none">Built completely in Javascript. Starting your react native app has never been easier.</p></div>
<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xsm-12  g-3 mx-auto">
<h3>Customizable</h3>
<p className="margin-none">Easily style any of our components just the way you want.</p></div>
<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xsm-12 g-3  mx-auto">
<h3>Community-Driven</h3>
<p className="margin-none">100% built by the community. We're here because we love open source.</p></div></div></div></section>
<br/>
<br/>
<br/>
   <br/>
<br/>
<br/>
<br/>
<Footer/>   
    </>);
}
export default Home;