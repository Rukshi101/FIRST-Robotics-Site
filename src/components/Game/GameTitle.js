import React from 'react'

import GameContent from '../../components/Game/GameContent'
function GameTitle (props){
    console.log("props",props)
    const {HeaderTitle, content} =props
    console.log("HeaderTitleS", HeaderTitle)
    console.log("content", content)

 
   

   return(
         
        <div className = "Commitment ResourceCards">
              <h1 className = "ResourceTitle">
                Challenge Resources
            </h1>
 {HeaderTitle.map(title =>{
         const {id}= title
         console.log("id", id) 

        const relevantcontent= content.filter(content =>content.game_title?.id ===id)
        
    console.log("MAIN WARNING", relevantcontent)
        return(
        
            <GameContent
             name = {title.name}
              contentss = {relevantcontent}  
              />
        )

    })}
</div>
   )
}


        

export default GameTitle;