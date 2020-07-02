import React from 'react'

import TitleDetail from './TitleDetail'
function Commitment (props){
    console.log("props",props)
    const {commitment_title, content} =props
    console.log("WARNING", commitment_title)
    
    //props from app.js
   

   return(
       
        <div className = "Commitment CommitmentTitle">
                
              <h1>OUR COMMITMENT</h1>
            <div className = "CommitmentHeader">
             
               </div>
 {commitment_title.map(title =>{
         const {id}= title
         console.log("id", id)

        const relevantContent= content.filter(content =>content.commitment_title?.id ===id)
        return(
            
         
            <TitleDetail
             name = {title.name}
              contents = {relevantContent}
              />
   
        )

    })}
</div>
   )
}




        

export default Commitment;