import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Impact(props){
    return(
        <div className = "ImpactBin">
           
        <h1>Impact</h1>
        <div className = "">
     
       </div>
        <p>Through our programs we have:</p>
        <div className = "Impactcontainer impactstates">
        
            <div className = "ImpactSection">
                <div className = "ImpactHeader">
                <FontAwesomeIcon color = 'white' size = "2x" icon = {['fa', 'graduation-cap']}/>
                    <p className = "counter">
                75,000+ 
                </p>
                </div>
                <div className = "ImpactText">
               Impacted Students
                </div>
                </div>
            <div className = "ImpactSection">
            <FontAwesomeIcon color = 'white' size = "3x" icon = {['fa', 'school']}/>
            <div className = "ImpactHeader">
            <p className = "counter">
                200+ 
                </p>
                </div>
                <div className = "ImpactText">
                Running Programs
                </div>
            
            </div>
            <div className = "ImpactSection">
            <FontAwesomeIcon color = 'white' size = "3x" icon = {['fa', 'scroll']}/>
            <div className = "ImpactHeader">
            <p className = "counter">
                80+ 
                </p>
                </div>
                <div className = "ImpactText">
                Scholarship Opportunities
                </div>
            
            </div>
            </div>
          
            </div>
)
    }
export default Impact