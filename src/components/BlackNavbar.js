import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import {Link} from 'react-router-dom'

// import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'


const BlackNavbar = props =>(
   

    <header className = "navbarss">
        <nav id = "nav" className = "navbarss_nav blacknav">
            <div className = "navbarss_nav-button"></div>
            
                <div className = "navbarss_logo">
                    <a href = "/"> <img class = "nav_Logo" src = {require("../images/ReverseLogo.png")} alt=""/></a>
                </div>
          <div className = "spacer"/>
            <div className = "navbarss_nav-items ">
                <ul>
                    <li> <a href = "https://www.firstroboticscanada.org/frc/">ABOUT FRC</a></li>
                    <li><Link className = "Nav_Link" to = "SignUp">START A TEAM</Link></li>
                    <li> <Link className = "Nav_Link" to = "register">REGISTER</Link></li>
                    <li><Link className = "Nav_Link" to = "resources">RESOURCES</Link></li>
                    <li> <Link className = "Nav_Link" to = "contact">CONTACT US</Link></li>
                    <li><FontAwesomeIcon color = 'red' icon = {['fab', 'youtube']}/></li>
                    <li><FontAwesomeIcon color = 'white' icon = {['fab', 'instagram']}/></li>
                    <li><FontAwesomeIcon color = 'blue' icon = {['fab', 'twitter']}/></li>
                  
                    
                   
                </ul>
            </div>
        </nav>
    </header>
);

export default BlackNavbar;
