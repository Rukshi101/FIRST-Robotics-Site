import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Project(props){
    return(
        <div className = "hubs projects">
    
    <div class = "row ">
       

      
       <div class="col-sm-6 projectimagebin">
       <img className = "projectimage" src = {require("./ProjectsImage.jpg")} alt=""/>
       </div>
    
       <div class = "col-sm-6 ProjectText" id='title'>
       <hr className = "forwardhrs" color = 'green' width = '330px'></hr>
       <h1 className = "projectTitle">Our Projects</h1>
       <div className = "">
     
       </div>
           <p class = "projectdesc"> Click on the images below to find out about some of our projects that are helping to propel the next generation forward.

We must enable our youth to grow up to solve the world’s most pressing problems, be strong citizens, and build a brighter future together.
 </p>
 <FontAwesomeIcon size = '7x' color="white" icon = "arrow-down"/>
 </div>
       </div>
    </div>
)
    }
export default Project