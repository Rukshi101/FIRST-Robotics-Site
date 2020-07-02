import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class TitleDetail extends React.Component{
    state={
        show:true
    }
    render(){
        const {name, contents} =this.props
        const {show} =this.state
        return(
            
           <div className = "TitleDetail" onClick = {() =>this.setState({show:!show})} >
              
               
                
                {contents.map(content =>(
           
             
                    <div className = "smallcont"> 
                    <div className = "CommitmentTitle">
                    <FontAwesomeIcon size = '1x' icon = "check-double"/> {name}
                    </div>
                    <div className = "ediContent">
                    {content.text}
                    </div>
                    </div>
                   
                   
                   
       
               ) )}
            
               </div>
        )
    }
}

export default TitleDetail;