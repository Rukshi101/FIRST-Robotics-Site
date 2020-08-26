import React from 'react'

import {Link} from 'react-router-dom'
function GetStarted(props){
    return(
      <Link className = "Nav_Link" to = "SignUp">
      <div className = "card text-center">
    
        <div className = "overflow">
          
          <div className = "fonts">
            <p>{props.font}</p>
            </div>
        </div>
        <div className = "card-body text-dark">
          <h4 className = "card-title">{props.link}</h4>

        
       
      </div>
      
      </div>
      </Link>
      
    )
}

export default GetStarted;