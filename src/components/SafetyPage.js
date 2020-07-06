import React,{Component} from 'react'
import '../App.css'
import axios from 'axios';
import SideBar from './SideBar'
import Footer from './Footer'
import '../App.css';

import Safety from './Safety'



const fetchedSafetyTitle = [
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
  const fetchedSafetyLink = [
    {
    id:1, text:"loremaskjd ijasdnoasndoinasdonasodnosnadoansd", title : fetchedSafetyTitle[0]
  
    },
    {
      id:2, text:"skdfmoijasdnoasndoinasdonasodnosnadoansd",  title : fetchedSafetyTitle[1]
      },
      {
        id:3, text:"loxndfjoasndoindfgasdonasodnosnadoansd",  title : fetchedSafetyTitle[2]
        },
        {
            id:4, text:"loxndfjoasndoinasdonasodnosnadoansd",  title : fetchedSafetyTitle[3]
            }
  ]
class SafetyPage extends Component{
state = {
    fetchedSafetyLink,
    fetchedSafetyTitle
}
   

    async componentDidMount(){

      
        const TitleRes = await axios({
          method:'GET',
          url:'https://admin.firstroboticscanada.org/safetytitles'
        })
        const ContentRes = await axios({
          method:'GET',
          url:'https://admin.firstroboticscanada.org/safetycontents'
        })
        
        const fetchedSafetyTitle = TitleRes.data
        console.log(TitleRes.data)
        const fetchedSafetyLink = ContentRes.data
        console.log("FETCHED CONTENT",fetchedSafetyLink)
        this.setState({fetchedSafetyTitle,fetchedSafetyLink})
      }
      switchContentHandler = () =>{
        console.log('Was Clicked');
    }
    render(){
    return(
      <div className = "resourceBackground">
      <SideBar/>
      
 
  
      

    <div className="h-100 p-4">
        
            <Safety
             safetytitle = {this.state.fetchedSafetyTitle}
             safetycontent ={this.state.fetchedSafetyLink}/>
            
   
        
    </div>
    <Footer/>
</div>

    )
}
}

export default SafetyPage