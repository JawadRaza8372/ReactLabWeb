import React from "react";
import ReactNavbar from "./ReactNavbar";

import {useLocation} from "react-router-dom";
import SideNavTest from "./SideNavTest"
import Routess from "./Routess";

function NavRoutes({status,data}){
    const location =useLocation().pathname;
    return(<>
    
{(location.match("/home"|| "/"))?
  <> <ReactNavbar userStatus={status}/>
  <Routess userStatus={status} data={data}/>
  </>:(location.match("/about"))?
  <> <ReactNavbar userStatus={status}/>
   <Routess userStatus={status} data={data}/>
  </>:(location.match("/upload"))?
  <> <ReactNavbar userStatus={status}/>
   <Routess userStatus={status} data={data}/>
  </>:(location.match("/addCategory"))?
  <> <ReactNavbar userStatus={status}/>
   <Routess userStatus={status} data={data}/>
  </>:(location.match("/ComponentMod"))?
  <> <ReactNavbar userStatus={status}/>
   <Routess userStatus={status} data={data}/>
  </>:(location.match("/login"))?
  <> <ReactNavbar  userStatus={status}/>
  <Routess userStatus={status}/>
  </>:(location.match("/searchComponent"))?
  <> <ReactNavbar userStatus={status}/>
   <Routess userStatus={status} data={data}/>
  </>:
  <SideNavTest userStatus={status}>
   <Routess userStatus={status} data={data}/>

   </SideNavTest>

}
         

    </>);
    }
    export default NavRoutes; 