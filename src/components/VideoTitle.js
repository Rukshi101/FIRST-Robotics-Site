import React from 'react'

import robot from "./video/roboto.mp4";

function VideoTitle () {
    return(

<div className = "App">
      <div className ='row cat'>
        <div className= 'col-md-12'>
    <h1 className = "title"><em class= "first">FIRST</em> ROBOTICS COMPETITION ROOKIE PORTAL </h1>
  
    <hr width= "50%" size="20"  color ="white"/>

</div>
<div className = 'col-sm-12 subtitle'>
   
    <p>Fostering Future Science and Technology Leaders.</p>
</div>
<div className = 'col-md-12 learnMore '>
    <a className ='actualButton pulse' href="#JoinUs">Start</a>
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