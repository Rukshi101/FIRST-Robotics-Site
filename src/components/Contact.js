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
        url:'https://admin.firstroboticscanada.org/contact-names'
      })
      const ContentRes = await axios({
        method:'GET',
        url:'https://admin.firstroboticscanada.org/contact-infos'
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
              
              <hr className = "registrationhr" color = 'green' width = '310px'></hr>
              <h1 className = "contacttitle">Contact Us</h1>
              <div className = "flex-container">
                <div>
              <p className = 'registerInfo'>First, familiarize yourself with the <em className = "FIRST">FIRST </em>Robotics Competition. Contact our Regional Director, John Hobbins, by sending him an email at john.hobbins@firstroboticscanada.org. </p>
      
          
             <p className = "registerInfo"> Then reach out to our Senior mentors for advice in getting started. They will reach out to you to provide information, familiarize yourself with other <em className = "FIRST">FIRST </em>teams, participating schools, and <em className = "FIRST">FIRST </em> -friendly businesses in your area. They can also help you form a plan for getting your team funded, organized, and in touch with other teams in the area.</p>
             </div>
                <div className = "resourceBackground johndiv">
            
                <img className = "john" src = {require("../images/1310.jpg")} alt=""/>
                </div>

                </div>
               
                <Footer/>
            </div>
        )
        }
  }
export default Contact


// <ContactTitle
// titles = {this.state.fetchedContactName}
// content ={this.state.fetchedContactInfo}
//  />
{/* <div className = "col-md-6 cardsections">
                   <div className = "johncard" >
                   <img className = "john" src = {require("../images/john.jpg")} alt=""/>
                   <div className = "johncard-body">
                     <p className = "johncard-text">  
                     John Hobbin    
                 </p>
                   </div>
                   </div>
           
                 </div> */}