import React from 'react'


import ContactContent from '../components/ContactContent'
function ContactTitle (props){
    console.log("props",props)
    const {titles, content} =props
    console.log("titlesS", titles)
    console.log("content", content)

    //props from app.js
   

   return(
         
        <div className = "Commitment">
 {titles.map(title =>{
         const {id}= title
         console.log("id", id) 

        const relevantsignupcontent= content.filter(content =>content.contact_name?.id ===id)
        
    console.log("MAIN WARNING", relevantsignupcontent)
        return(
        
            <ContactContent
             name = {title.name}
              contentss = {relevantsignupcontent}  
              />
        )

    })}
</div>
   )
}




        

export default ContactTitle;