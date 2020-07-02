import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Project(props){
    return(
        <div className = "hubs">
    
    <div class = "row ">
       

      
       <div class="col-sm-6 projectimagebin">
       <img className = "projectimage" src = {require("./ProjectsImage.jpg")} alt=""/>
       </div>
    
       <div class = "col-sm-6 ProjectText" id='title'>
       <h1 className = "projectTitle">Our Projects</h1>
           <p class = "tools"> Click on the images below to find out about some of our projects that are helping to propel the next generation forward.

We must enable our youth to grow up to solve the world’s most pressing problems, be strong citizens, and build a brighter future together.
 </p>
 <FontAwesomeIcon size = '7x' color="white" icon = "arrow-down"/>
 </div>
       </div>
    </div>
)
    }
export default Project