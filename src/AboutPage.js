import React from 'react'
import DeveloperCard from './DeveloperCard';
import Footer from './Footer';
import {founder,founder2} from "./sideManuItems"
import {motion} from "framer-motion"

function AboutPage() {
    const exitDiv={animat:{x:"-100vw",transition:{duration:1,ease:"easeInOut"}}};
    const textvarients={init:{y:'-100vw'},anim:{y:0,transition:{delay:1,duration:2}}};
    const ButtonCvarients2={init1:{y:'100vw'},anim1:{y:0,transition:{delay:1.5,duration:2}}};
    const btnHover={hovers:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",transition:{yoyo:Infinity,duration:0.3,type:"spring",stiffness:120}}}
  
      
  
    return (
        <motion.div  variants={exitDiv} exit="animat">
<motion.section   className="d-flex align-items-center overflow-hidden" style={{width:"100%",height:"90vh"}}>
<div className="row">
<div className="col-10 mx-auto">
<center>
<motion.h2 className="font-weight-bold my-5 maincolor" style={{textTransform:"capitalize"}}  variants={textvarients} initial="init" animate="anim">
            Our amazing team
          </motion.h2>
         </center>
<center>
<motion.div className="row"  variants={ButtonCvarients2} initial="init1" animate="anim1">




<div className="col col-10 col-lg-6 col-md-6 col-sm-8 col-xsm-10 mx-auto g-3"><motion.div variants={btnHover} whileHover="hovers">
<DeveloperCard  name={founder2.name} role={founder2.role} href1={founder2.href1} href2={founder2.href2} href3={founder2.href3} href4={founder2.href4}/>
</motion.div></div>
<div className="col col-10 col-lg-6 col-md-6 col-sm-8 col-xsm-10 mx-auto g-3"><motion.div variants={btnHover} whileHover="hovers">
<DeveloperCard name={founder.name} role={founder.role} href1={founder.href1} href={founder.href} href3={founder.href3} href4={founder.href4}/>
</motion.div></div><br/><br/>
</motion.div>
</center>

</div></div>
</motion.section><br/><br/>
<Footer/>

        </motion.div>
    )
}

export default AboutPage
