
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
         
    <div className = "Commitment ResourceCards shifted-content-2">
    <h1 className = "ResourceTitle">
        Safety
    </h1>
    <div className = "subresources">
             
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
</div>
   )

}



        

export default Safety;