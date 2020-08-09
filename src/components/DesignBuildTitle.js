import React from 'react'


import DesignContent from '../components/DesignContent'
function DesignBuildTitle (props){
    console.log("props",props)
    const {designtitle, designcontent} =props
    console.log("designtitleS", designtitle)
    console.log("designcontent", designcontent)

    //props from app.js
   

   return(
        
        <div className = "Commitment ResourceCards">
            <div>
            <hr className = "registrationhr" color = 'green' width = '310px'></hr>
           
            <h1 className = "ResourceTitle">
                Mechanical Design and Build
            </h1>
            </div>
 {designtitle.map(title =>{
         const {id}= title
         console.log("id", id) 

        const relevantsignupcontent= designcontent.filter(designcontent =>designcontent.design_title?.id ===id)
        
    console.log("MAIN WARNING", relevantsignupcontent)
        return(
            <div id = "background">
            <DesignContent
             name = {title.name}
              contentss = {relevantsignupcontent}  
              />
              </div>
        )

    })}
</div>
   )
}



        

export default DesignBuildTitle;