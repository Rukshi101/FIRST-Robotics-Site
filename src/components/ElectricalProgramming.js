import React,{Component} from 'react'
import '../App.css'
import axios from 'axios';
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import '../App.css';

import EPTitle from '../components/EPTitle'
const fetchedEPTitle = [
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
  const fetchedEPLink= [
    {
    id:1, text:"loremaskjd ijasdnoasndoinasdonasodnosnadoansd", title : fetchedEPTitle[0]
  
    },
    {
      id:2, text:"skdfmoijasdnoasndoinasdonasodnosnadoansd",  title : fetchedEPTitle[1]
      },
      {
        id:3, text:"loxndfjoasndoindfgasdonasodnosnadoansd",  title : fetchedEPTitle[2]
        },
        {
            id:4, text:"loxndfjoasndoinasdonasodnosnadoansd",  title : fetchedEPTitle[3]
            }
  ]
class EP extends Component{
state = {
    fetchedEPLink,
    fetchedEPTitle
}
   

    async componentDidMount(){

      
        const TitleRes = await axios({
          method:'GET',
          url:'https://admin.firstroboticscanada.org/ept-itles'
        })
        const ContentRes = await axios({
          method:'GET',
          url:'https://admin.firstroboticscanada.org/epl-inks'
        })
        
        const fetchedEPTitle = TitleRes.data
        console.log(TitleRes.data)
        const fetchedEPLink = ContentRes.data
        console.log("FETCHED CONTENT", fetchedEPLink)
        this.setState({fetchedEPTitle,fetchedEPLink})
      }
      switchContentHandler = () =>{
        console.log('Was Clicked');
    }
    render(){
    return(
      <div className = "resourceBackground">
      
      <SideBar/>
      
 
    <div className="h-100 p-4 shifted-content-2">
      

            <EPTitle
             HeaderTitle = {this.state.fetchedEPTitle}
             content ={this.state.fetchedEPLink}/>
            
        
       
    </div>
    <div className = "extrapadding">

</div>
    <Footer/>
    </div>

    )
}
}
export default EP