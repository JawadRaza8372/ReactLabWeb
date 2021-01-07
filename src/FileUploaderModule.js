import React,{useState} from 'react'
import {storage} from "./FirebaseConfig"
function FileUploaderModule({onChangeF,successf,fimg}) {                           
    return (
       <>
      
<input type="file" onChange={onChangeF}/>
 
{fimg && <img style={{width:"100%",height:"300px",objectFit:"contain"}} src={fimg} alt="pjo"/>
}<br/>
{successf && <p style={{textAlign:"center",color:"green"}}>Post Uploaded</p> }

<br/>
       </>
    )
}

export default FileUploaderModule;

