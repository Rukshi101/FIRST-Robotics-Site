import React,{Component} from 'react'
import '../App.css'
import axios from 'axios';
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import '../App.css';

import DesignBuildTitle from '../components/DesignBuildTitle'
const fetchedDesignTitle = [
    {
      id:1,name:"Contact Us"
    },
    {
      id:2,name:"Build your Team"
    },
    {
        id:3,name:"Register"
      },
      {
        id:4,name:"Start Building"
      }
    
  ]
  const fetchedDesignLink = [
    {
    id:1, text:"loremaskjd ijasdnoasndoinasdonasodnosnadoansd", title : fetchedDesignTitle[0]
  
    },
    {
      id:2, text:"skdfmoijasdnoasndoinasdonasodnosnadoansd",  title : fetchedDesignTitle[1]
      },
      {
        id:3, text:"loxndfjoasndoindfgasdonasodnosnadoansd",  title : fetchedDesignTitle[2]
        },
        {
            id:4, text:"loxndfjoasndoinasdonasodnosnadoansd",  title : fetchedDesignTitle[3]
            }
  ]
class DesignBuild extends Component{
state = {
    fetchedDesignLink,
    fetchedDesignTitle
}
   

    async componentDidMount(){

      
        const TitleRes = await axios({
          method:'GET',
          url:'https://admin.firstroboticscanada.org/design-titles'
        })
        const ContentRes = await axios({
          method:'GET',
          url:'https://admin.firstroboticscanada.org/design-links'
        })
        
        const fetchedDesignTitle = TitleRes.data
        console.log(TitleRes.data)
        const fetchedDesignLink = ContentRes.data
        console.log("FETCHED CONTENT",fetchedDesignLink)
        this.setState({fetchedDesignTitle,fetchedDesignLink})
      }
      switchContentHandler = () =>{
        console.log('Was Clicked');
    }
    render(){
    return(
      <div className = "resourceBackground">
      <SideBar/>
 
    <div className="h-100 p-4 shifted-content">
    
  
            <DesignBuildTitle
             designtitle = {this.state.fetchedDesignTitle}
             designcontent ={this.state.fetchedDesignLink}/>
            
      
    </div>
    <Footer/>
    </div>

    )
}
}
export default DesignBuild