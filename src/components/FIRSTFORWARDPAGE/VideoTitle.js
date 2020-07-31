import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import robot from "../video/roboto.mp4";

function VideoTitle () {
    return(

<div className = "App">
      <div className ='row cat titledesc'>
        <div className= 'col-md-12'>
    <h1 className = "title forwardTitle"><em className = "FIRST">FIRST </em> FORWARD CANADA </h1>
  
  
</div>
<div className = 'col-sm-7 subtitle'>
    {/* <p>Inspiring generations of youth to be science and technology leaders and innovators</p> */}
    <p className = "maintitledesc">Ever wonder about what our success strategies for inspiring people of all ages are? Here they are. </p>
</div>
<div className = 'col-md-12'>
    <a href = "#projects" className = "forwardmainlink">VIEW OUR PROJECTS  <FontAwesomeIcon color = 'inherit ' icon = {['fa', 'arrow-right']}/></a>
</div>
</div>
<div className = "ParallaxVideo">
<video autoPlay muted loop>
        <source src ={robot}type = "video/mp4"/>
    </video>
   
  
</div>

</div>

    )
};

export default VideoTitle;
