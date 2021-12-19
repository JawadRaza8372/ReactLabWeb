import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import AboutPage from "./Pages/AboutPage";
import Home from "./Pages/Home";
import Overview from "./Pages/OverView";
import UploadPost from "./Pages/UploadPost";
import Avatarr from "./Components/Avatarr";
import Others from "./Pages/Others";
import Login from "./Pages/Login";
import ComponentUpdateDELT from "./Pages/ComponentUpdateDELT";
import UploadCategory from "./Pages/UploadCategory";
import Search from "./Pages/Search";

import { AnimatePresence } from "framer-motion";
function Routess({ userStatus, data }) {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact={true} path="/home" component={Home} />
        <Route
          exact={true}
          path="/login"
          render={() => <Login rexx={userStatus} />}
        />
        <Route
          exact={true}
          path="/ComponentMod"
          render={() => <ComponentUpdateDELT rexx={userStatus} />}
        />

        <Route exact={true} path="/about" component={AboutPage} />
        <Route exact={true} path="/">
          <Redirect to="/home" />
        </Route>

        <Route
          exact={true}
          path="/addCategory"
          render={() => <UploadCategory rexx={userStatus} />}
        />
        <Route
          exact={true}
          path="/upload"
          render={() => <UploadPost rexx={userStatus} />}
        />
        <Route exact={true} path="/overview" component={Overview} />
        <Route exact={true} path="/others" component={Others} />
        <Route exact={true} path="/searchComponent" component={Search} />

        {data &&
          data.map((avin) => {
            return (
              <Route
                exact={true}
                path={avin.post.path}
                key={avin.id}
                render={() => {
                  return (
                    <Avatarr titlell={avin.post.text} parar={avin.post.para} />
                  );
                }}
              />
            );
          })}

        <Route exact={true} path="/docs" component={About} />
        <Route exact={true} path="/contact" component={Contact} />
        <Route component={""} />
      </Switch>
    </AnimatePresence>
  );
}

export default Routess;
