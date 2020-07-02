import React from 'react'
import '../App.css'

import RegistrationContent from './RegistrationContent'
function RegistrationTitle (props){
    console.log("props",props)
    const {titles, content} =props
    console.log("titlesS", titles)
    console.log("content", content)

    //props from app.js
   

   return(
         
        <div className = "Registration">
 {titles.map(title =>{
         const {id}= title
         console.log("id", id) 

        const relevantsignupcontent= content.filter(content =>content.registration_title?.id ===id)
        
    console.log("MAIN WARNING", relevantsignupcontent)
        return(
        
            <RegistrationContent
             name = {title.name}
              contentss = {relevantsignupcontent}  
              />
        )

    })}
</div>
   )
}

        

export default RegistrationTitle;