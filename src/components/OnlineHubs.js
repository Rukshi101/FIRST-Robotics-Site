import React from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OnlineHubs(props){
    return(
        <div className = "hubs" id = 'hubsection'>
            
    <h1 className = "hubtitle">Hubs and Online Help Centers</h1>
    <div class = "row ">
      

       <div className = "col-sm-12 realhubtext" id='title'>
         <p className = "tools hubdesc">FIRST Robotics Canada provides all FIRST teams with tools for support at any given time including providing support to FIRST Robotics Competition rookie teams. Think of the Walk-in Help Centre as a HUB location where teams can plan ahead or The Online Helpdesk and Hubs are run by FIRST Robotics Competition veteran teams where you can drop in and request team support including machine shop resources, build, design, programming and business and awards support. </p>
          
       </div>
       
       </div>
    </div>
)
    }
export default OnlineHubs

//   <p class = "tools"><FontAwesomeIcon size = '2x' color = 'inherit ' icon = {['fa', 'wrench']}/>  Tools and support at any given time with special support to FIRST Robotics Competition rookie teams. </p>
// <p class = "tools"><FontAwesomeIcon size = '2x' color = 'inherit ' icon = {['fa', 'walking']}/> Access to the Walk-in help centers called HUBS run by successful FIRST teams to request team support such as machine shop use, resources, robot build and award support. </p>
// <p class = "tools"><span><FontAwesomeIcon size = '2x' color = 'inherit ' icon = {['fa', 'wifi']}/></span>  Online Help Desk to receive remote help for questions where dropping in isn't convinient</p>