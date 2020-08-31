import React,{Component} from 'react'
import '../App.css'
import axios from 'axios';

import Footer2 from './Footer copy'
import '../App.css';

import RegistrationTitle from './RegistrationTitle'
import Navs from './NavBar/Navbar';
import BlackNavbar from './BlackNavbar';

import SideDrawerRookies from '../components/sideDrawerRookies'
import Backdrop from './Backdrop/Backdrop.js';
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
  sideDrawerOpen:false,
    fetchedRegistrationContent,
    fetchedRegistrationTitle
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
          url:'https://admin.firstroboticscanada.org/registration-titles'
        })
        const ContentRes = await axios({
          method:'GET',
          url:'https://admin.firstroboticscanada.org/registration-contents'
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
      
      let backdrop;


      if (this.state.sideDrawerOpen){
       
        backdrop = <Backdrop click ={this.backdropClickHandler}/>;
      }
     
    return(
      <div className = "resourceBackground">
   <BlackNavbar drawerClickHandler= {this.drawerToggleClickHandler} />
      <SideDrawerRookies show = {this.state.sideDrawerOpen}/>
        {backdrop} 
   
    <div className="SignUp">
     <hr className = "registrationhr" color = 'green' width = '310px'></hr>
        <h1 className = "RegistrationTitle">Register</h1>

     <p className = "registerInfo">
             
</p>

<p className = "registerInfo">Here are 4 steps that needs to be completed:</p>
        <div className = "registercards">
        <p>
        <RegistrationTitle
             titles = {this.state.fetchedRegistrationTitle}
             content ={this.state.fetchedRegistrationContent}/>
            
        </p>

        </div>
       
    </div>
    <div className = "extrapadding">

       </div>
        <Footer2/>
        
</div>


    )
}
}

export default Resources

{/* <div className = "viewresource col-md-12">
<a className = "viewSource" href= "google.com">View Resources</a>
</div> */}
// Registering your team’s information makes you a part of the huge <em className = "FIRST">FIRST </em> Robotics Competition community. You’ll begin receiving communications from <em className = "FIRST">FIRST</em>, along with a temporary team number in preparation for event registration in the fall.  Create a team roster link to submit with your registration.  (Please note that completing this stage of the process does not commit you to becoming a team.). Registering includes event registration and ordering the Kit of Parts. We’ve made it easy to pay your team’s fees with favorable terms, online payments, discounts for rookie teams, and more.