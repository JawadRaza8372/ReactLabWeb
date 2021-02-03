import React from 'react'
import Footer from './Footer';
import Founder from "./Founder";
function AboutPage() {
    return (
        <>
<section className="d-flex align-items-center" style={{width:"100%",height:"100vh"}}>
<div className="container ml-auto mr-auto">
<center>
<div className="col-10">
<div className="row text-align-center">
<div className="col col-10 col-lg-6 col-md-6 col-sm-8 col-xsm-10 mx-auto g-3">
<Founder style={{textAlign:"center",marginLeft:"auto",marginRight:"auto"}} name="Umer Aftab"
 src="https://static.toiimg.com/photo/76729750.cms"
  rank="Founder Of React Lab"
skill=""
exper=""
portfolio=""
githubl=""
  />
</div>
<div className="col col-10 col-lg-6 col-md-6 col-sm-8 col-xsm-10 mx-auto g-3">
<Founder style={{textAlign:"center",marginLeft:"auto",marginRight:"auto"}} 
name="M Jawad Raza"
 src="https://static.toiimg.com/photo/76729750.cms"
 rank="Co-Founder Of React Lab"
 skill=""
 exper=""
portfolio=""
githubl=""
 />
</div>
</div>
</div></center></div></section><br/><br/>
<Footer/>

        </>
    )
}

export default AboutPage
