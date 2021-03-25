import React,{useState,useEffect} from "react";
import CodeTemplate from "./CodeTemplate";
import PostCodeTemplate from "./PostCodeTemplate";
import {db} from "./FirebaseConfig";
import {motion} from "framer-motion"
function Others(){
  const titlell="Other";
  const exitDiv={init:{x:'-100vw'},anim:{x:0,transition:{duration:1}},animat:{x:"-100vw",transition:{duration:1,ease:"easeInOut"}}};

  const [posts,setposts]=useState("");
  useEffect(()=>{
    db.collection("posts").onSnapshot((snapshot)=>{
      setposts(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
    })
    },[]);
    let para="React Lab+ contains many other features and reusable features like themes build by React Lab ,IOTs components ,Firebase Backend etc.";
    return(<motion.div variants={exitDiv} exit="animat" initial="init" animate="anim">
      <CodeTemplate title="React Lab+" titlepara={para}>
      {posts && posts.map((avin,index)=>{ 
        if (avin.post.category=== titlell){
          return <PostCodeTemplate key={index} UseTitle={avin.post.title} videoLink={avin.post.video} UsePara={avin.post.para} code={avin.post.code} imgsrc={avin.post.img}/>

        }
        else{
          return null;
        }})}
      </CodeTemplate>
    </motion.div>);
}
export default Others;