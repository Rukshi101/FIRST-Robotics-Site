import React from 'react'

class ProjectLink extends React.Component{
    state={
        show:true
    }
    render(){
        const {name,imagess} = this.props;
        console.log('NAMEEE', name,imagess);
    return(
 
        <div className = "Impactcontainer hubpics">
        
            <div className = "ProjectBin">
            <img className = "projectimage" src = {require("../images/1241.jpg")} alt=""/>
            <div className = "overlay">
                <div className = "text"><a href = "https://www.theory6.ca/first-help-hubs">1241:Theory 6</a></div>
            </div>
                </div>
            <div className = "ProjectBin">
            <img className = "projectimage" src = {require("../images/1305.png")} alt=""/>
            <div className = "overlay">
                <div className = "text"><a href = "https://www.team1305.org/hub">1305:Ice Cubed</a></div>
            </div>
            </div>
            <div className = "ProjectBin">
            <img className = "projectimage" src = {require("../images/simbiotics.png")} alt=""/>
            <div className = "overlay">
                <div className = "text"><a href = "https://frchelpdesk.ca/">1114:Simbiotics</a></div>
            </div>
            </div>
            <div className = "ProjectBin">
            <img className = "projectimage" src = {require("../images/772.png")} alt=""/>
            <div className = "overlay">
                <div className = "text"><a href = "https://www.sabrerobotics.com/help-center">772: Sabre Bytes</a></div>
            </div>
          </div>  
          
          
            </div>
        
   
)
    }
    }
export default ProjectLink