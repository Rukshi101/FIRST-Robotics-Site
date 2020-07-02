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
            <li><FontAwesomeIcon className = "sidedrawerIcon" size= "2x" icon = "home" /><a href = "/">About FRC</a></li>
            <li><FontAwesomeIcon className = "sidedrawerIcon" size= "2x" icon = "robot" /><a href = "https://www.google.com/search?q=about+first+robotics+canad&rlz=1C1GCEB_enCA856CA856&oq=about+first+robotics+canad&aqs=chrome..69i57l2j69i60l6.2636j0j7&sourceid=chrome&ie=UTF-8">Start a Team</a></li>
            <li><FontAwesomeIcon className = "sidedrawerIcon" size= "2x" icon = "project-diagram" /><a href = "#projects">Register</a></li>
            <li><FontAwesomeIcon className = "sidedrawerIcon" size= "2x" icon = "phone-square" /><a href = "#contact">Resources</a></li>
            <li><FontAwesomeIcon className = "sidedrawerIcon" size= "2x" icon = "home" /><a href = "https://www.firstroboticscanada.org/">Contact Us</a></li>
            <li><FontAwesomeIcon className = "sidedrawerIcon" size= "2x" icon = "user-plus" /><Link className = "Nav_Link" to = "rookies">Rookie Portal</Link></li>
        </ul>
    </nav>
    )
}

export default SideDrawerRookies;