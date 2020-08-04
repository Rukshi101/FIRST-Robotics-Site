import React, {Component} from 'react'

import GetStarted from './getStarted'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {Link} from 'react-router-dom'
class Cards extends Component {
    render (){
        return(
            <div className= "getStarteds">
                <h1 className ="wow">JOIN THE LARGEST ROBOTICS COMPETITION IN CANADA</h1>
            <div className = "cardsection container-fluid d-flex justify-content-left">
           
                <div className = "row">
                 
                    <div className = "col-md-2 cardsections">
                        <GetStarted
                        imgsrc = {require("../../images/ReverseLogo.png")}
                        title = "Sign Up"
        font = {<FontAwesomeIcon size = '6x' icon = "users"/>}
        link={<Link className = "Nav_Link" to = "SignUp">Sign Up</Link>}/>
                    </div>
                
                <div className = "col-md-2 cardsections">
                        <GetStarted
                         imgsrc = {require("../../images/ReverseLogo.png")}
                         title = "Register"
                          font = {<FontAwesomeIcon size = '6x' icon = "clipboard"/>}
                    link={<Link className = "cardlink" to = "register">Register</Link>}/>
                    </div>
              
                  <div className = "col-md-2 cardsections">
                  <GetStarted
                   imgsrc = {require("../../images/ReverseLogo.png")}
                   title = "Visit Resources"
                   font = {<FontAwesomeIcon size = '6x' icon = "book"/>}
                     link={<Link className = "Nav_Link" to = "resources">Visit Resources</Link>}/>
                
              </div>
         
              <div className = "col-md-2 cardsections">
                  <GetStarted
                   imgsrc = {require("../../images/ReverseLogo.png")}
                   title = "Contact Us"
                   font = {<FontAwesomeIcon size = '6x' icon = "chalkboard-teacher"/>}
                     link={< a href ="https://www.firstroboticscanada.org/about-us/staff/">Connect to Mentor</a>}/>
              </div>
         
              <div className = "col-md-2 cardsections">
                  <GetStarted
                   imgsrc = {require("../../images/ReverseLogo.png")}
                   title = "Contact Us"
                   font = {<FontAwesomeIcon size = '6x' icon = "user-graduate"/>}
                     link={< a href ="https://www.firstroboticscanada.org/mac/">Mobile Alumni Crew</a>}/>
              </div>
              <div className = "col-md-2 cardsections">
                  <GetStarted
                   imgsrc = {require("../../images/ReverseLogo.png")}
                   title = "Contact Us"
                   font = {<FontAwesomeIcon size = '6x' icon = "hands-helping"/>}
                     link={< a href ="https://www.firstroboticscanada.org/hubs/">Visit FIRST Hubs</a>}/>
              </div>
                </div>
                </div>
              
            
                </div>
        )
    }
}


export default Cards