import React from 'react'

function Allies(props){
    return(
        <div className = "hubs">
    
    <div class = "row ">
       

       <div class = "col-sm-6 hubtext forwardhubtext" id='title'>
       <h1 className = "AlliesTitle"> Allies & Influencers</h1>
           <p class = "tools"> FIRST® Allies & Influencers is a movement of impassioned community partner organizations, local governments, foundations, businesses, schools and universities who believe deeply in advancing equity and improving outcomes for all.


 </p>
     
       </div>
       <div class="col-sm-6 teamBins">
         <img className = "alliesimage" src = {require("./Allies.jpg")} alt=""/>
       </div>
       </div>
    </div>
)
    }
export default Allies