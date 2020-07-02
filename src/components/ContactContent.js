import React from 'react'

class ContactContent extends React.Component{
    state={
        show:true
    }
    render(){
        const {name, contentss} =this.props
        console.log("name", name)
  console.log("contents", contentss)
        const {show} =this.state
        return(
            
           <div className = "Contact" onClick = {() =>this.setState({show:!show})} >
               
                  
                      <div className = "smallcont">
                    
                <div>
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

export default ContactContent;