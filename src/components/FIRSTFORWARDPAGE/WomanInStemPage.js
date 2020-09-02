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
</p>
<p  className = "signuptext">
FIRST Robotics Canada recognizes the tremendous benefits of diversity, and since its inception in 2001 has encouraged equality and inclusion in all its programs. As such, girls
and young women need support in the STEM.
</p>
<p  className = "signuptext">
FIRST Robotics Canada is proud to collaborate with corporate executives, educational institutional leaders, and passionate individuals who all believe in success for, and
inclusion and acceptance of, girls and young women in science, technology, engineering, and mathematics (STEM).
</p>
<p className = "signuptext">
Girls in STEM Executive Advisory Council
</p>
<p className = "signuptext">
This council offers insight and oversight that will help us break down the barriers of girls in STEM, encourage girls and young women to become innovative and successful
leaders of the future, and build the foundation for systematic change for acceptance and inclusion of girls in STEM.
Girls in FIRST Weekend
Scholarships
</p>

<p className = "signuptext" >
FIRST Robotics Canada and the Murai family are proud to announce the “Canadian Women in STEM Award” scholarship of $10,000 to encourage and support high school girls
who wish to pursue post-secondary education and a career in a STEM. The ideal candidate would be someone who has demonstrated strong leadership, is fanatical about science and technology and wants to motivate
positive change in the community. Find out more about it <a href="https://www.firstroboticscanada.org/scholarships/women-in-stem-scholarship">here</a>.</p> </div>
<div className = "imageSide">
<img className = "projectPageimage" src = {require("./forwardassets/womaninstemimage.jpg")} alt=""/>
             </div>
           
            </div>
            <Footer/>
            </div>
            </div>
        )
        }
  }
export default WomanInStem