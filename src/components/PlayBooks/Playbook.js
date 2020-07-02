import React,{Component} from 'react'
import '../../App.css'
import axios from 'axios';
import SideBar from '../../components/SideBar'
import Footer from '../../components/Footer'

import PlaybookTitle from '../../components/PlayBooks/PlaybookTitle'


const fetchedPlayBookTitle = [
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
  const fetchedPlayBookContent = [
    {
    id:1, text:"loremaskjd ijasdnoasndoinasdonasodnosnadoansd", title : fetchedPlayBookTitle[0]
  
    },
    {
      id:2, text:"skdfmoijasdnoasndoinasdonasodnosnadoansd",  title : fetchedPlayBookTitle[1]
      },
      {
        id:3, text:"loxndfjoasndoindfgasdonasodnosnadoansd",  title : fetchedPlayBookTitle[2]
        },
        {
            id:4, text:"loxndfjoasndoinasdonasodnosnadoansd",  title : fetchedPlayBookTitle[3]
            }
  ]
 class Playbook extends Component{
state = {
    fetchedPlayBookContent,
    fetchedPlayBookTitle
}
   

    async componentDidMount(){

      
        const TitleRes = await axios({
          method:'GET',
          url:'http://localhost:1337/play-book-titles'
        })
        const ContentRes = await axios({
          method:'GET',
          url:'http://localhost:1337/play-book-contents'
        })
        
        const fetchedPlayBookTitle = TitleRes.data
        console.log(TitleRes.data)
        const fetchedPlayBookContent = ContentRes.data
        console.log("FETCHED CONTENT",fetchedPlayBookContent)
        this.setState({fetchedPlayBookTitle,fetchedPlayBookContent})
      }
      switchContentHandler = () =>{
        console.log('Was Clicked');
    }
    render(){
    return(
      <div className = "resourceBackground">
      <SideBar/>
 
    <div className="h-100 p-4">
      
        <p>
            <PlaybookTitle
             HeaderTitle = {this.state.fetchedPlayBookTitle}
             content ={this.state.fetchedPlayBookContent}/>
            
        </p>
       
    </div>
    <Footer/>
    </div>

    )
}
}
export default Playbook