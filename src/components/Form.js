import React,{Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Form (props){

        return(
            <div className = "Contact">
            <h1 className="contactTitle">Get Started</h1>
            <div className = "">
       <hr className = "forwardhr abouthr contacthr" width= "10%" height="2px"  color ="white"/>
       </div>
            <p>Click <a href = "https://www.firstroboticscanada.org/" >Here</a> to learn more about FIRST Canada</p>
          
           
            </div>


        )

    }


export default Form;