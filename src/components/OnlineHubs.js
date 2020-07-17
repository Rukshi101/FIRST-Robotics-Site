import React from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OnlineHubs(props){
    return(
        <div className = "hubs">
            
    <h1 className = "hubtitle">Hubs and Online Help Centers</h1>
    <div class = "row ">
      

       <div className = "col-sm-12 realhubtext" id='title'>
         
           <p class = "tools"><i class="fa fa-wrench"></i>  Tools and support at any given time with special support to FIRST Robotics Competition rookie teams. </p>
       <p class = "tools"><FontAwesomeIcon color = 'inherit ' icon = {['fa', 'walking']}/> Access to the Walk-in help centers called HUBS run by successful FIRST teams to request team support such as machine shop use, resources, robot build and award support. </p>
       <p class = "tools"><span><i class="fa fa-wifi"></i></span>  Online Help Desk to receive remote help for questions where dropping in isn't convinient</p>
       </div>
       
       </div>
    </div>
)
    }
export default OnlineHubs