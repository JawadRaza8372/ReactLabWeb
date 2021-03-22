import React from 'react'
import DeveloperCard from './DeveloperCard';
import Footer from './Footer';
import Founder from "./Founder";
import Team from './Team';
function AboutPage() {
    return (
        <>
<section className="d-flex align-items-center" style={{width:"100%",height:"100vh"}}>
<Team><div className="container ml-2 mr-2">
<center>
<div className="col-10">
<div className="row text-align-center">




<div className="col col-10 col-lg-6 col-md-6 col-sm-8 col-xsm-10 mx-auto g-3">
<DeveloperCard/>
</div>
<div className="col col-10 col-lg-6 col-md-6 col-sm-8 col-xsm-10 mx-auto g-3">
<DeveloperCard/>
</div>
</div>
\
</div></center></div></Team></section><br/><br/>
<Footer/>

        </>
    )
}

export default AboutPage
