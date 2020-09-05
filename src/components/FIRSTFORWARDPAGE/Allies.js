import React from 'react'

function Allies(props){
    return(
        <div className = "hubs allies">
    
    <div class = "row ">
       

       <div class = "col-sm-6 hubtext forwardhubtext" id='title'>
       <hr className = "forwardhrs allieshr" color = 'green' width = '52.4%'></hr>
       <h1 className = "AlliesTitle"> Allies & Influencers</h1>
       
           <p class = "alliesdesc "> <em className = "FIRST">FIRST </em>® Allies & Influencers is a movement of impassioned community partner organizations, local governments, foundations, businesses, schools and universities who believe deeply in advancing equity and improving outcomes for all.


 </p>
     
       </div>
       <div class="col-sm-6 allieimagebin ">
         <img className = "alliesimage" src = {require("./forwardassets/Allies.jpg")} alt=""/>
       </div>
       </div>
    </div>
)
    }
export default Allies