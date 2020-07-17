import React from 'react'

import robot from "./video/roboto.mp4";

function VideoTitle () {
    return(

<div className = "App videoSection">
      <div className ='row cat'>
        <div className= 'col-md-12'>
    <h1 className = "title rookiemaintitle"><em class= "first">FIRST</em> ROBOTICS COMPETITION ROOKIE PORTAL </h1>
  
  
</div>
<div className = 'col-sm-12 subtitle rookiesub'>
   
    <p>Fostering Future Science and Technology Leaders.</p>
</div>
<div className = 'col-md-12 learnMore '>
    <a className ='actualButton pulse' href="#JoinUs">Get Started</a>
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