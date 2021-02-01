import React,{useEffect,useState} from "react";
import CodeTemplate from "./CodeTemplate";
import PostCodeTemplate from "./PostCodeTemplate";
import {db} from "./FirebaseConfig";
function Avatarr({titlell,parar}){
  const [posts,setposts]=useState("");
  useEffect(()=>{
    db.collection("posts").onSnapshot((snapshot)=>{
      setposts(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
    })
    },[]);
    return(<>
    
      <CodeTemplate title={titlell} titlepara={parar}>
      <h1>Usage</h1>
      {posts && posts.map((avin,index)=>{ 
        if (avin.post.category=== titlell){
          return <PostCodeTemplate key={index} UseTitle={avin.post.title} videoLink={avin.post.video} UsePara={avin.post.para} code={avin.post.code} imgsrc={avin.post.img}/>

        }
        else{
          return null;
        }})}
      </CodeTemplate>
    </>);
}
export default Avatarr;