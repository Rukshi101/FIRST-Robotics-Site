import React from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from 'react-player'
function Commitment (props){
    return(
        <div className = "hubs" id = 'hubsection'>
            
    <h1 className = "hubtitle commitpadding">Equity, Diversity, and Inclusion</h1>
    <div class = "row ">
      
    <div className = "flex-container">
             <div className = 'videosignup '>
             <p className = "signuptext committtext">
             <em className = "FIRST">FIRST </em>understands the broader societal context of economic, educational, and social factors historically leading to disproportionate access and outcomes. Leveraging cross-sector and industry collaborations, <em className = "FIRST">FIRST </em>is actively engaged in developing and delivering strategies that remove barriers and ensure greater access to <em className = "FIRST">FIRST </em>programs so that all youth can participate. Students and volunteers engaged in<em className = "FIRST">FIRST </em>Canada programs will reflect inclusive diversity of contemporary Canadian society. Respect and equity are key to this experience. We encourage greater access and participation in our programs for women, First Nations, and the underserved.
             </p>
             <p className = "signuptext clickhere committtext"> Click here to view
              <a href = "https://www.firstinspires.org/sites/default/files/uploads/resource_library/impact/edi-impact-flyer.pdf"> Impact </a> 
              and our <a href = "https://forward.firstroboticscanada.org/#projects">Projects</a>.</p>
             </div>
             <div className = "signupvideo">
             <ReactPlayer className = "reactplayervid"
               url = "https://www.youtube.com/watch?v=Ud2H7UUUR94"/>
             </div>

             </div>

       </div>
    </div>
)
    }
export default Commitment

//   <p class = "tools"><FontAwesomeIcon size = '2x' color = 'inherit ' icon = {['fa', 'wrench']}/>  Tools and support at any given time with special support to FIRST Robotics Competition rookie teams. </p>
// <p class = "tools"><FontAwesomeIcon size = '2x' color = 'inherit ' icon = {['fa', 'walking']}/> Access to the Walk-in help centers called HUBS run by successful FIRST teams to request team support such as machine shop use, resources, robot build and award support. </p>
// <p class = "tools"><span><FontAwesomeIcon size = '2x' color = 'inherit ' icon = {['fa', 'wifi']}/></span>  Online Help Desk to receive remote help for questions where dropping in isn't convinient</p>