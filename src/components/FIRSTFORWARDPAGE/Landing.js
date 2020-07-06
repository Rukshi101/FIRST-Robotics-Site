

import React,{Component} from 'react';
import axios from 'axios';

import Navs from './Navbar';

import SideDrawer from '../SideDrawer/sideDrawer';
import Backdrop from '../Backdrop/Backdrop.js';

import {library} from '@fortawesome/fontawesome-svg-core'

import {fab, faYoutube, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

import { faCoffee, faUsers, faClipboard,faBook, faLink} from '@fortawesome/free-solid-svg-icons'
 

import VideoTitle from './VideoTitle';
import Footer from '../Footer'


import AboutUs from './AboutUs'
import Project from './Projects'
import Allies from './Allies'
import ContactUs from './ContactUs'
import Impact from './Impact'
import Commitment from './Commitment'
import ProjectLinkSection from './ProjectLinkSection'
library.add( fab, faYoutube,faTwitter, faInstagram, faCoffee, faUsers, faClipboard,faBook, faLink)


const fetchedcommitment_titles =[
  {
    id:1, name:"Equity"
  },
  {
    id:2, name:"Diversity"
  },
  {
    id:3, name:"Inclusion"
  }
]
const fetchedcontent = [
  {
  id:1, text:"loremaskjd ijasdnoasndoinasdonasodnosnadoansd", title : fetchedcommitment_titles[0]

  },
  {
    id:2, text:"skdfmoijasdnoasndoinasdonasodnosnadoansd",  title : fetchedcommitment_titles[1]
    },
    {
      id:3, text:"loxndfjoasndoinasdonasodnosnadoansd",  title : fetchedcommitment_titles[2]
      },
    
]
class Landing extends Component{
  state={
    
    sideDrawerOpen:false,
    fetchedcommitment_titles,
    fetchedcontent

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
    const productRes = await axios({
      method:'GET',
      url:'http://localhost:1337/products'
    })
    const eventRes = await axios({
      method:'GET',
      url:'http://localhost:1337/events'
    })
    
    const fetchedProducts = productRes.data
    const fetchedEvents = eventRes.data
    console.log(fetchedProducts);
    console.log(fetchedEvents);
    this.setState({fetchedProducts,fetchedEvents})
    
    const TitleRes = await axios({
      method:'GET',
      url:'https://admin.firstroboticscanada.org/commitment-titles'
    })
    const ContentRes = await axios({
      method:'GET',
      url:'https://admin.firstroboticscanada.org/contents'
    })
    
    const fetchedcommitment_titles = TitleRes.data
    console.log(TitleRes.data)
    const fetchedcontent = ContentRes.data
    console.log("FETCHED CONTENT",fetchedcontent)
    this.setState({fetchedcommitment_titles,fetchedcontent})
    
  }
  render(){

    let backdrop;


    if (this.state.sideDrawerOpen){
     
      backdrop = <Backdrop click ={this.backdropClickHandler}/>;
    }
   
   
    return (
        <div className = "App">
        
             
              
           <Navs drawerClickHandler= {this.drawerToggleClickHandler} />
      <SideDrawer show = {this.state.sideDrawerOpen}/>
        {backdrop}  
               
                <VideoTitle/>
                <section id= "about">
                <AboutUs/>
                </section>
                <Impact/>
                <Commitment/>
             
                <section id = "projects">
                <Project/>
                <ProjectLinkSection/>
                </section>
                <Allies/>
                <section id = "contact">
                <ContactUs/>
                </section>
            <Footer/>
                </div>
         
         
     
    );
  }
}



export default Landing;
