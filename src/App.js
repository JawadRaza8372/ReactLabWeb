import React,{useState,useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import NavRoutes from "./NavRoutes";
import {auth,db} from "./FirebaseConfig"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function App() {
const [user, setuser] = useState(null)
const [posts, setposts] = useState(null)
AOS.init();

  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
        if (user) {
            setuser(user.uid);
          }
           else {
            setuser(null);
            console.log("   ------datasave--error---");
      }});

      
},[]);  
let fetcmenu=async()=>{
  await db.collection("menu").orderBy('text',"asc").get().then((snapshot)=>{
    setposts(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
  })
}   
console.log(posts)
useEffect(()=>{
 fetcmenu()
 
});


  return (
    
<NavRoutes status={user} data={posts}/>


    
  );
}

export default App;
