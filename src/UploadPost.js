import React,{useEffect, useState} from 'react'
import "./index.css";
import FileUploader from 'react-firebase-file-uploader';
import {storage,auth, db} from "./FirebaseConfig";
import { setRef } from '@material-ui/core';
import {cate} from "./sideManuItems"
import Template from './Template';
function UploadPost() {
    const [state, setstate] = useState({title:null,img:null,video:null,para:null,code:null,category:null});
    const [fs,setf]=useState(null);
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
                        img:state.img
                    }).then(()=>console.log("------datasaved--posted---")).catch((error)=>{console.log("ufff")})
                
            }
                           
const handleUploadSuccess = filename => {
                        storage.ref("images") 
                          .child(filename)
                          .getDownloadURL()
                          .then(url => { state.img= url;
console.log("success");     
setf("done");
                        }
                          );
                      };

                      const handleUploadError = error => {
                        console.error(error);
                    };
                    
                    
    return (
      <Template>
        <form onSubmit={submit}>
<h1 className="blacksimpletxt" style={{color:"#0d6efd",textAlign:"center"}}>Share Your Memories</h1><br/>
<div className="form-group">
    <input type="text" className="form-control" onChange={handlein} id="title" autoComplete="off" placeholder="Title"/>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" onChange={handlein} id="para" autoComplete="off" placeholder="Description"/>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" onChange={handlein} id="code" autoComplete="off" placeholder="Code"/>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" onChange={handlein} id="video" autoComplete="off" placeholder="Video Link"/>
  </div>
  <div className="row">
                                <div className="col-12">
                                 <select defaultValue={null} onChange={this.handlein} style={{width:"100%",height:"40px",backgroundColor:"#f4f7fa",borderColor:"#ced4da",color:"#495057"}} name="cars" id="category">
                                 <option  disabled>Category</option>
                                {cate && cate.map((avin)=><option>{avin.text}</option>) }
                                 
                                 </select></div></div><br/>
                                
 
  <br/>
  <div className="form-group">
  <FileUploader className="component"
            accept='*' name='avatar'
            randomizeFilename
            storageRef={
              storage.ref("images")
            }
            onUploadStart = {null}
            onUploadError = {handleUploadError}
            onUploadSuccess = {handleUploadSuccess}
            onProgress = {null}
          /></div>
          <p className="blacksimpletxt">Profile Picture Status:{(fs==="done")?"uploaded":null}</p>

  <br/>
  <button type="submit"  className="btn bttn btn-outline-primary">Upload Post</button>
</form>
</Template>
    )
}

export default UploadPost
