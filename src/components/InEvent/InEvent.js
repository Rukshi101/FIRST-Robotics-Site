import React,{Component} from 'react'
import '../../App.css'
import axios from 'axios';
import SideBar from '../../components/SideBar'
import Footer from '../../components/Footer'

import InEventTitle from '../../components/InEvent/InEventTitle'

const fetchedInEventTitle = [
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
  const fetchedInEventContent = [
    {
    id:1, text:"loremaskjd ijasdnoasndoinasdonasodnosnadoansd", title : fetchedInEventTitle[0]
  
    },
    {
      id:2, text:"skdfmoijasdnoasndoinasdonasodnosnadoansd",  title : fetchedInEventTitle[1]
      },
      {
        id:3, text:"loxndfjoasndoindfgasdonasodnosnadoansd",  title : fetchedInEventTitle[2]
        },
        {
            id:4, text:"loxndfjoasndoinasdonasodnosnadoansd",  title : fetchedInEventTitle[3]
            }
  ]
 class InEvent extends Component{
state = {
    fetchedInEventContent,
    fetchedInEventTitle
}
   

    async componentDidMount(){

      
        const TitleRes = await axios({
          method:'GET',
          url:'https://admin.firstroboticscanada.org/in-event-titles'
        })
        const ContentRes = await axios({
          method:'GET',
          url:'https://admin.firstroboticscanada.org/in-event-contents'
        })
        
        const fetchedInEventTitle = TitleRes.data
        console.log(TitleRes.data)
        const fetchedInEventContent = ContentRes.data
        console.log("FETCHED CONTENT",fetchedInEventContent)
        this.setState({fetchedInEventTitle,fetchedInEventContent})
      }
      switchContentHandler = () =>{
        console.log('Was Clicked');
    }
    render(){
    return(
      <div className = "resourceBackground">
      <SideBar/>
 
    <div className="h-100 Commitment ResourceCards p-4 shifted-content-2">
        <p className="inevent ResourceTitle">In-Event Resources</p>
        <p>
            <InEventTitle
             HeaderTitle = {this.state.fetchedInEventTitle}
             content ={this.state.fetchedInEventContent}/>
            
        </p>
       
    </div>
    <div className = "extrapadding">

</div>
    <Footer/>
    </div>

    )
}
}
export default InEvent