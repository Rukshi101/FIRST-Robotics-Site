import React from 'react'
import {Link} from 'react-router-dom'

function ContactUs(props){
    return(
        <div className = "Contact">
            <h1>Contact Us</h1>
            <p>Want to learn more about FIRST Forward programs in your area or just get in touch?</p>
            <button className= "contactButton"><Link className = "Nav_Link" to = "contact">Get Started</Link></button>
           
            </div>
   
)
    }
export default ContactUs