import React from 'react'
import {Route,Switch,Redirect} from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Home from "./Home";
import Overview from "./OverView"
import Avatarr from "./Avatarr"
function Routess() {
    const title="try not to make 22 pages just for components"
    const title2="try not to make 22 pages jjj just for components----"

    return (
        <div>
         <Switch>
             <Route exact exact={true} path="/home" component={Home}/>
             <Route exact={true} path="/">
    <Redirect to="/home" />
</Route>
             <Route exact={true} path="/services" component={Service} />
             <Route exact={true} path="/overview" component={Overview} />
             <Route exact={true} path="/badge" render={() => (<Avatarr titlell={title2} />)}/>  
             <Route exact={true} path="/avatarr" render={() => (<Avatarr titlell={title} />)}/>  
             <Route exact={true} path="/about" component={About}/>
             <Route exact={true} path="/contact" component={Contact}/>
             <Route component={""}/>
         </Switch>
        </div>
    )
}

export default Routess
