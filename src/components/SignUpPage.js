import React,{Component} from 'react';
import axios from 'axios';

import '../App.css'

import BlackNavbar from '../components//BlackNavbar'
import Footer from './Footer';

import ReactPlayer from 'react-player'
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
  class SignUpPage extends Component{
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
              <hr className = "registrationhr" color = 'green' width = '400px'></hr>
        <h1 className = "RegistrationTitle">Start a Team</h1>
              <div className = "flex-container">
             <div className = 'videosignup '>
             <p className = "signuptext">
             If you would like to start a FIRST Robotics Competition team in your area, 
we welcome you and promise to provide you with all the support, ideas, and encouragement you need to succeed! 
</p>
<p  className = "signuptext">

</p>
<p  className = "signuptext">
Build your team with high-school aged students and a minimum of two adult coaches/mentors, who will need to complete Youth Protection Screening.  A meeting and build space will be required
Once registered into the program, the team will design, build, and program a robot to perform specific tasks in the season game against a field of competitors. Teams will then attend an event and compete alongside other teams at official FIRST events.

             </p>
             </div>
             <div className = "signupvideo">
             <ReactPlayer className = "reactplayervid"
               url = "https://www.youtube.com/watch?time_continue=2&v=wSA6InzFAZE"/>
             </div>

             </div>
             <div className = " signupimage col-md-12">
             <img className = "signupimageimage" src = {require("../images/realsignup.PNG")} alt=""/>
             </div>
            </div>
            <Footer/>
            </div>
        )
        }
  }
export default SignUpPage