import React,{useState} from 'react'
import CopyToClipboard from "react-copy-to-clipboard"

function PostCodeTemplate({UseTitle,UsePara,code,code2,imgsrc,children}) {
    
    const [cop, setcop] = useState(false);
const [btnt, setbtnt] = useState("Copy");
const [boxx, setboxx] = useState("#e6cccc");
const [bcol, setbcol] = useState("btn btn-outline-primary");
const [cop1, setcop1] = useState(false);
const [btnt1, setbtnt1] = useState("Copy");
const [boxx1, setboxx1] = useState("#e6cccc");
const [bcol1, setbcol1] = useState("btn btn-outline-primary");
  const  onCopy=()=> {
        setcop(true);
        setbtnt("Copied");
        setboxx("#70e08a");
        setbcol("btn btn-success")
      }
      const  onCopy1=()=> {
        setcop1(true);
        setbtnt1("Copied");
        setboxx1("#70e08a");
        setbcol1("btn btn-success")
      }
    return (
        <>
      <div className="container px-2 py-2">   
<header><h1>{UseTitle}</h1></header>
<p>{UsePara}</p>



<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
{children}
{code &&<><div className="daba2" style={{backgroundColor:`${boxx}`}}>
<h7>{code}</h7>
<br/>
    <CopyToClipboard text={code} onCopy={cop}>
          <button className={bcol} onClick={onCopy}>{btnt}</button>
        </CopyToClipboard>
</div></>}
{code2 &&<><div className="daba2" style={{backgroundColor:`${boxx1}`}}>
<h7>{code2}</h7>
<br/>
    <CopyToClipboard text={code2} onCopy={cop1}>
          <button className={bcol1} onClick={onCopy1}>{btnt1}</button>
        </CopyToClipboard>
</div></>}
</div>
<div className="col-lg-6 order-2 order-lg-2 mt-2 header_img">
{imgsrc && <img className=" ml-3 img-fluid"  src={imgsrc} alt="pics"/>
}
</div>
</div>
</div>

         
        </>
    )
}

export default PostCodeTemplate
