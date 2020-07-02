import React from 'react'
import '../App.css'
class SafetyContent extends React.Component{
    state={
        show:true
    }
    render(){
        const {name, contentss} =this.props
  console.log("contents", contentss)
        const {show} =this.state
        return(
            
           <div className = "SignUpTitle" onClick = {() =>this.setState({show:!show})} >
               
                  
               <div className = "smallcont">
                    
               
              

              
                {contentss.map(content =>(
       
                  
           <div  className = "SignUpHeaders">
           <a href={content.text}>{name}</a>
             </div>
           
                  
                   
                   
                   
       
               ) )}
            </div>
          
               </div>
             
        )
    }
}

export default SafetyContent;