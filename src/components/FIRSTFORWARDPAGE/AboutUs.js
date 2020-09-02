import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutUs(props){
    return(
        <div className = "hubs forwardabout">
    
    <div class = "row ">
       

       <div class = "col-sm-7 hubtext aboutforward " id='title'>
       <hr className = " abouthrs " width= "70%" height="2px"  color ="white"/>
       <h1 className = " firstforwardtitle newhubtitle">About <em className = "FIRST">FIRST </em>FORWARD CANADA</h1>
       <div className = "hrposition">
      
       </div>
       <div className>
           <p className = "tools aboutforwarddesc"> <em className = "FIRST">FIRST </em>Forward Canada is a collection of progressive initiatives that are preparing the next generation for the future. From digital literacy to equity, diversity and inclusion initiatives, <em className = "FIRST">FIRST </em>  Forward Canada is all about propelling kids and youth forward.

We must enable our youth to grow up to solve the world’s most pressing problems, be strong citizens, and build a brighter future together.

 </p>
 <p className = "aboutforwarddesc tools">
     <a className = "learnfirst" href = "https://www.firstroboticscanada.org/">Learn about <em className = "FIRST">FIRST </em> Robotics <FontAwesomeIcon color = 'inherit ' icon = {['fa', 'arrow-right']}/></a>
     </p>
     </div>
       </div>

       
       <div class="col-sm-5 teamBins">
         <img className = "aboutimage" src = {require("./forwardassets/aboutimage.jpeg")} alt=""/>
       </div>
       </div>
    </div>
)
    }
export default AboutUs