import React,{Component} from 'react';
import axios from 'axios';

import '../../App.css'

import BlackNavbar from '../../components/BlackNavbar'
import Footer from '../Footer';


const fetchedSignUpTitle = [
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
  const fetchedSignUpcontent = [
    {
    id:1, text:"loremaskjd ijasdnoasndoinasdonasodnosnadoansd", title : fetchedSignUpTitle[0]
  
    },
    {
      id:2, text:"skdfmoijasdnoasndoinasdonasodnosnadoansd",  title : fetchedSignUpTitle[1]
      },
      {
        id:3, text:"loxndfjoasndoindfgasdonasodnosnadoansd",  title : fetchedSignUpTitle[2]
        },
        {
            id:4, text:"loxndfjoasndoinasdonasodnosnadoansd",  title : fetchedSignUpTitle[3]
            }
  ]
  class Hospitals extends Component{
    state={
      fetchedSignUpTitle,
      fetchedSignUpcontent,
      sideDrawerOpen:false,
    
  
    }
  
    drawerToggleClickHandler = () =>{
      this.setState((prevState)=>{
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
    };
    
    backdropClickHandler = () =>{
      this.setState({sideDrawerOpen:false})
    };
  
    async componentDidMount(){

      
      const TitleRes = await axios({
        method:'GET',
        url:'https://admin.firstroboticscanada.org/sign-up-titles'
      })
      const ContentRes = await axios({
        method:'GET',
        url:'https://admin.firstroboticscanada.org/sign-up-contents'
      })
      
      const fetchedSignUpTitle = TitleRes.data
      console.log(TitleRes.data)
      const fetchedSignUpcontent = ContentRes.data
      console.log("FETCHED CONTENT",fetchedSignUpcontent)
      this.setState({fetchedSignUpTitle,fetchedSignUpcontent})
    }
    render(){
        return(
            <div>
              <BlackNavbar/>
              <div className = "SignUp">
            
              <div className = "flex-container">
             <div className = 'videosignup '>
             <hr className = "registrationhr startaTeam" color = 'green' width = '400px'></hr>
        <h1 className = "RegistrationTitle startaTeam">Hospitals</h1>
             <p className = "signuptext">
             More hospitals are engaging are helping kids with disabilities engage with math and science in an very unique way
using LEGO robotics kits to introduce engineering concepts to kids who might not get the chance otherwise:
building their very own robots, then showcasing and presenting them for robot supremacy. The program opens
new opportunities for kids to participate in a ground-breaking robotic experience. This program provides an
opportunity to develop and refine decision-making and socialization skills, all while making friends.
</p>
<p  className = "signuptext">
Who is the program for?
</p>
<p  className = "signuptext">
Kids with disabilities for children aged 6-14 years old
</p>
<p className = "signuptext">
How long is the program
</p>
<p className = "signuptext">
The program maybe up to 6 weeks long (once a week)
Each session is 3 hours long with 1/2 hour prep time and 1/2 hour closing time. Actual training time: 2 hrs
</p>
<p className = "signuptext">
Requirements:
</p>
<ul className = "libraryprograms">
    <li className = "listitems">
      Hospital Staff and specially-trained volunteers to make sure kids have all the support they need to be able to
participate. Volunteers come from the hospital and FIRST Robotics Canada students and alumni.
    </li>
    <li className = "listitems">
      Recommended: 2 volunteers (1 must be a hospital specially trained) to work with 2 kids. Please note that each
session will need to supervised by a hospital staff.
Build to Express Activity List, LEGO WeDo 2.0 Kit, iPADs
    </li>
    <li className = "listitems">
      Build to Express Activity List, LEGO WeDo 2.0 Kit, iPADs
    </li>

  </ul>
<p className = "signuptext">
  Each Session Includes:
  </p>
  <ul className = "libraryprograms">
    
    <li>Ice-breaker activity</li>
    <li>BuildToExpress Activity</li>
    <li>Robot Build that has 3 parts: (recommended to use the same theme across all sessions e.g. space, water, etc.)</li>
    <li>Explore phase</li>
    <li>Create phase</li>
    <li>Share phase</li>
    <li>Week 6 session could be a celebration session with icebreaker and possibly show and tell about their models,
describe their learnings.   </li>
</ul>

</div>
<div className = "imageSide">
<img className = "projectPageimage" src = {require("./forwardassets/CanCodePage.jpg")} alt=""/>
             </div>
           
            </div>
            <Footer/>
            </div>
            </div>
        )
        }
  }
export default Hospitals