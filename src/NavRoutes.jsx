import React from "react";
import ReactNavbar from "./ReactNavbar";

import {useLocation} from "react-router-dom";
import SideNav from "./SideNav"
import SideNavTest from "./SideNavTest"
import Routess from "./Routess";

function NavRoutes({status}){
    const location =useLocation().pathname;
    return(<>
    
{(location.match("/home"|| "/"))?
  <> <ReactNavbar userStatus={status}/>
  <Routess userStatus={status}/>
  </>:(location.match("/about"))?
  <> <ReactNavbar userStatus={status}/>
  <Routess  userStatus={status}/>
  </>:(location.match("/upload"))?
  <> <ReactNavbar userStatus={status}/>
  <Routess  userStatus={status}/>
  </>:(location.match("/login"))?
  <> <ReactNavbar  userStatus={status}/>
  <Routess userStatus={status}/>
  </>:
  <SideNavTest userStatus={status}>
  <Routess  userStatus={status}/>

   </SideNavTest>

}
         

    </>);
    }
    export default NavRoutes; 