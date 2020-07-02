import React from 'react'

import ProjectLink from './ProjectLink'
function ProjectImage (props){
    console.log("props",props)
    const {titles, image} =props
    console.log("TITLES WARNING", titles)
    console.log("image", image)


   

   return(
         
        <div className = "Commitment">
 {titles.map(title =>{
         const {id}= title
         console.log("id", id) 

        const relevantimage= image.filter(image =>image.imgFile?.id ===id)
        
    console.log("MAIN WARNING", relevantimage)
        return(
        
            <ProjectLink
             name = {title.name}
              imagess = {relevantimage}  
              />
        )

    })}
</div>
   )
}



        

export default ProjectImage;