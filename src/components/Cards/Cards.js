import React, {Component} from 'react'

import GetStarted from './getStarted'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {Link} from 'react-router-dom'
class Cards extends Component {
    render (){
        return(
            <div className= "getStarteds">
                <h1 className ="wow">JOIN THE LARGEST ROBOTICS COMPETITION IN CANADA</h1>
            <div className = "container-fluid d-flex justify-content-center">
           
                <div className = "row">
                 
                    <div className = "col-md-3 cardsections">
                        <GetStarted
                        imgsrc = {require("../../images/ReverseLogo.png")}
                        title = "Sign Up"
        font = {<FontAwesomeIcon size = '7x' icon = "users"/>}
        link={<Link className = "Nav_Link" to = "SignUp">Sign Up</Link>}/>
                    </div>
                
                <div className = "col-md-3 cardsections">
                        <GetStarted
                         imgsrc = {require("../../images/ReverseLogo.png")}
                         title = "Register"
                          font = {<FontAwesomeIcon size = '7x' icon = "clipboard"/>}
                    link={<Link className = "cardlink" to = "register">Register</Link>}/>
                    </div>
              
                  <div className = "col-md-3 cardsections">
                  <GetStarted
                   imgsrc = {require("../../images/ReverseLogo.png")}
                   title = "Visit Resources"
                   font = {<FontAwesomeIcon size = '7x' icon = "book"/>}
                     link={<Link className = "Nav_Link" to = "resources">Visit Resources</Link>}/>
                
              </div>
         
              <div className = "col-md-3 cardsections">
                  <GetStarted
                   imgsrc = {require("../../images/ReverseLogo.png")}
                   title = "Contact Us"
                   font = {<FontAwesomeIcon size = '7x' icon = "link"/>}
                     link={<Link className = "Nav_Link" to = "youthcouncil">Connect to Youth Council</Link>}/>
              </div>
         
                </div>
                </div>
              
            
                </div>
        )
    }
}


export default Cards