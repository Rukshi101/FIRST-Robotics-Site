import React from 'react'

import {Link} from 'react-router-dom';


import CanCode from './CanCode';
class ProjectLink extends React.Component{
    state={
        show:true
    }
    render(){
        const {imagess} =this.props
        console.log("IMAGE PROPS", imagess)
              
              return(
                  <div>
                <div className = "Impactcontainer projectcontainer firstprojrow">
        
                <div className = "ProjectBin">
                <img className = "projectimage" src = {require("./CanCode.jpg")} alt=""/>
                <div className = "overlay">
                    <div className = "text"><Link className = "Nav_Link" to = "CanCode">CanCode</Link></div>
                </div>
                    </div>
                <div className = "ProjectBin">
                <img className = "projectimage" src = {require("./Diversity.png")} alt=""/>
                <div className = "overlay">
                    <div className = "text"><Link className = "Nav_Link" to = "Diversity">Diversity</Link></div>
                </div>
                </div>
                <div className = "ProjectBin">
                <img className = "projectimage" src = {require("./Learn.png")} alt=""/>
                <div className = "overlay">
                    <div className = "text"><a href = 'https://www.firstroboticscanada.org/learn/'>Learn</a></div>
                </div>
                </div>
                <div className = "ProjectBin">
                <img className = "projectimage" src = {require("./FIRSTLive.png")} alt=""/>
                <div className = "overlay">
                    <div className = "text"><a href = 'https://www.firstroboticscanada.org/firstlive/'>FIRST Live!</a></div>
                </div>
              </div>  
              </div>
              <div className = "Impactcontainer projectcontainer">
              <div className = "ProjectBin">
                <img className = "projectimage" src = {require("./WomenStem.png")} alt=""/>
                <div className = "overlay">
                    <div className = "text"><Link className = "Nav_Link" to ="WomanInStem">Woman in STEM</Link></div>
                </div>
                    </div>
                <div className = "ProjectBin">
                <img className = "projectimage" src = {require("./HollandBloorView.jpg")} alt=""/>
                <div className = "overlay">
                    <div className = "text"><a href = 'https://hollandbloorview.ca/services/programs-services/robotics'>Holland Bloorview</a></div>
                </div>
                </div>
                <div className = "ProjectBin">
                <img className = "projectimage" src = {require("./Libraries.jpg")} alt=""/>
                <div className = "overlay">
                    <div className = "text"><Link className = "Nav_Link" to = "Libraries">Libraries</Link></div>
                </div>
                </div>
                <div className = "ProjectBin">
                <img className = "projectimage" src = {require("./hospitals.png")} alt=""/>
                <div className = "overlay">
                    <div className = "text"><Link className = "Nav_Link" to = "Hospitals">Hospitals</Link></div>
                </div>
              </div>
                </div>
            
                </div>

  
            
                   
              )
          }
        }
        
export default ProjectLink