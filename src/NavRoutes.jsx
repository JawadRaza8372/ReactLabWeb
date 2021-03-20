import React from "react";
import ReactNavbar from "./ReactNavbar";

import {useLocation} from "react-router-dom";
import SideNav from "./SideNav"
import SideNavTest from "./SideNavTest"
import Routess from "./Routess";

function NavRoutes(){
    const location =useLocation().pathname;
    return(<>
    
{(location.match("/home"|| "/"))?
  <> <ReactNavbar/>
  <Routess/>
  </>:(location.match("/about"))?
  <> <ReactNavbar/>
  <Routess/>
  </>:(location.match("/upload"))?
  <> <ReactNavbar/>
  <Routess/>
  </>:
  <SideNavTest>
  <Routess/>

   </SideNavTest>

}
         

    </>);
    }
    export default NavRoutes; 