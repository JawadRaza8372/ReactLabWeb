import React from 'react'
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

import {aavatar,abadge,aBottomSheet,aButton,aButtonGroup,aCard,aCheckBox,aDivider,aHeader,aIcon,aImage,aInput,aListItem,aOverlay,
    aPricing,aRating,aSearchBa,aSlider,aSocialIcon,aText,aTile,aTooltip} from "./CompHeaderDta";
import { AnimatePresence } from 'framer-motion';
function Routess({userStatus}) {
    const location=useLocation();
    console.log(location);
    return (
        <AnimatePresence exitBeforeEnter>
         <Switch location={location} key={location.key}>
             <Route exact={true} path="/home" component={Home}/>
             <Route exact={true} path="/login" render={() => (<Login rexx={userStatus} />)}/>
             <Route exact={true} path="/about" component={AboutPage}/>
             <Route exact={true} path="/">
    <Redirect to="/home" />
</Route>
             <Route exact={true} path="/upload" render={() => (<UploadPost rexx={userStatus} />)} />
             <Route exact={true} path="/overview" component={Overview} />
             <Route exact={true} path="/others" component={Others} />
             <Route exact={true} path="/avatarr" render={() => (<Avatarr titlell={aavatar.title} parar={aavatar.para} />)}/>  
             <Route exact={true} path="/badge" render={() => (<Avatarr titlell={abadge.title} parar={abadge.para}/>)}/>  
             <Route exact={true} path="/bottomSheet" render={() => (<Avatarr titlell={aBottomSheet.title} parar={aBottomSheet.para}/>)}/>  
             <Route exact={true} path="/button" render={() => (<Avatarr titlell={aButton.title} parar={aButton.para}/>)}/>  
             <Route exact={true} path="/buttonGroup" render={() => (<Avatarr titlell={aButtonGroup.title} parar={aButtonGroup.para}/>)}/>  
             <Route exact={true} path="/card" render={() => (<Avatarr titlell={aCard.title} parar={aCard.para}/>)}/>  
             <Route exact={true} path="/checkBox" render={() => (<Avatarr titlell={aCheckBox.title} parar={aCheckBox.para}/>)}/>  
             <Route exact={true} path="/divider" render={() => (<Avatarr titlell={aDivider.title} parar={aDivider.para}/>)}/>  
             <Route exact={true} path="/header" render={() => (<Avatarr titlell={aHeader.title} parar={aHeader.para}/>)}/>  
             <Route exact={true} path="/icon" render={() => (<Avatarr titlell={aIcon.title} parar={aIcon.para}/>)}/>  
             <Route exact={true} path="/image" render={() => (<Avatarr titlell={aImage.title} parar={aImage.para}/>)}/>  
             <Route exact={true} path="/input" render={() => (<Avatarr titlell={aInput.title} parar={aInput.para}/>)}/>  
             <Route exact={true} path="/listItem" render={() => (<Avatarr titlell={aListItem.title} parar={aListItem.para}/>)}/>  
             <Route exact={true} path="/overLay" render={() => (<Avatarr titlell={aOverlay.title} parar={aOverlay.para}/>)}/>  
             <Route exact={true} path="/pricing" render={() => (<Avatarr titlell={aPricing.title} parar={aPricing.para}/>)}/>  
             <Route exact={true} path="/rating" render={() => (<Avatarr titlell={aRating.title} parar={aRating.para}/>)}/>  
             <Route exact={true} path="/searchBar" render={() => (<Avatarr titlell={aSearchBa.title} parar={aSearchBa.para}/>)}/>  
             <Route exact={true} path="/slider" render={() => (<Avatarr titlell={aSlider.title} parar={aSlider.para}/>)}/>  
             <Route exact={true} path="/socialIcon" render={() => (<Avatarr titlell={aSocialIcon.title} parar={aSocialIcon.para}/>)}/>  
             <Route exact={true} path="/text" render={() => (<Avatarr titlell={aText.title} parar={aText.para}/>)}/>  
             <Route exact={true} path="/tile" render={() => (<Avatarr titlell={aTile.title} parar={aTile.para}/>)}/>  
             <Route exact={true} path="/toolTip" render={() => (<Avatarr titlell={aTooltip.title} parar={aTooltip.para}/>)}/>  
             <Route exact={true} path="/docs" component={About}/>
             <Route exact={true} path="/contact" component={Contact}/>
             <Route component={""}/>
         </Switch>
        </AnimatePresence>
    )
}

export default Routess
