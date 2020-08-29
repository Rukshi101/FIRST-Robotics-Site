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
  class WomanInStem extends Component{
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
        <h1 className = "RegistrationTitle startaTeam">Women In STEM</h1>
             <p className = "signuptext">
             More hospitals are engaging are helping kids with disabilities engage with math and science in an very unique way
using LEGO robotics kits to introduce engineering concepts to kids who might not get the chance otherwise:
building their very own robots, then showcasing and presenting them for robot supremacy. The program opens
new opportunities for kids to participate in a ground-breaking robotic experience. This program provides an
opportunity to develop and re
</p>
<p  className = "signuptext">
Below are some details required if you are interested in connecting with your local community hospitals.
</p>
<p  className = "signuptext">
Here are some of our incredible CanCode initiatives:
</p>
<p className = "signuptext">
FRC Java Tutorials
</p>
<p className = "signuptext">
As part of the CanCode program, we’ve created a complete FIRST Robotics Competition Java tutorial series to
get you started for this years’ game. The tutorials will teach you the basics of programming starting from your
</p>
<p className = "signuptext">
PixelPad Fun with Java and Python
</p>
<p className = "signuptext">
You can build FIRST Robotics POWER UP, Maker Labs and Castle Crashers games using the coding handbook
and pre-made game guide. Click here to find out more.     
</p>
<p className = "signuptext">
Check out our event calendar to view more information on upcoming events
            
</p></div>
<div className = "imageSide">
<img className = "projectPageimage" src = {require("./CanCodePage.jpg")} alt=""/>
             </div>
           
            </div>
            <Footer/>
            </div>
            </div>
        )
        }
  }
export default WomanInStem