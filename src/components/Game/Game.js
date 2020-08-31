import React,{Component} from 'react'
import '../../App.css'
import axios from 'axios';
import SideBar from '../../components/SideBar'
import Footer from '../../components/Footer'

import GameTitle from '../../components/Game/GameTitle'


const fetchedGameTitle = [
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
  const fetchedGameLink = [
    {
    id:1, text:"loremaskjd ijasdnoasndoinasdonasodnosnadoansd", title : fetchedGameTitle[0]
  
    },
    {
      id:2, text:"skdfmoijasdnoasndoinasdonasodnosnadoansd",  title : fetchedGameTitle[1]
      },
      {
        id:3, text:"loxndfjoasndoindfgasdonasodnosnadoansd",  title : fetchedGameTitle[2]
        },
        {
            id:4, text:"loxndfjoasndoinasdonasodnosnadoansd",  title : fetchedGameTitle[3]
            }
  ]
 class Game extends Component{
state = {
    fetchedGameLink,
    fetchedGameTitle
}
   

    async componentDidMount(){

      
        const TitleRes = await axios({
          method:'GET',
          url:'https://admin.firstroboticscanada.org/game-titles'
        })
        const ContentRes = await axios({
          method:'GET',
          url:'https://admin.firstroboticscanada.org/game-links'
        })
        
        const fetchedGameTitle = TitleRes.data
        console.log(TitleRes.data)
        const fetchedGameLink = ContentRes.data
        console.log("FETCHED CONTENT",fetchedGameLink)
        this.setState({fetchedGameTitle,fetchedGameLink})
      }
      switchContentHandler = () =>{
        console.log('Was Clicked');
    }
    render(){
    return(
      <div className = "resourceBackground">
      <SideBar/>
 
    <div className="h-100 p-4">
   
      
            <GameTitle
             HeaderTitle = {this.state.fetchedGameTitle}
             content ={this.state.fetchedGameLink}/>
  
       
    </div>
    <div className = "extrapadding">

</div>
    <Footer/>
    </div>

    )
}
}
export default Game