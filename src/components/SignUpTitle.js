import React from 'react'

import SignUpContent from './SignUpContent'
function SignUpTitle (props){
    console.log("props",props)
    const {signuptitle, signupcontents} =props
    console.log("SIGNUPTITLES", signuptitle)
    console.log("SIGNUPCONTENTS", signupcontents)

    //props from app.js
   

   return(
         
        <div className = "Commitment">
 {signuptitle.map(title =>{
         const {id}= title
         console.log("id", id) 

        const relevantsignupcontent= signupcontents.filter(signupcontent =>signupcontent.sign_up_title?.id ===id)
        
    console.log("MAIN WARNING", relevantsignupcontent)
        return(
        
            <SignUpContent
             name = {title.name}
              contentss = {relevantsignupcontent}  
              />
        )

    })}
</div>
   )
}




        

export default SignUpTitle;