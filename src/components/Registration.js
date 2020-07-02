import React,{Component} from 'react'
import '../App.css'
import axios from 'axios';

import Footer from './Footer'
import '../App.css';

import RegistrationTitle from './RegistrationTitle'
import BlackNavbar from './BlackNavbar';
const fetchedRegistrationTitle = [
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
  const fetchedRegistrationContent = [
    {
    id:1, text:"loremaskjd ijasdnoasndoinasdonasodnosnadoansd", title : fetchedRegistrationTitle[0]
  
    },
    {
      id:2, text:"skdfmoijasdnoasndoinasdonasodnosnadoansd",  title : fetchedRegistrationTitle[1]
      },
      {
        id:3, text:"loxndfjoasndoindfgasdonasodnosnadoansd",  title : fetchedRegistrationTitle[2]
        },
        {
            id:4, text:"loxndfjoasndoinasdonasodnosnadoansd",  title : fetchedRegistrationTitle[3]
            }
  ]
class Resources extends Component{
state = {
    fetchedRegistrationContent,
    fetchedRegistrationTitle
}
   

    async componentDidMount(){

      
        const TitleRes = await axios({
          method:'GET',
          url:'http://localhost:1337/registration-titles'
        })
        const ContentRes = await axios({
          method:'GET',
          url:'http://localhost:1337/registration-contents'
        })
        
        const fetchedRegistrationTitle = TitleRes.data
        console.log(TitleRes.data)
        const fetchedRegistrationContent = ContentRes.data
        console.log("FETCHED CONTENT",fetchedRegistrationContent)
        this.setState({fetchedRegistrationTitle,fetchedRegistrationContent})
      }
      switchContentHandler = () =>{
        console.log('Was Clicked');
    }
    render(){
    return(
      <div className = "resourceBackground">
      <BlackNavbar/>
    <div className="SignUp">
     
        <h1>Registration</h1>
     <p className = "registerInfo">Registering your team’s information makes you a part of the huge FIRST Robotics Competition community. You’ll begin receiving communications from FIRST, along with a temporary team number in preparation for event registration in the fall.  Create a team roster link to submit with your registration.  (Please note that completing this stage of the process does not commit you to becoming a team.). Registering includes event registration and ordering the Kit of Parts. We’ve made it easy to pay your team’s fees with favorable terms, online payments, discounts for rookie teams, and more.
</p>
<p className = "registerInfo">Here are 4 steps that needs to be completed:</p>
        <p>
        <RegistrationTitle
             titles = {this.state.fetchedRegistrationTitle}
             content ={this.state.fetchedRegistrationContent}/>
            
        </p>
        <p className = "registerInfo">NOTE: Please<a href = "/"> Contact Us</a>  before Registering for FIRST HQ.</p>
        <p className = 'registerInfo'>After registering, check out our resource bank for good resources on any aspect of the FIRST Robotics Competition.</p>
        <div class = "center">
        <button className = "ResourcesButton">Resources</button>
        </div>
    </div>
  
    <Footer/>
</div>

    )
}
}

export default Resources