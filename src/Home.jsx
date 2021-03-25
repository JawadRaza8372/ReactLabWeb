import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import {motion} from "framer-motion"
const textvarients={init:{y:'-100vw'},anim:{y:0,transition:{delay:1,duration:2}}};
const containvarients={init:{x:'-100vw'},anim:{x:0,transition:{duration:1}}};

const Paravarients={init:{y:"-50vw",x:'-100vw'},anim:{x:0,y:0,transition:{duration:2,delay:1.5}}};
const Paravarients2={init:{y:"-50vw",x:'100vw'},anim:{x:0,y:0,transition:{duration:2,delay:2.5}}};
const Paravarients3={init:{y:"50vw",x:'-100vw'},anim:{x:0,y:0,transition:{duration:2,delay:3.5}}};
const Paravarients4={init:{y:"50vw",x:'100vw'},anim:{x:0,y:0,transition:{duration:2,delay:4.5}}};
const exitDiv={animat:{x:"-100vw",transition:{duration:1,ease:"easeInOut"}}};
const textvarients2={init1:{y:'-100vw'},anim1:{y:0,transition:{delay:1.5,duration:2}}};
const ButtonCvarients2={init1:{y:'100vw'},anim1:{y:0,transition:{delay:2,duration:2}}};
const btnHover={hovers:{scale:1.3,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px black",transition:{yoyo:Infinity,duration:0.4,type:"spring",stiffness:520}}}
function Home(){
    return(<motion.div variants={exitDiv} exit="animat">
    <section>
<motion.div className="hero" style={{height:"80vh"}} variants={containvarients} initial="init" animate="anim">
<div style={{margin:"auto"}}>
<motion.h1 style={{color:"white",textAlign:"center",fontSize:"3rem",marginBottom:"10px"}} variants={textvarients} initial="init" animate="anim">React Lab</motion.h1>
<br/>
<motion.h3 style={{color:"white",textAlign:"center",fontSize:"1.5rem",marginBottom:"10px"}} variants={textvarients2} initial="init1" animate="anim1">Cross Platform React Native UI Toolkit</motion.h3>
<br/>
<motion.div  style={{display:"flex",flexDirection:"row",justifyItems:"center",margin:"auto",marginBottom:"10px"}} variants={ButtonCvarients2} initial="init1" animate="anim1">

<NavLink style={{textAlign:"center",marginLeft:"auto",marginRight:"auto"}} to="/docs">
<motion.button className="btn btn-outline-light" variants={btnHover} whileHover="hovers">Get Started</motion.button>
</NavLink><NavLink style={{textAlign:"center",marginLeft:"auto",marginRight:"auto"}} to="/overview">
<motion.button  className="btn btn-outline-light" variants={btnHover} whileHover="hovers">Read Docs</motion.button>
</NavLink></motion.div>
</div>
</motion.div>
</section>
<br/>
<br/>
<br/>
<br/>
<section className="d-flex align-items-center" style={{marginBottom: "70px !important",marginTop: "71px !important",height:"60vh"}}>
<div className="container   ml-auto mr-auto">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
<motion.div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xsm-12 g-3 mx-auto" variants={Paravarients} initial="init" animate="anim">
<h3 className="maincolor">Cross-Platform</h3>
<p className="margin-none">Consistent design across android, iOS, and web.</p></motion.div>
<motion.div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xsm-12  g-3 mx-auto"  variants={Paravarients2}  initial="init" animate="anim">
<h3 className="maincolor">Easy to use</h3>
<p className="margin-none">Built completely in Javascript. Starting your react native app has never been easier.</p></motion.div>
<motion.div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xsm-12  g-3 mx-auto"  variants={Paravarients3}   initial="init" animate="anim">
<h3 className="maincolor">Customizable</h3>
<p className="margin-none">Easily style any of our components just the way you want.</p></motion.div>
<motion.div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xsm-12 g-3  mx-auto"  variants={Paravarients4}   initial="init" animate="anim">
<h3 className="maincolor">Community-Driven</h3>
<p className="margin-none">100% built by the community. We're here because we love open source.</p></motion.div></div></div>
</div></div></section>
<br/>
<br/>
<br/>
   <br/>
<br/>
<br/>
<br/>
<Footer/>   
    </motion.div>);
}
export default Home;