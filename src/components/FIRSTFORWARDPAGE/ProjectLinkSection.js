import React,{Component} from 'react';
import axios from 'axios';

import '../../App.css'

import ProjectImage from './ProjectImage'

const fetchedProjectTitle = [
    {
      id:1,name:"DUMMY DATA"
    }
  
    
  ]
  const fetchedProjectImage = [
    {
    id:1, imgFile:'http://www.localhost:8080/static/media/Allies.c3b8c5a0.jpg' , title : fetchedProjectTitle[0]
  
    },
    {
      id:2, imgFile:'http://www.localhost:8080/static/media/Allies.c3b8c5a0.jpg',  title : fetchedProjectTitle[1]
      },
      {
        id:3,imgFile:'http://www.localhost:8080/static/media/Allies.c3b8c5a0.jpg',  title : fetchedProjectTitle[2]
        },
        {
            id:4,imgFile:'http://www.localhost:8080/static/media/Allies.c3b8c5a0.jpg',  title : fetchedProjectTitle[3]
            }
  ]
  class ProjectLinkSection extends Component{
    state={
      fetchedProjectTitle,
      fetchedProjectImage,
      sideDrawerOpen:false,
    
  
    }
  
    
    async componentDidMount(){

      
      const TitleRes = await axios({
        method:'GET',
        url:'http://localhost:1337/projects'
      })
      const ContentRes = await axios({
        method:'GET',
        url:'http://localhost:1337/project-images'
      })
      
      const fetchedProjectTitle = TitleRes.data
      console.log('DATA FOR TITLE WARNIGN!!!!', TitleRes.data)
      const fetchedProjectImage = ContentRes.data
      console.log("FETCHED PROJECT CONTENT",fetchedProjectImage)
      this.setState({fetchedProjectTitle,fetchedProjectImage})
    }
    render(){
        return(
            <div className = " ProjectSection">
               
                 <ProjectImage
                titles = {this.state.fetchedProjectTitle}
                image ={this.state.fetchedProjectImage}
                /> 
            </div>
        )
        }
  }
export default ProjectLinkSection