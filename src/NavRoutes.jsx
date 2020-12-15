import React from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import ReactNavbar from "./ReactNavbar";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Home from "./Home";
import {useLocation} from "react-router-dom";
import ReactNavbar2 from "./ReactNavbar2"
import SideNav from "./SideNav"
import Overview from "./OverView"
import Avatarr from "./Avatarr"
function NavRoutes(){
    const location =useLocation().pathname;
    return(<>
    
{(location.match("/home"|| "/"))?
  <> <ReactNavbar/><Switch>

             <Route exact={true} path="/home" component={Home}/>
             <Route exact={true} path="/">
    <Redirect to="/home" />
</Route>
             <Route exact={true} path="/services" component={Service} />
             <Route exact={true} path="/overview" component={Overview} />
             <Route exact={true} path="/avatarr" component={Avatarr} />
             <Route exact={true} path="/about" component={About}/>
             <Route exact={true} path="/contact" component={Contact}/>
             <Route component={""}/>
         </Switch></>:<SideNav>
   <Switch>
             <Route exact exact={true} path="/home" component={Home}/>
             <Route exact={true} path="/">
    <Redirect to="/home" />
</Route>
             <Route exact={true} path="/services" component={Service} />
             <Route exact={true} path="/overview" component={Overview} />
             <Route exact={true} path="/avatarr" component={Avatarr} />
             <Route exact={true} path="/about" component={About}/>
             <Route exact={true} path="/contact" component={Contact}/>
             <Route component={""}/>
         </Switch>
   </SideNav>
}
         

    </>);
    }
    export default NavRoutes; 