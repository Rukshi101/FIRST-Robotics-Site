
import React from 'react'
import '../App.css'


import SafetyContent from './SafetyContent'
function Safety (props){
    console.log("props",props)
    const {safetytitle, safetycontent} =props
    console.log("safetytitleS", safetytitle)
    console.log("safetycontent", safetycontent)

    //props from app.js
   

   return(
         
    <div className = "Commitment ResourceCards">
    <h1 className = "ResourceTitle">
        Safety
    </h1>
 {safetytitle.map(title =>{
         const {id}= title
         console.log("id", id) 

        const relevantsignupcontent= safetycontent.filter(safetycontent =>safetycontent.safetytitle?.id ===id)
        
    console.log("MAIN WARNING", relevantsignupcontent)
        return(
        
            <SafetyContent
             name = {title.name}
              contentss = {relevantsignupcontent}  
              />
        )

    })}
</div>
   )
}



        

export default Safety;