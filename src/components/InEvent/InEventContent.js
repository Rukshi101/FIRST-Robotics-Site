import React from 'react'

class InEventContent extends React.Component{
    state={
        show:true
    }
    render(){
        const {name, contentss} =this.props
        console.log("name", name)
  console.log("contents", contentss)
        const {show} =this.state
        return(
            
           <div className = "SignUpTitle" onClick = {() =>this.setState({show:!show})} >
               
                  
                      <div className = "smallcont">
                    
                <div className = "SignUpHeaders">
              {name}
              </div>
              

              
                {contentss.map(content =>(
        
                  
                   <div>
                    {content.text}
                    </div>
                  
                   
                   
                   
       
               ) )}
            </div>
          
               </div>
             
        )
    }
}

export default InEventContent;