import React from 'react'


import FirstStepsContent from '../components/FirstStepsContent'
function StepTitle (props){
    console.log("props",props)
    const {HeaderTitle, content} =props
    console.log("HeaderTitleS", HeaderTitle)
    console.log("content", content)

    //props from app.js
   

   return(
         
        <div className = "Commitment ResourceCards">
            <h1 className = "ResourceTitle">
                Rookie Resources
            </h1>
            <p className=  'registerInfo firststepdesc'>We know your first season might be a bit tough considering you've never done this before. That's why we're offering you everything you need to get started.</p>
 {HeaderTitle.map(title =>{
         const {id}= title
         console.log("id", id) 

        const relevantsignupcontent= content.filter(content =>content.first_steps_title?.id ===id)
        
    console.log("MAIN WARNING", relevantsignupcontent)
        return(
        
            <FirstStepsContent
             name = {title.name}
              contentss = {relevantsignupcontent}  
              />
        )

    })}
</div>
   )
}


        

export default StepTitle;