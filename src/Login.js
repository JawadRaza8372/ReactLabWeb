import React,{useEffect, useState} from 'react'
import "./index.css";
import {storage,auth, db} from "./FirebaseConfig"
import {Redirect, useHistory} from "react-router-dom"
import Template from './Template';
function Login({rexx}) {

    const [state, setstate] = useState({email:null,password:null});
    const [suser,setuser]=useState(null);
    const [success, setSuccess] = useState(null);
    const [failure, setfailure] = useState(null);

    const [Error, setError] = useState(null)
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
    auth.signInWithEmailAndPassword(
     state.email,
      state.password
    ).then(() => {
      console.log('LOGIN_SUCCESS');
      setSuccess("done")
    }).catch((err) => {
      console.log('LOGIN_failed');
      setfailure(err)
    });
        }
       
if(rexx){
return <Redirect push to="/upload"/>
}
else{




    return (
        <>
                  <Template>
                  <div style={{display: "flex",justifyContent:"center",alignItems: "center",marginTop:"10%",marginBottom:"10%",paddingBottom:"auto",paddingTop:"auto"}}>

        <form className="herobg" style={{border:"2px solid #3578e5",padding:"20px",margintop:"20px"}} onSubmit={submit}>
<h1 className="blacksimpletxt" style={{color:"white",textAlign:"center"}}>Login</h1>
<h6 className="blacksimpletxt" style={{color:"red",textAlign:"center",fontSize:"14px"}}>For Admins Only</h6>
<br/>
<div className="form-group mb-3">
    <input type="email" className="form-control" onChange={handlein} id="email" autoComplete="off" placeholder="User Email"/>
  </div>
  <div className="form-group mb-3">
    <input type="password" className="form-control" minLength="6" onChange={handlein} id="password" autoComplete="off" placeholder="User Password"/>
  </div>
  
  
  {failure && <><br/><p style={{color:"red",fontSize:"14px"}}>Login Failed </p><p style={{fontSize:"12px",color:"red"}}>({failure.message})</p></>}
  {success && <Redirect push to="/upload"/>}

  <br/>
  <button type="submit"  className="btn bttn btn-outline-light">Login</button>
</form>
<br/><br/>

<br/><br/>
<br/><br/>
</div>
</Template>
        </>
    )}
}

export default Login
