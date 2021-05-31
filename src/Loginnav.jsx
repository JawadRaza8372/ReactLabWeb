import React from 'react'
import {NavLink} from "react-router-dom";
import {auth} from "./FirebaseConfig"

function Loginnav() {
    return (
       <React.Fragment>
            <NavLink style={{marginRight:"15px"}} exact activeClassName="active_class"    className="nav-link h6"  to="/upload">Upload Component</NavLink>
<NavLink style={{marginRight:"15px"}} exact activeClassName="active_class"    className="nav-link h6" to="/addCategory">Add Category</NavLink>
<NavLink style={{marginRight:"15px"}} exact activeClassName="active_class"    className="nav-link h6" to="/ComponentMod">Update</NavLink>
        <NavLink style={{marginRight:"15px"}} exact activeClassName="active_class"    className="nav-link h6" onClick={()=>{auth.signOut()}}  to="">Logout</NavLink>

        </React.Fragment>
    )
}

export default Loginnav
