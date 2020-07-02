import React from 'react'
import '../App.css'
import SideBar from '../../components/SideBar'
import Footer from '../components/Footer'
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookF  } from '@fortawesome/free-brands-svg-icons';


import {Link} from 'react-router-dom'

function DesignAndBuild(){
    return(
        <div className = "Resources">
 <aside className="sidebar pos-absolute z-2"
       data-role="sidebar"
       data-toggle="#sidebar-toggle-3"
       id="sb3"
       data-shift=".shifted-content">
    
    <ul className="sidebar-menu">
    <li><a><span className="mif-home icon"></span>GAME RESOURCES</a></li>
    <li className="divider"></li>
    <li><a><span className="mif-tools icon"></span>First Steps</a></li>
    <li className="divider"></li>
        <li><Link className = "Nav_Link" to = "SignUp"><span className="mif-tools icon"></span>Design and Build</Link></li>
        <li><Link className = "Nav_Link" to = "SignUp"><span className="mif-tools icon"></span>Electrical and Programming</Link></li>
        <li onClick = "showSafety()">Safety</li>
        <li className="divider"></li>
        <li><Link className = "Nav_Link" to = "SignUp"><span className="mif-tools icon"></span>Team-Made Playbooks</Link></li>
        <li><Link className = "Nav_Link" to = "SignUp"><span className="mif-tools icon"></span>In-Event</Link></li>
        <li><Link className = "Nav_Link" to = "SignUp"><span className="mif-tools icon"></span>Design and Build</Link></li>
        <li className="divider"></li>
        <li><Link className = "Nav_Link" to = "SignUp"><span className="mif-tools icon"></span>Miscellaneous</Link></li>
    </ul>
</aside>
<div className="shifted-content h-100 p-ab">
    <div className="app-bar pos-absolute bg-black z-1" data-role="appbar">
        <button className="app-bar-item c-pointer" id="sidebar-toggle-3">
            <span className="mif-menu fg-white"></span>
        </button>
        <div className = "navbarss_nav navbarss_nav-items ">
        <li> <a href = "https://www.firstroboticscanada.org/frc/">ABOUT FRC</a></li>
                    <li><Link className = "Nav_Link" to = "SignUp">START A TEAM</Link></li>
                    <li> <Link className = "Nav_Link" to = "register">REGISTER</Link></li>
                    <li><Link className = "Nav_Link" to = "resources">RESOURCES</Link></li>
                    <li> <Link className = "Nav_Link" to = "contact">CONTACT US</Link></li>
                    <li><FontAwesomeIcon color = 'red' icon = {['fab', 'youtube']}/></li>
                    <li><FontAwesomeIcon color = 'white' icon = {['fab', 'instagram']}/></li>
                    <li><FontAwesomeIcon color = 'blue' icon = {['fab', 'twitter']}/></li>
                  </div>
                    
    </div>

    <div className="h-100 p-4">
        <p className="h1">Welcome  Resources</p>
        <p>
            Press the Icon at the top-left to get started.
            
        </p>
        
    </div>
    <Footer/>
</div>
</div>
    )
}


export default DesignAndBuild