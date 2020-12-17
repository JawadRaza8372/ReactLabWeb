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
<NavLink style={{textAlign:"center",marginLeft:"auto",marginRight:"auto"}} to="/about"><button className="btn btn-outline-light">Get Started</button>
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
<div className="col col-10 col-lg-3 col-md-5 col-sm-8 col-xsm-10 mx-auto">
<h3>Cross-Platform</h3>
<p className="margin-none">Consistent design across android, iOS, and web.</p></div>
<div className="col col-10 col-lg-3 col-md-5 col-sm-8 col-xsm-10 mx-auto">
<h3>Easy to use</h3>
<p className="margin-none">Built completely in Javascript. Starting your react native app has never been easier.</p></div>
<div className="col col-10 col-lg-3 col-md-5 col-sm-8 col-xsm-10 mx-auto">
<h3>Customizable</h3>
<p className="margin-none">Easily style any of our components just the way you want.</p></div>
<div className="col col-10 col-lg-3 col-md-5 col-sm-8 col-xsm-10 mx-auto">
<h3>Community-Driven</h3>
<p className="margin-none">100% built by the community. We're here because we love open source.</p></div></div></div></section>
<br/>
<br/>
<br/>
<br/>
<section style={{marginBottom: "5rem!important",marginTop: "6rem!important", }}>
<div className="container ml-auto mr-auto">
<div className="col-10 mx-auto">
<div className="row text-align-center">
<div className="col col-10 col-lg-3 col-md-5 col-sm-8 col-xsm-10 mx-auto">
<Founder style={{textAlign:"center",marginLeft:"auto",marginRight:"auto"}} name="Umer Aftab" src="https://static.toiimg.com/photo/76729750.cms" rank="Founder Of React Lab"/>
</div>
<div className="col col-10 col-lg-3 col-md-5 col-sm-8 col-xsm-10 mx-auto">
<Founder style={{textAlign:"center",marginLeft:"auto",marginRight:"auto"}} name="M Jawad Raza" src="https://static.toiimg.com/photo/76729750.cms" rank="Co-Founder Of React Lab"/>
</div>
</div>
</div></div></section>
   <br/>
<br/>
<br/>
<br/>
<Footer/>   
    </>);
}
export default Home;