import React,{useState} from "react";
import Template from "./Template";
import CopyToClipboard from "react-copy-to-clipboard"

function About(){

    const [cop, setcop] = useState(false);
const [btnt, setbtnt] = useState("Copy");
const [boxx, setboxx] = useState("#e6cccc");
const [bcol, setbcol] = useState("btn btn-outline-primary");
  const  onCopy=()=> {
        setcop(true);
        setbtnt("Copied");
        setboxx("#70e08a");
        setbcol("btn btn-success")
      }
    return(<>
        <Template>
            <div className="container px-2 py-2">
            <br/>
            <br/>
<header><h1>Getting Started</h1></header>
<p>The aim of React Native Elements is to provide an all-in-one UI kit for creating apps in react native. There are many great ui components made by developers all around open source. React Native Elements takes the hassle of assembling these packages together by giving you a ready made kit with consistent api and look and feel.</p>
<header><h1>Installation</h1></header>
<p>Installing React Native Elements depends on your type of react native project.</p>
<ul>
    <li>Expo | Create React Native App</li>
    <li>React Native CLI</li>
</ul>
<div className="daba2" style={{backgroundColor:`${boxx}`}}>

    <h1>hyy
    hyy
    jawad
    </h1>
<br/>
    <CopyToClipboard text="hyy
    hyy
    jawad" onCopy={cop}>
          <button className={bcol} onClick={onCopy}>{btnt}</button>
        </CopyToClipboard>
</div>

         
         
            </div>
        </Template>
    </>);
}
export default About;