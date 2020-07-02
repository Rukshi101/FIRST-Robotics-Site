import React,{Component} from 'react';
import axios from 'axios';

import Navbar from '../components/NavBar/Navbar';

import SideDrawerRookies from '../components/sideDrawerRookies'
import Backdrop from '../components/Backdrop/Backdrop.js';

import '../App.css';
import'../videoTitle.css';
import Cards from '../components/Cards/Cards.js'

import {library} from '@fortawesome/fontawesome-svg-core'

import {fab, faYoutube, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

import { faCoffee, faUsers, faClipboard,faBook, faLink} from '@fortawesome/free-solid-svg-icons'
 



import VideoTitle from '../components/VideoTitle';
import Footer from '../components/Footer'
import Commitment from '../components/Commitment'
import OnlineHubs from '../components/OnlineHubs'
import Testimonials from '../components/Testimonial'
import Form from '../components/Form'


import OnlineHubLinks from './OnlineHubLinks'
library.add( fab, faYoutube,faTwitter, faInstagram, faCoffee, faUsers, faClipboard,faBook, faLink)
// const fetchedProducts = [
//   {
//     id:1,name:"Name"
//   },
//   {
//     id:2,name:"Dogs"
//   }
// ]

// const fetchedEvents = [
// {
//   id:1,qty:100,product:fetchedProducts[0]
// },
// {
//   id:2,qty:100,product:fetchedProducts[0]
// },
// {
//   id:3,qty:100,product:fetchedProducts[0]
// },

// {
//   id:4,qty:100,product:fetchedProducts[1]
// },
// {
//   id:5,qty:100,product:fetchedProducts[1]
// }
// ]

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
class Home extends Component{
  state={
    // fetchedProducts,
    // fetchedEvents,
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
      url:'http://localhost:1337/commitment-titles'
    })
    const ContentRes = await axios({
      method:'GET',
      url:'http://localhost:1337/contents'
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
        
             
             <Navbar drawerClickHandler= {this.drawerToggleClickHandler} />
      <SideDrawerRookies show = {this.state.sideDrawerOpen}/>
        {backdrop}  
               
                <VideoTitle/>
                
                <section id = "JoinUs">
                <Cards/>
                </section>
                <OnlineHubs/>
                <OnlineHubLinks/>
                <Commitment
                commitment_title = {this.state.fetchedcommitment_titles}
                content ={this.state.fetchedcontent}
                /> 
                
                <Testimonials/>
              
                <Form/>
            <Footer/>
                </div>
         
         
     
    );
  }
}



export default Home;
