import React from 'react'
import Footer from './Footer';
import {motion} from "framer-motion"
import TemplateBlue from './TemplateBlue';

function AboutPage() {
    const exitDiv={init:{x:'-100vw'},anim:{x:0,transition:{duration:1}},animat:{x:"-100vw",transition:{duration:1,ease:"easeInOut"}}};    
    return (
        <motion.div variants={exitDiv} exit="animat" initial="init" animate="anim">
<TemplateBlue>
<motion.section   className="d-flex align-items-center overflow-hidden" style={{width:"100%",height:"90vh"}}>
<div className="row">
<div className="col-10 mx-auto">
<center>
<div style={{border:"3px solid white",margin:"10px",width:"98%",height:"auto",padding:"70px"}}>
    <h1 style={{color:"white",textTransform:"capitalize",textAlign:"center"}}>if you feel any problem in code feel free to send us your Query<a style={{color:"white",fontWeight:"bolder"}} href="https://mail.google.com/mail/?view=cm&fs=1&to=reactlabofficial@gmail.com&su=Suggestions&body= "> Now</a></h1>
</div>
</center>

</div></div>
</motion.section><br/><br/>
</TemplateBlue>
<Footer/>

        </motion.div>
    )
}

export default AboutPage
