import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Link} from 'react-router-dom'


const SideDrawerRookies = props =>{
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = "side-drawer open"
    }
    return(
    <nav className = {drawerClasses}>
        <ul className = "sideDrawerList">
        <li><img class = "nav_Logo sideDrawerLogo" src = {require("../images/ReverseLogo.png")} alt=""/></li>
            <li><FontAwesomeIcon className = "sidedrawerIcon" size= "2x" icon = "home" /><a href = "/">Home</a></li>
            <li><FontAwesomeIcon className = "sidedrawerIcon" size= "2x" icon = "robot" /><a href = "firstroboticscanada.org">About Us</a></li>
            <li><FontAwesomeIcon className = "sidedrawerIcon" size= "2x" icon = "project-diagram" /><Link className = "Nav_Link" to = "signup">Start a Team</Link></li>
            <li><FontAwesomeIcon className = "sidedrawerIcon" size= "2x" icon = "phone-square" /><Link className = "Nav_Link" to = "register">Register</Link></li>
            <li><FontAwesomeIcon className = "sidedrawerIcon" size= "2x" icon = "home" /><Link className = "Nav_Link" to = "resources">Resources</Link></li>
            <li><FontAwesomeIcon className = "sidedrawerIcon" size= "2x" icon = "user-plus" /><Link className = "Nav_Link" to = "contact">Contact Us</Link></li>
        </ul>
    </nav>
    )
}

export default SideDrawerRookies;