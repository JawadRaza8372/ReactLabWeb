import React,{useState,useEffect} from 'react'
import {Route,Switch,Redirect,useLocation} from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import AboutPage from "./AboutPage";
import Home from "./Home";
import Overview from "./OverView"
import UploadPost from "./UploadPost"
import Avatarr from "./Avatarr"
import Others from "./Others"
import Login from "./Login"
import UploadCategory from "./UploadCategory"
import {db} from "./FirebaseConfig";


import {aavatar,abadge,aBottomSheet,aButton,aButtonGroup,aCard,aCheckBox,aDivider,aHeader,aIcon,aImage,aInput,aListItem,aOverlay,
    aPricing,aRating,aSearchBa,aSlider,aSocialIcon,aText,aTile,aTooltip} from "./CompHeaderDta";
import { AnimatePresence } from 'framer-motion';
function Routess({userStatus,data}) {
    const location=useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
         <Switch location={location} key={location.key}>
             <Route exact={true} path="/home" component={Home}/>
             <Route exact={true} path="/login" render={() => (<Login rexx={userStatus} />)}/>
             <Route exact={true} path="/about" component={AboutPage}/>
             <Route exact={true} path="/">
    <Redirect to="/home" />
</Route>

             <Route exact={true} path="/addCategory" render={() => (<UploadCategory rexx={userStatus} />)} />
             <Route exact={true} path="/upload" render={() => (<UploadPost rexx={userStatus} />)} />
             <Route exact={true} path="/overview" component={Overview} />
             <Route exact={true} path="/others" component={Others} />







           {data && data.map((avin)=>{
               return (
                   <Route exact={true} path={avin.post.path} key={avin.id} render={() =>{ 
                   
                 return ( <Avatarr titlell={avin.post.text} parar={avin.post.para} />)
                   }}/>
                   
                   )}) }
             



             <Route exact={true} path="/docs" component={About}/>
             <Route exact={true} path="/contact" component={Contact}/>
             <Route component={""}/>
         </Switch>
        </AnimatePresence>
    )
}

export default Routess
