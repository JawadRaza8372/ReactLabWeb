import React,{useState} from 'react'
import {storage} from "./FirebaseConfig"
function FileUploaderModule() {
    const [filef,setfilf]=useState(null);
    const fileSelector = (e) => {
        console.log(e.target.files[0]);
                      setfilf(e.target.files[0]);   
                            };  
                            
                           const  upload=()=>{
                            {
                              filef &&  storage.ref("images/").child(filef.name).put(filef).then(function(snapshot) {
                                console.log('Uploaded a blob or file!');
                                storage.ref("images/").child(filef.name).getDownloadURL().then(url => {console.log(url)})
                              }); 
                            }

                           } 
    return (
       <>
       <div>
           <input type="file" onChange={fileSelector}/><br/><br/>
<button onClick={upload}>upload</button></div>
<br/>
<img src="https://firebasestorage.googleapis.com/v0/b/reactlab-1b606.appspot.com/o/images%2Flogo%20(2).png?alt=media&token=43abfe92-dd57-4495-9514-25994568e3aa"></img>
<br/>
<p style={{textAlign:"center",color:"green"}}>Post Uploaded</p>
<p style={{textAlign:"center",color:"red"}}>Post</p>

       </>
    )
}

export default FileUploaderModule
