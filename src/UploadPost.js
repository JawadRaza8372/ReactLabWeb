import React,{useEffect, useState} from 'react'
import axios from "axios"
import "./index.css";
import FileUploader from 'react-firebase-file-uploader';
import {storage,auth, db} from "./FirebaseConfig"
import {Redirect, useHistory} from "react-router-dom"
import { setRef } from '@material-ui/core';
import {cate} from "./sideManuItems"
import Template from './Template';
import FileUploaderModule from './FileUploaderModule';
function UploadPost() {
    const [state, setstate] = useState({title:null,img:null,video:null,para:null,code:null,category:null});
    const [fs,setf]=useState(null);
    let location =useHistory();
    let [filef,setfilf]=useState("");
    const [rex, setR] = useState(false)
    const [fimg,setfimg]=useState("https://picsum.photos/200/300");
let constt="";
    const handlein=(e)=>{
        const name=e.target.id;
        const value=e.target.value;
        setstate((prevalue)=>{
                return{
                    ...prevalue,
                    [name]:value
                }
            })
        }
            const submit=(e)=>{
                e.preventDefault();
        console.log(state);

                    db.collection('posts').add({
                       title:state.title,
                       video:state.video,
                       para:state.para,
                       code:state.code,
                        img:state.img,
                        category:state.category
                    }).then(()=>{console.log("------datasaved--posted---"); 
                     setR(true)
                    });
             
           
              
            
                  }

            const handleUploadSuccess = filename => {
              storage.ref("images/") 
                .child(filename)
                .getDownloadURL()
                .then(url => { state.img= url.toString();
console.log("success");      setfimg(url);setf("success")

              }
                );
            };

         
                   const fileSelector = (e) => {
                      console.log(e.target.files[0]);
                                    setfilf(e.target.files[0]);  
                                    filef=e.target.files[0]
                  console.log(e.target.files[0].name)
                                    storage.ref("images/").child(e.target.files[0].name).put(filef).then(()=> {
                                      console.log('Uploaded');
                                      constt=filef.name
                                     setInterval(7000);
                                     console.log(constt)
                                    handleUploadSuccess(constt);
                                    }); 
                  
                                   
                                          };  
                                          
                    
                    
    return (
      <Template>
      {rex && <Redirect push to="/home"/>}
        <form onSubmit={submit}>
<h1 className="blacksimpletxt" style={{color:"#0d6efd",textAlign:"center"}}>Share Your Memories</h1><br/>
<div className="form-group mb-3">
    <input type="text" className="form-control" onChange={handlein} id="title" autoComplete="off" placeholder="Title"/>
  </div>
  <div className="form-group mb-3">
    <input type="text" className="form-control" onChange={handlein} id="para" autoComplete="off" placeholder="Description"/>
  </div>
  <div className="form-group mb-3">
    <input type="text" className="form-control" onChange={handlein} id="code" autoComplete="off" placeholder="Code"/>
  </div>
  <div className="form-group mb-3">
    <input type="text" className="form-control" onChange={handlein} id="video" autoComplete="off" placeholder="Video Link"/>
  </div>
  <div className="row mb-3">
                                <div className="col-12">
                                 <select defaultValue="Category" onChange={handlein} style={{width:"100%",height:"40px",backgroundColor:"#f4f7fa",borderColor:"#ced4da",color:"#495057"}} name="cars" id="category">
                                 <option  disabled>Category</option>
                                {cate && cate.map((avin)=><option>{avin.text}</option>) }
                                 
                                 </select></div></div><br/>
                                
 
  <br/>
  <div className="form-group mb-3">

        
<input type="file" onChange={fileSelector}/>
 
  <img style={{width:"100%",height:"300px",objectFit:"contain"}} src={`${fimg}`} alt="pjo"/>
 
 {fs &&<> <br/><p style={{textAlign:"center",color:"green"}}>Image Uploaded</p></> }
 
  </div>
          

  <br/>
  <button type="submit"  className="btn bttn btn-outline-primary">Upload Post</button>
</form>
<br/><br/>

<br/><br/>
<br/><br/>

</Template>
    )
}

export default UploadPost
