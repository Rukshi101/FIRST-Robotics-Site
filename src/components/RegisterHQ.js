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
  class RegistrationHQ extends Component{
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
              <hr className = "registrationhr" color = 'green' width = '500px'></hr>
        <h1 className = "RegistrationTitle">Register with FIRST HQ</h1>
        <div>
        <p className = "firsthqtext">NOTE: Before Registering with FIRST HQ, please <a href = "https://forward.firstroboticscanada.org/contact">Contact Us!</a></p>
            <p className = "firsthqtext">You’ll begin receiving communications from FIRST, along with a temporary team number in preparation for event registration in the fall.  Create a team roster link to submit with your registration.  (Please note that completing this stage of the process does not commit you to becoming a team.). Registering includes event registration and ordering the Kit of Parts. We’ve made it easy to pay your team’s fees with favorable terms, online payments, discounts for rookie teams, and more.</p>
            <p className = "firsthqtext">Please click <a href = "https://my.firstinspires.org/AccountManager/Account/Register"> here </a> to create an account and register with FIRST HQ.</p>
        </div>
     
            </div>
            <Footer/>
            </div>
        )
        }
  }
export default RegistrationHQ