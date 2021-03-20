import React,{useState} from 'react'
import CopyToClipboard from "react-copy-to-clipboard"
import ReactPlayer from 'react-player'
import {Row,Col,Toast,Button} from "react-bootstrap"
import { AnimatePresence,motion } from 'framer-motion';
function PostCodeTemplate({UseTitle,UsePara,code,code2,imgsrc,children,videoLink}) {

    const [cop, setcop] = useState(false);
const [btnt, setbtnt] = useState("Copy");
const [boxx, setboxx] = useState("#f5f7f5");
const [bcol, setbcol] = useState("btn btn-outline-primary");
const [cop1, setcop1] = useState(false);
const [btnt1, setbtnt1] = useState("Copy");
const [boxx1, setboxx1] = useState("#e6cccc");
const [bcol1, setbcol1] = useState("btn btn-outline-primary");
const [show, setShow] = useState(false);
const [show1, setShow1] = useState(false);

  const  onCopy=()=> {
        setcop(true);
        setbtnt("Copied");
        setboxx("#70e08a");
        setbcol("btn btn-success");
        setShow(true)
      }
      const  onCopy1=()=> {
        setcop1(true);
        setbtnt1("Copied");
        setboxx1("#70e08a");
        setbcol1("btn btn-success");
        setShow1(true)
      }
    return (
        <>
      <div className="container  m-auto px-2 py-2">   
{UseTitle && <header><h1 style={{textTransform:"capitalize"}}>{UseTitle}</h1></header>
}{UsePara &&<p style={{fontSize:"16px"}}>{UsePara}</p>
}

<br/>
{children}
<br/>

{imgsrc &&         <div className="ml-auto mr-auto" style={{maxWidth:"80%",marginBottom:"45px"}}>
<br/>
<img style={{width:"100%",height:"300px",objectFit:"contain"}} src={`${imgsrc}`} alt="pics"/>
<br/>
</div>}
{videoLink && <div className="row">
<div className="text_center col-md-8 col-sm-10 ml-auto mr-auto pt-5 pt-lg-0 d-flex justify-content-center flex-column">
<ReactPlayer width="100%" url={videoLink} />
<br/></div></div>}

{code &&<><div className="daba2 ml-auto mr-auto" style={{backgroundColor:"#f5f7f5"}}>
<h6><pre>{code}</pre></h6>
<br/>
    <CopyToClipboard text={code} onCopy={cop}>
    <Row>
    

    <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide animation>
<center>
     <h6  style={{color:"green",marginTop:"20px",marginBottom:"20px"}}>Coppied</h6></center>
    </Toast>

  <Col xs={6}>
    <Button  onClick={onCopy}>Copy</Button>
  </Col>
</Row>
        </CopyToClipboard>
</div><br/></>}
{code2 &&<><div className="daba2  ml-auto mr-auto" style={{backgroundColor:"#f5f7f5"}}>
<br/>
<h6><pre>{code2}</pre></h6>

<br/>
    <CopyToClipboard text={code2} onCopy={cop1}>
    <Row>
        <Toast  onClose={() => setShow1(false)} show={show1} delay={2000} autohide animation>
<center>
         <h6 style={{color:"green",marginTop:"20px",marginBottom:"20px"}}>Coppied</h6></center>
        </Toast>
      <Col xs={6}>
        <Button  onClick={onCopy1}>Copy</Button>
      </Col>
    </Row>
        </CopyToClipboard>
</div><br/></>}
<br/>
</div>

         
        </>
    )
}

export default PostCodeTemplate

