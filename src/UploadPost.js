import React,{useEffect, useState} from 'react'
import axios from "axios"
import "./index.css";
import FileUploader from 'react-firebase-file-uploader';
import {storage,auth, db} from "./FirebaseConfig"
import {Redirect, useHistory} from "react-router-dom"
import { setRef } from '@material-ui/core';
import {cate} from "./sideManuItems"
import Template from './Template';
import TemplateBlue from './TemplateBlue';
import {motion} from "framer-motion"

import FileUploaderModule from './FileUploaderModule';
function UploadPost({rexx}) {
    const [state, setstate] = useState({title:null,img:null,video:null,para:null,code:null,category:null});
    const [fs,setf]=useState(null);
    let location =useHistory();
    let [filef,setfilf]=useState("");
    const [rex, setR] = useState(false)
    const [fimg,setfimg]=useState(null);
    const ButtonCvarients2={init1:{y:'100vw'},anim1:{y:0,transition:{delay:3,duration:3}}};
    const btnHover={hovers:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",transition:{yoyo:Infinity,duration:0.4,type:"spring",stiffness:520}}}
    
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

        if(state.category){
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
        else{
          alert("Category Is Not Selected ")
        }

                 
             
           
              
            
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
                                          
                                          if (rexx)
                                           {return(
                                            <TemplateBlue>
                                                  
                                      
                                            {rex && <Redirect push to="/home"/>}
                                              <form style={{ width:"40%",maxHeight:"80vh",overflowY:"auto",backgroundColor:"white",padding:"20px",margintop:"25px",borderRadius:"25px"}} onSubmit={submit}>
                                      <h2 className="blacksimpletxt" style={{color:"#2089dc",textAlign:"center"}}>Upload Component</h2><br/>
                                      <div className="form-group mb-3">
                                          <motion.input variants={btnHover} whileHover="hovers" type="text" className="form-control" style={{border:"2px solid #2089dc",color:"#2089dc"}} onChange={handlein} id="title" autoComplete="off" placeholder="Title" required/>
                                        </div>
                                        <div className="form-group mb-3">
                                          <motion.textarea variants={btnHover} whileHover="hovers" type="text" className="form-control" style={{border:"2px solid #2089dc",color:"#2089dc"}} onChange={handlein} id="para" autoComplete="off" placeholder="Description"  required/>
                                        </div>
                                        <div className="form-group mb-3">
                                          <motion.textarea variants={btnHover} whileHover="hovers" type="text" className="form-control" style={{border:"2px solid #2089dc",color:"#2089dc"}} onChange={handlein} id="code" autoComplete="off" placeholder="Code"/>
                                        </div>
                                        <div className="form-group mb-3">
                                          <motion.input variants={btnHover} whileHover="hovers"  type="text" className="form-control" style={{border:"2px solid #2089dc",color:"#2089dc"}} onChange={handlein} id="video" autoComplete="off" placeholder="Video Link"/>
                                        </div>
                                        <div className="row mb-3">
                                                                      <div className="col-12">
                                                                       <motion.select variants={btnHover} whileHover="hovers" defaultValue="Category" onChange={handlein} style={{width:"100%",height:"40px",backgroundColor:"#f4f7fa",border:"2px solid #2089dc",color:"#2089dc"}} name="cars" id="category">
                                                                       <option  disabled>Category</option>
                                                                      {cate && cate.map((avin)=><option  className="maincolor" >{avin.text}</option>) }
                                                                       
                                                                       </motion.select></div></div><br/>
                                                                      
                                       
                                        <div className="form-group mb-3">
                                      
                                              
                                      <input type="file"  style={{color:"#2089dc"}}  onChange={fileSelector}/>
                                       
                                      { fimg && <img style={{width:"100%",height:"100px",objectFit:"contain"}} src={`${fimg}`} alt="pjo"/>
                                      } 
                                       {(fs)? <> <br/><p style={{textAlign:"center",color:"green"}}>Image Uploaded</p></>:<p>Select Image For Preview</p> }
                                       
                                        </div>
                                                
                                      
                                        <motion.button type="submit" variants={btnHover} whileHover="hovers"  className="btn bttn btn-outline-primary">Upload Post</motion.button>
                                      </form>
                                      <br/><br/>
                                      
                                      <br/><br/>
                                      <br/><br/>
                                      
                                      </TemplateBlue>
                                          )}
                                          else
                                          {return (<Redirect push to="/login"/>)}        
                    
    










}

export default UploadPost
