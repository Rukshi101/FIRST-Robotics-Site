import React from 'react'

import TitleDetail from './TitleDetail'
function Commitment (props){
    console.log("props",props)
    const {commitment_title, content} =props
    console.log("WARNING", commitment_title)
    
    //props from app.js
   

   return(
       
        <div className = "Commitment CommitmentTitle">
                
              <h1 className = "">OUR COMMITMENT</h1>
          <div className = "hrbackground">
       <hr className = "forwardhr abouthr " width= "30%" height="2px"  color ="white"/>
       
       </div>
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