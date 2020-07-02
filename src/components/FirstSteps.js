import React,{Component} from 'react'
import '../App.css'
import axios from 'axios';
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import '../App.css';

import StepTitle from '../components/StepTitle'
const fetchedStepTitle = [
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
  const fetchedStepLink= [
    {
    id:1, text:"loremaskjd ijasdnoasndoinasdonasodnosnadoansd", title : fetchedStepTitle[0]
  
    },
    {
      id:2, text:"skdfmoijasdnoasndoinasdonasodnosnadoansd",  title : fetchedStepTitle[1]
      },
      {
        id:3, text:"loxndfjoasndoindfgasdonasodnosnadoansd",  title : fetchedStepTitle[2]
        },
        {
            id:4, text:"loxndfjoasndoinasdonasodnosnadoansd",  title : fetchedStepTitle[3]
            }
  ]
class FirstSteps extends Component{
state = {
    fetchedStepLink,
    fetchedStepTitle
}
   

    async componentDidMount(){

      
        const TitleRes = await axios({
          method:'GET',
          url:'http://localhost:1337/first-steps-titles'
        })
        const ContentRes = await axios({
          method:'GET',
          url:'http://localhost:1337/first-steps-links'
        })
        
        const fetchedStepTitle = TitleRes.data
        console.log(TitleRes.data)
        const fetchedStepLink = ContentRes.data
        console.log("FETCHED CONTENT", fetchedStepLink)
        this.setState({fetchedStepTitle,fetchedStepLink})
      }
      switchContentHandler = () =>{
        console.log('Was Clicked');
    }
    render(){
    return(
      
    <div className = "resourceBackground">
      
      <SideBar/>
      
 
    <div className="h-100 p-4">
      

            <StepTitle
             HeaderTitle = {this.state.fetchedStepTitle}
             content ={this.state.fetchedStepLink}/>
            
        
       
    </div>
    
    <Footer/>
    </div>

    )
}
}
export default FirstSteps