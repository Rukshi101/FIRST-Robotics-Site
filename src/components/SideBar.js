import React from 'react'

import '../App.css'

import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {Link} from 'react-router-dom'
import '../App.css'
const SideBar = (props)=>(
    <div className = "Resources">
    <aside className="sidebar pos-absolute z-2"
          data-role="sidebar"
          data-toggle="#sidebar-toggle-4"
          id="sb4"
          data-shift=".shifted-content"
          data-static-shift = ".shifted-content-2"
          data-static = "xs"
        >
       
       <ul className="sidebar-menu">
       <li><h1 className = "resourcebanksidebar"><em className = "FIRST">FIRST </em> Resources</h1></li>

<li className="divider"></li>
       <li><Link className = "Nav_Link" to = "firststeps"><span className="mif-steps icon"></span>Rookie FIRST Steps</Link></li>

       <li className="divider"></li>
       <li><Link className = "Nav_Link" to = "Game"><span className="mif-open-book icon"></span>Game Resources</Link></li>
       <li className="divider"></li>
           <li><Link className = "Nav_Link" to = "DesignBuild"><span className="mif-tools icon"></span>Design and Build</Link></li>
           <li><Link className = "Nav_Link" to = "ElectricalProgramming"><span className="mif-laptop icon"></span>Electrical/Programming</Link></li>
           <li><Link className = "Nav_Link" to = "Safety"><span className="mif-tools icon"></span>Safety</Link></li>
           <li className="divider"></li>
           <li><Link className = "Nav_Link" to = "Playbooks"><span className="mif-books icon"></span>Team-Made Playbooks</Link></li>
           <li><Link className = "Nav_Link" to = "InEvent"><span className="mif-enter icon"></span>In-Event</Link></li>
       
           <li className="divider"></li>
           <li><a href = "https://forward.firstroboticscanada.org/rookies"><span className="mif-widgets icon"></span>Go back Home</a></li>
       </ul>
   </aside>
   <div className="shifted-content-2 h-100 p-ab sidenav ">
       <div className="app-bar pos-absolute bg-black z-1" data-role="appbar">
           <button className="app-bar-item c-pointer" id="sidebar-toggle-3">
               <span className="mif-menu fg-white"></span>
           </button>
           <li>  <a href = "/"> <img class = "nav_Logo" src = {require("../images/ReverseLogo.png")} alt=""/></a></li>
           <div className = "spacer"/>
           <div className = "navbarss_nav navbarss_nav-items  ">
           <li><Link className = "Nav_Link" to = "rookies">Home</Link></li>
           <li> <a href = "https://www.firstroboticscanada.org/frc/">About Us</a></li>
                       <li><Link className = "Nav_Link" to = "SignUp">Start a Team</Link></li>
                       <li> <Link className = "Nav_Link" to = "register">Register</Link></li>
                       <li><Link className = "Nav_Link" to = "resources">Resources</Link></li>
                       <li> <Link className = "Nav_Link" to = "contact">Contact Us</Link></li>
                       <li><a href = "https://www.youtube.com/user/FIRSTRoboticsCanada"><FontAwesomeIcon color = 'red' icon = {['fab', 'youtube']}/></a></li>
                    <li><a href = "https://www.instagram.com/firstroboticscanada/?hl=en"><FontAwesomeIcon color = 'white' icon = {['fab', 'instagram']}/></a></li>
                    <li><a href = "https://twitter.com/canfirst?lang=en"><FontAwesomeIcon color = 'blue' icon = {['fab', 'twitter']}/></a></li>
                    <li><a href = "https://www.facebook.com/FIRSTRoboticsCanada/"><FontAwesomeIcon color = 'blue' icon = {['fab', 'facebook']}/></a></li>
                    
                     </div>
                    </div>   
                    </div>
                    </div>

)


export default SideBar;