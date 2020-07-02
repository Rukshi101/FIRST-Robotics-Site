import React from 'react'

function AboutUs(props){
    return(
        <div className = "hubs forwardabout">
    
    <div class = "row ">
       

       <div class = "col-sm-7 hubtext " id='title'>
       <h1 className = " firstforwardtitle newhubtitle">About FIRST FORWARD CANADA</h1>
           <p class = "tools"> FIRST Forward Canada is a collection of progressive initiatives that are preparing the next generation for the future. From digital literacy to equity, diversity and inclusion initiatives, FIRST Forward Canada is all about propelling kids and youth forward.

We must enable our youth to grow up to solve the world’s most pressing problems, be strong citizens, and build a brighter future together.
 </p>
     
       </div>
       <div class="col-sm-5 teamBins">
         <img className = "aboutimage" src = {require("./aboutimage.jpeg")} alt=""/>
       </div>
       </div>
    </div>
)
    }
export default AboutUs