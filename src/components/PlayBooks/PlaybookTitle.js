import React from 'react'

import PlaybookContent from '../../components/PlayBooks/PlaybookContent'
function PlaybookTitle (props){
    console.log("props",props)
    const {HeaderTitle, content} =props
    console.log("HeaderTitleS", HeaderTitle)
    console.log("content", content)

    //props from app.js
   

   return(
         
    
              <div className = "Commitment ResourceCards">
    <h1 className = "ResourceTitle">
        Veteran PlayBook's
    </h1>
 {HeaderTitle.map(title =>{
         const {id}= title
         console.log("id", id) 

        const relevantcontent= content.filter(content =>content.play_book_title?.id ===id)
        
    console.log("MAIN WARNING", relevantcontent)
        return(
        
            <PlaybookContent
             name = {title.name}
              contentss = {relevantcontent}  
              />
        )

    })}
</div>
   )
}

        

export default PlaybookTitle;