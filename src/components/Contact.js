import React,{Component} from 'react';
import axios from 'axios';

import '../App.css'
import Navbar from '../components/NavBar/Navbar'
import Footer from '../components/Footer'
import ContactTitle from '../components/ContactTitle'
const fetchedContactName = [
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
  const fetchedContactInfo = [
    {
    id:1, text:"loremaskjd ijasdnoasndoinasdonasodnosnadoansd", title : fetchedContactName[0]
  
    },
    {
      id:2, text:"skdfmoijasdnoasndoinasdonasodnosnadoansd",  title : fetchedContactName[1]
      },
      {
        id:3, text:"loxndfjoasndoindfgasdonasodnosnadoansd",  title : fetchedContactName[2]
        },
        {
            id:4, text:"loxndfjoasndoinasdonasodnosnadoansd",  title : fetchedContactName[3]
            }
  ]
  class Contact extends Component{
    state={
      fetchedContactName,
      fetchedContactInfo,
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
        url:'http://localhost:1337/contact-names'
      })
      const ContentRes = await axios({
        method:'GET',
        url:'http://localhost:1337/contact-infos'
      })
      
      const fetchedContactName = TitleRes.data
      console.log(TitleRes.data)
      const fetchedContactInfo = ContentRes.data
      console.log("FETCHED CONTENT",fetchedContactInfo)
      this.setState({fetchedContactName,fetchedContactInfo})
    }
    render(){
        return(
            <div className = "SignUp contactinfo">
              <Navbar/>
              <h1>Contact Us</h1>
              <p className = 'registerInfo'>First, familiarize yourself with the FIRST Robotics Competition. Then locate your region’s Regional Director or FIRST Senior Mentor. </p>
                <div className = "resourceBackground">
                 <ContactTitle
               titles = {this.state.fetchedContactName}
               content ={this.state.fetchedContactInfo}
                />
                </div>
                  <img className = "john" src = {require("../images/john.jpg")} alt=""/>
                <p className = 'registerInfo mentordesc'>These people know the FIRST teams, participating schools, and FIRST-friendly businesses in your area. they can help you form a plan for getting your team funded, organized, and in touch with other teams in the area.</p>
                <p className = 'registerInfo'><a href = "https://www.firstroboticscanada.org/about-us/staff/">FIRST Senior Mentors</a></p>
                <Footer/>
            </div>
        )
        }
  }
export default Contact