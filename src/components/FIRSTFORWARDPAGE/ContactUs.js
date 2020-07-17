import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactUs(props){
    return(
        <div className = "Contact">
            <h1 className="contactTitle">Contact Us</h1>
            <div className = "">
       <hr className = "forwardhr abouthr" width= "10%" height="2px"  color ="white"/>
       </div>
            <p>Want to learn more about FIRST Forward programs in your area or just get in touch?</p>
            <a href = "#" className = "contactlink">Get Started  <FontAwesomeIcon color = 'inherit ' icon = {['fa', 'arrow-right']}/></a>
           
            </div>
   
)
    }
export default ContactUs