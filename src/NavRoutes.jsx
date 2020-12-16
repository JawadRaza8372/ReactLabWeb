import React from "react";
import ReactNavbar from "./ReactNavbar";

import {useLocation} from "react-router-dom";
import SideNav from "./SideNav"
import Routess from "./Routess";

function NavRoutes(){
    const location =useLocation().pathname;
    console.log(location)
    return(<>
    
{(location.match("/home"|| "/"))?
  <> <ReactNavbar/>
  <Routess/>
  </>:<SideNav>
  <Routess/>

   </SideNav>
}
         

    </>);
    }
    export default NavRoutes; 