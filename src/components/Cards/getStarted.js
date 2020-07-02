import React from 'react'


function GetStarted(props){
    return(
    
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
      
    )
}

export default GetStarted;