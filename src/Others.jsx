import React,{useState,useEffect} from "react";
import CodeTemplate from "./CodeTemplate";
import PostCodeTemplate from "./PostCodeTemplate";
import {db} from "./FirebaseConfig";
function Others(){
  const titlell="Other";
  const [posts,setposts]=useState("");
  useEffect(()=>{
    db.collection("posts").onSnapshot((snapshot)=>{
      setposts(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
    })
    },[]);
    let para="React Lab+ contains many other features and reusable features like themes build by React Lab ,IOTs components ,Firebase Backend etc.";
    return(<>
      <CodeTemplate title="React Lab+" titlepara={para}>
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
export default Others;