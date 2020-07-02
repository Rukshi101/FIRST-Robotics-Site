import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {Link} from 'react-router-dom'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
window.addEventListener('scroll',() =>{
    
    
    
});

const toolbar = props =>(
   

    <header className = "navbarss">
        <nav id = "nav" className = "navbarss_nav">
            <div className = "navbarss_nav-button"><DrawerToggleButton click ={props.drawerClickHandler}/></div>
                <div className = "navbarss_logo">
                    <a href = "/"> <img className = "nav_Logo" src = {require("../../images/ReverseLogo.png")} alt=""/></a>
                </div>
          <div className = "spacer"/>
            <div className = "navbarss_nav-items ">
                <ul>
                    <li> <a href = "https://www.firstroboticscanada.org/frc/">ABOUT FRC</a></li>
                    <li><Link className = "Nav_Link" to = "SignUp">START A TEAM</Link></li>
                    <li> <Link className = "Nav_Link" to = "register">REGISTER</Link></li>
                    <li><Link className = "Nav_Link" to = "resources">RESOURCES</Link></li>
                    <li> <Link className = "Nav_Link" to = "contact">CONTACT US</Link></li>
                    <li><a href = "https://www.youtube.com/user/FIRSTRoboticsCanada"><FontAwesomeIcon color = 'red' icon = {['fab', 'youtube']}/></a></li>
                    <li><a href = "https://www.instagram.com/firstroboticscanada/?hl=en"><FontAwesomeIcon color = 'white' icon = {['fab', 'instagram']}/></a></li>
                    <li><a href = "https://twitter.com/canfirst?lang=en"><FontAwesomeIcon color = 'blue' icon = {['fab', 'twitter']}/></a></li>
                    
                   
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;