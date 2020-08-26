import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactUs(props){
    return(
        <div className = "Contact">
            <h1 className="contactTitle">Contact Us</h1>
            <div className = "">
       <hr className = "forwardhr abouthr contacthr" width= "10%" height="2px"  color ="white"/>
       </div>
            <p>Click <a href = "https://forward.firstroboticscanada.org/contact" >here</a> to learn more about <em className = "FIRST">FIRST </em> Canada</p>
          
           
            </div>
   
)
    }
export default ContactUs
//     <a href = "https://forward.firstroboticscanada.org/contact" className = "contactlink">Get Started  <FontAwesomeIcon color = 'inherit ' icon = {['fa', 'arrow-right']}/></a>
