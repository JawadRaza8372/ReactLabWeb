import React from 'react'
import DeveloperCard from './DeveloperCard';
import Footer from './Footer';
import Founder from "./Founder";
import Team from './Team';
import {founder,founder2} from "./sideManuItems"
function AboutPage() {
    return (
        <>
<section className="d-flex align-items-center overflow-hidden" style={{width:"100%",height:"auto"}}>
<div className="row">
<div className="col-10 mx-auto">
<center>
<h2 className="font-weight-bold my-5 maincolor" style={{textTransform:"capitalize"}}>
            Our amazing team
          </h2>
         </center>
<center>
<div className="row">




<div className="col col-10 col-lg-6 col-md-6 col-sm-8 col-xsm-10 mx-auto g-3">
<DeveloperCard  name={founder2.name} role={founder2.role} href1={founder2.href1} href2={founder2.href2} href3={founder2.href3} href4={founder2.href4}/>
</div>
<div className="col col-10 col-lg-6 col-md-6 col-sm-8 col-xsm-10 mx-auto g-3">
<DeveloperCard name={founder.name} role={founder.role} href1={founder.href1} href={founder.href} href3={founder.href3} href4={founder.href4}/>
</div>
</div></center>

</div></div></section><br/><br/>
<Footer/>

        </>
    )
}

export default AboutPage
