import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Link} from 'react-router-dom'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
const toolbar = props =>(
    <header className = "navbarss">
        <nav className = "navbarss_nav">
        <div className = "navbarss_nav-button"><DrawerToggleButton click ={props.drawerClickHandler}/></div>
                <div className = "navbarss_logos">
                    <a href = "/"> <img class = "nav_Logo firstforward" src = {require("./firstforwarddark.png")} alt=""/></a>
                </div>
          <div className = "spacer"/>
            <div className = "navbarss_nav-items ">
                <ul>
                    <li> <a className = "Nav_Link" href = "https://www.firstroboticscanada.org/frc/">HOME</a></li>
                    <li><a href = "#about">ABOUT</a></li>
                    <li> <a href = "#projects">PROJECTS</a></li>
                    <li><a href = "#contact">CONTACT US</a></li>
                    <li>< a href ="https://www.firstroboticscanada.org/">VISIT OUR SITE</a></li>
                    <li> <Link className = "Nav_Link" to = "rookies">ROOKIE PORTAL</Link></li>
                    <li><a id = "socials" href = "https://www.youtube.com/user/FIRSTRoboticsCanada"><FontAwesomeIcon color = 'red' icon = {['fab', 'youtube']}/></a></li>
                    <li><a id = "socials" href = "https://www.instagram.com/firstroboticscanada/?hl=en"><FontAwesomeIcon color = 'white' icon = {['fab', 'instagram']}/></a></li>
                    <li><a id = "socials" href = "https://twitter.com/canfirst?lang=en"><FontAwesomeIcon color = 'blue' icon = {['fab', 'twitter']}/></a></li>
                  
                    
                   
                </ul>
            </div>
            
        </nav>
        
    </header>
    
);

export default toolbar;
