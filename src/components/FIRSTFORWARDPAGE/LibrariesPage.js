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
  class LibrariesPage extends Component{
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
        <h1 className = "RegistrationTitle startaTeam">Library Programs</h1>
             <p className = "signuptext">
             Library Program
Every year more libraries across Ontario are introducing Robotics into their repertoire of activities for children in the
community. The research components of the challenge is a natural for libraries and LEGO is a big draw. Parents
love the fact that it combines learning and fun as participants gain a variety of skills ranging from teamwork to
programming. Curriculum resources developed specifically in mind are also available.
</p>
<p  className = "signuptext">
Click on the links below to learn more about the library program and how to bring it to your library.
</p>
<p  className = "signuptext">
  <ul className = "libraryprograms">
    <li>
      <a href = "">Guide to Robotics in the Library</a>
    </li>
    <li>
      <a href = "">Free Workshop Training Sessions</a>
    </li>
    <li>
      <a href = "">Volunteer Code of Conduct</a>
    </li>
    <li>
      <a href = "">Participant Code of Conduct</a>
    </li>
    <li>
      <a href = "">Media Consent Form</a>
    </li>
  </ul>
</p>
<p className = "signuptext">
Here's what past members had to say:
</p>
<p className = "signuptext">
<em>“My daughter…continues to discuss all the great things she learned…what the Milton library has offered here is
beyond fantastic – in an area where you don’t often see girls…Thank you for all the hard work and kind attention
the entire staff has put towards this program – Bravo!”</em>
</p>
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
export default LibrariesPage