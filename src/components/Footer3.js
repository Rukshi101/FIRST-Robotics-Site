import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Link} from 'react-router-dom'
function Footer3(props){
    return(

<div class = "shifted-content-2 footer footerleft">
    <div class = "inner-footer">
        <div class = 'footer-items'>
            <img class = "logo" src = {require("../images/ReverseLogo.png")} alt=""/>
            <p>
                For Indsfdsspiratioasdn and Recognition of Science and Technology
            </p>
            <div class = "social-media">
            <a href = "https://www.youtube.com/user/FIRSTRoboticsCanada"><FontAwesomeIcon color = 'red' icon = {['fab', 'youtube']}/></a>
            <a href = "https://www.instagram.com/firstroboticscanada/?hl=en"><FontAwesomeIcon color = 'white'icon = {['fab', 'instagram']}/></a>
            <a href = "https://twitter.com/canfirst?lang=en"><FontAwesomeIcon color = 'light-blue'icon = {['fab', 'twitter']}/></a>
            <a href = "https://www.facebook.com/FIRSTRoboticsCanada/"><FontAwesomeIcon color = 'blue' icon = {['fab', 'facebook']}/></a>
            
        </div>
        </div>
        
        <div class = 'footer-items programs'>
            <h2>Programs</h2>
            <div class = "border"></div>
            <ul>
                <a href = "/"><li><em className = "FIRST">FIRST </em> LEGO League</li></a>
                <a href = "/"><li><em className = "FIRST">FIRST </em> Tech Challenge</li></a>
                <a href = "/"><li><em className = "FIRST">FIRST </em> Robotics Competition</li></a>
            </ul>
        

        
        </div>

        <div class = 'footer-items usefullinks'>
            <h2>Useful Links</h2>
            <div class = "border"></div>
            <ul>
            <li> <a href = "https://www.firstinspires.org/about/vision-and-mission">About Us</a></li>
                <li> <Link className = "Nav_Link" to = "contact">Contact us</Link></li>
                <a href = "https://my.firstinspires.org/AccountManager/Account/Register"><li><em className = "FIRST">FIRST </em> Dashboard</li></a>
                <a href = "https://www.firstroboticscanada.org/get-involved/volunteer/"><li>Volunteer Information</li></a>
           
     
            </ul>
            
        </div>

        <div class = 'footer-items'>
            <h2>Resources</h2>
            <div class = "border"></div>
            <ul>
              
                <a href = "https://forward.firstroboticscanada.org/resources"><li>Resource Bank</li></a>
           
            </ul>
            
        </div>
       
       
        
    </div>
    <div class = "footer-bottom">
        &copy; 2020 <em className = "FIRST">FIRST </em> Robotics Canada. All rights Reserved.
    </div>
</div>
 
    )
}

export default Footer3;