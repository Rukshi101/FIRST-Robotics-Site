import React,{Component} from 'react'
import '../App.css'
import axios from 'axios';
import SideBar from './SideBar'
import Footer3 from './Footer3'
import '../App.css';

const fetchedSafetyTitle = [
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
  const fetchedSafetyLink = [
    {
    id:1, text:"loremaskjd ijasdnoasndoinasdonasodnosnadoansd", title : fetchedSafetyTitle[0]
  
    },
    {
      id:2, text:"skdfmoijasdnoasndoinasdonasodnosnadoansd",  title : fetchedSafetyTitle[1]
      },
      {
        id:3, text:"loxndfjoasndoindfgasdonasodnosnadoansd",  title : fetchedSafetyTitle[2]
        },
        {
            id:4, text:"loxndfjoasndoinasdonasodnosnadoansd",  title : fetchedSafetyTitle[3]
            }
  ]
class Resources extends Component{
state = {
    fetchedSafetyLink,
    fetchedSafetyTitle
}
   

    async componentDidMount(){

      
        const TitleRes = await axios({
          method:'GET',
          url:'https://admin.firstroboticscanada.org/safetytitles'
        })
        const ContentRes = await axios({
          method:'GET',
          url:'https://admin.firstroboticscanada.org/safetycontents'
        })
        
        const fetchedSafetyTitle = TitleRes.data
        console.log(TitleRes.data)
        const fetchedSafetyLink = ContentRes.data
        console.log("FETCHED CONTENT",fetchedSafetyLink)
        this.setState({fetchedSafetyTitle,fetchedSafetyLink})
      }
      switchContentHandler = () =>{
        console.log('Was Clicked');
    }
    render(){
    return(
      <div>
        <SideBar/>

    <div className="resourcespage p-4 shifted-content-2">
      <div className = "resourcebanktitle">
        <p className="h1 resourcestitle">FIRST Resource Bank!</p>
        <p className = "resourcesdescription">
        <span className="mif-arrow-left icon mif-7x"></span>
        </p>
        
        </div>
     
    </div>
    <Footer3/>
</div>

    )
}
}

export default Resources