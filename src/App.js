import React,{useState,useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import NavRoutes from "./NavRoutes";
import {auth} from "./FirebaseConfig"

function App() {
const [user, setuser] = useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
        if (user) {
          var uid = user.uid;
            setuser(user.uid);
          }
           else {
            setuser(null);
            console.log("   ------datasave--error---");
      }});

      
},[]);     

  return (
    <>
<NavRoutes status={user}/>


    </>
  );
}

export default App;
