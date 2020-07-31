import React from 'react'


function Form (props){
    return(
      
    <div className= "formSection" id = "form">
             
      
           <div className = "formarea">
        
     
        <div className = "ProjectBin">
        <div className="wrapper">
           <div className="titles">
               <h1> Questions?</h1>
          
            </div>
           <div className="form">
              
               <div className="inputfield">
                   <label for="">First Name</label>
                   <input type="text" className="input"/>
               </div>
               <div className="inputfield">
                   <label for="">Last Name</label>
                   <input type="text" className="input"/>
               </div>
               <div className="inputfield">
                   <label for="">Location</label>
                   <input type="text" className="input"/>
               </div>
               <div className="inputfield">
                   <label for="">Email </label>
                   <input type="text" className="input"/>
               </div>
               <div className="inputfield">
                   <label for="">Question?</label>
                   <textarea className= "textarea"></textarea>
               </div>
               
     
                       <div className = "row">
                       <div className= 'inputfield terms'>
                                         <label className= "check">
                       <input type = "checkbox"/>
                       <span className= "checkmark"></span>
                       </label>
                       <p className = "agreement">I understand that the personal information I provide on this form will be used as permitted by the FIRST Privacy Policy.</p>
                       </div>
               </div>
               <div className= "submitButtondiv">
                   <input type = 'submit' value = "START" className = "submitButton"/>
               </div>
           </div>
       </div>
        </div>
    </div>
     

</div>




      

    )
}

export default Form 