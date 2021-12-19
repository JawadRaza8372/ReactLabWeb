import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import About from "../Pages/About";
import AboutPage from "../Pages/AboutPage";
import Home from "../Pages/Home";
import Overview from "../Pages/OverView";
import UploadPost from "../Pages/UploadPost";
import Avatarr from "../Components/Avatarr";
import Others from "../Pages/Others";
import Login from "../Pages/Login";
import ComponentUpdateDELT from "../Pages/ComponentUpdateDELT";
import UploadCategory from "../Pages/UploadCategory";
import Search from "../Pages/Search";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
let ProtectedRoute = ({ children, ...res }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Route
      {...res}
      render={() => {
        return !user ? <Redirect to="/login" /> : children;
      }}
    ></Route>
  );
};
let GuestRoute = ({ children, ...res }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Route
      {...res}
      render={() => {
        return user ? <Redirect to="/ComponentMod" /> : children;
      }}
    ></Route>
  );
};
function Routess({ userStatus, data }) {
  const location = useLocation();
  const { menu } = useSelector((state) => state.menu);

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact={true} path="/home" component={Home} />

        <GuestRoute exact={true} path="/login">
          <Login rexx={userStatus} />
        </GuestRoute>
        <ProtectedRoute exact={true} path="/ComponentMod">
          <ComponentUpdateDELT rexx={userStatus} />
        </ProtectedRoute>
        <ProtectedRoute exact={true} path="/addCategory">
          <UploadCategory rexx={userStatus} />
        </ProtectedRoute>
        <ProtectedRoute exact={true} path="/upload">
          <UploadPost rexx={userStatus} />
        </ProtectedRoute>

        <Route exact={true} path="/about" component={AboutPage} />
        <Route exact={true} path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact={true} path="/overview" component={Overview} />
        <Route exact={true} path="/others" component={Others} />
        <Route exact={true} path="/searchComponent" component={Search} />

        {menu &&
          menu.map((avin) => {
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
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default Routess;
