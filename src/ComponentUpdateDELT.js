import React,{useEffect, useState} from 'react'
import "./index.css";
import {db} from "./FirebaseConfig"
import {Redirect} from "react-router-dom"
import MiniCard,{MiniCard2} from './MiniCard';
function ComponentUpdateDELT({rexx}) {
 const [posts,setposts]=useState('');
    const [posts2,setposts2]=useState('');
 
        useEffect(()=>{
          db.collection("posts").onSnapshot((snapshot)=>{
            setposts(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
          });

          },[]);
          useEffect(()=>{
            db.collection("menu").onSnapshot((snapshot)=>{
              setposts2(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
            })
            },[]);
    
       
if(!rexx){
return <Redirect push to="/login"/>
}
else{




    return (
       
        <div className="herobg">
        <div className="m-5">
     <h1 style={{textAlign:"center",color:"white"}}> Category </h1> 
     </div>
     <div className="container-fluid mb-5">
     <div className="row">
      <div className="col-10 mx-auto">
      <div className="container pl-4 pr-4">
 <div className="row gy-4">
 {posts2 && posts2.map((avin)=>{ 
        return (<MiniCard2 title={avin.post.text} key={avin.id} path={avin.post.path} data={avin}/>)
        })}


  </div> </div> </div> </div> </div>
        <div className="m-5">
     <h1 style={{textAlign:"center",color:"white"}}> Components </h1> 
     </div>
     <div className="container-fluid mb-5">
     <div className="row">
      <div className="col-10 mx-auto">
      <div className="container pl-4 pr-4">
 <div className="row gy-4">
 {posts && posts.map((avin)=>{ 
        return (<MiniCard title={avin.post.title} key={avin.id} category={avin.post.category} data={avin}/>)
        })}


  </div> </div> </div> </div> </div>
        </div>

        
    )}
}

export default ComponentUpdateDELT
