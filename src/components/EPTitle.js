import React from 'react'

import EPContent from '../components/EPContent'
function EPTitle (props){
    console.log("props",props)
    const {HeaderTitle, content} =props
    console.log("HeaderTitleS", HeaderTitle)
    console.log("content", content)

    //props from app.js
   

   return(
         
        <div className = "Commitment ResourceCards">
            <h1 className = "ResourceTitle">
                Electrical and Programming Resources
            </h1>
 {HeaderTitle.map(title =>{
         const {id}= title
         console.log("id", id) 

        const relevantsignupcontent= content.filter(content =>content.ep_title?.id ===id)
        
    console.log("MAIN WARNING", relevantsignupcontent)
        return(
        
            <EPContent
             name = {title.name}
              contentss = {relevantsignupcontent}  
              />
        )

    })}
</div>
   )
}




        

export default EPTitle;