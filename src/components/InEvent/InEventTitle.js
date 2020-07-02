import React from 'react'

import InEventContent from '../../components/InEvent/InEventContent'
function InEventTitle (props){
    console.log("props",props)
    const {HeaderTitle, content} =props
    console.log("HeaderTitleS", HeaderTitle)
    console.log("content", content)

    //props from app.js
   

   return(
         
        <div className = "Commitment">
 {HeaderTitle.map(title =>{
         const {id}= title
         console.log("id", id) 

        const relevantcontent= content.filter(content =>content.in_event_title?.id ===id)
        
    console.log("MAIN WARNING", relevantcontent)
        return(
        
            <InEventContent
             name = {title.name}
              contentss = {relevantcontent}  
              />
        )

    })}
</div>
   )
}



        

export default InEventTitle;