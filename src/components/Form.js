import React,{Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Form (props){

        return(
            <div className = "Contact">
            <h1 className="contactTitle">Get Started!</h1>
            <div className = "">
       <hr className = "forwardhr abouthr contacthr" width= "10%" height="2px"  color ="white"/>
       </div>
            <p>Want to learn more about <em className = "FIRST">FIRST </em> Forward programs in your area or just get in touch?</p>
            <a href = "https://www.firstroboticscanada.org/contact-us/" className = "contactlink">Fill This! <FontAwesomeIcon color = 'inherit ' icon = {['fa', 'arrow-right']}/></a>
           
            </div>


        )

    }


export default Form;