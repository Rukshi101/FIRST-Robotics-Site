import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Link} from 'react-router-dom'
function Footer(props){
    return(

<div class = "footer">
    <div class = "inner-footer">
        <div class = 'footer-items'>
            <img class = "logo" src = {require("../images/ReverseLogo.png")} alt=""/>
            <p>
                For Inspiration and Recognition of Science and Technology
            </p>
            <div class = "social-media">
            <a href = "https://www.youtube.com/user/FIRSTRoboticsCanada"><FontAwesomeIcon color = 'red' icon = {['fab', 'youtube']}/></a>
            <a href = "https://www.instagram.com/firstroboticscanada/?hl=en"><FontAwesomeIcon color = 'white'icon = {['fab', 'instagram']}/></a>
            <a href = "https://twitter.com/canfirst?lang=en"><FontAwesomeIcon color = 'light-blue'icon = {['fab', 'twitter']}/></a>
            <a href = "/"><FontAwesomeIcon color = 'blue' icon = {['fab', 'facebook']}/></a>
            
        </div>
        </div>
        
           

        <div class = 'footer-items usefullinks'>
            <h2>Useful Links</h2>
            <div class = "border"></div>
            <ul>
            <li> <Link className = "Nav_Link" to = "https://www.firstinspires.org/about/vision-and-mission">About FIRST</Link></li>
                <li> <Link className = "Nav_Link" to = "contact">Contact us</Link></li>
                <a href = "https://login.firstinspires.org/core/login?signin=006bab27bfc8f0c69d3180bd8348fd05"><li>FIRST Dashboard</li></a>
                <a href = "https://www.firstroboticscanada.org/get-involved/volunteer/"><li>Volunteer Dashboard</li></a>
           
     
            </ul>
            
        </div>

        <div class = 'footer-items'>
            <h2>Resources</h2>
            <div class = "border"></div>
            <ul>
              
                <a href = "/"><li>FRC Resource Bank</li></a>
                <a href = "/"><li>Contact Us</li></a>
                <a href = "/"><li>FIRST Robotics Challenge</li></a>
            </ul>
            
        </div>
        <div class = 'footer-items'>
            <h2>Programs</h2>
            <div class = "border"></div>
            <ul>
                <a href = "/"><li>FIRST Lego League</li></a>
                <a href = "/"><li>FIRST Tech Challenge</li></a>
                <a href = "/"><li>FIRST Robotics Challenge</li></a>
            </ul>
        

        
        </div>
       
        
    </div>
    <div class = "footer-bottom">
        &copy; 2020 FIRST Robotics Canada. All rights Reserved.
    </div>
</div>
 
    )
}

export default Footer;