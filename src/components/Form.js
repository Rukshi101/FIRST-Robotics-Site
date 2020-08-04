import React,{Component} from 'react';
import Axios from 'axios';


class Form extends Component{

    handleSubmit(e){
        e.preventDefault();

        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const location = document.getElementById('location').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        Axios ({
            method:"POST",
            url:"http://localhost:3000/send",
            data:{
                firstname:firstname,
                lastname:lastname,
                location:location,
                email:email,
                message:message,
            }
        }).then((response)=>{
            if(response.data.msg === 'success'){
                alert("Message Sent.");
                this.resetForm()

            }
            else if(response.data.msg ==='fail'){
                alert("Message failed to send!")
            }
        })

    };

    resetForm(){
        document.getElementBytId('contact-form').reset();
    }
    render(){
        return(
      
    <div className= "formSection" id = "form">
             
      
           <div className = "formarea">
        
     
        <div className = "ProjectBin">
        <div className="wrapper">
           <div className="titles">
               <h1> Questions?</h1>
          
            </div>
            <form id = "contact-form" onSubmit = {this.handleSubmit.bind(this)} method = "POST">
           <div className="form">
              
               <div className="inputfield">
                   <label for="">First Name</label>
                   <input type="text" className="input" id = "firstname"/>
               </div>
               <div className="inputfield">
                   <label for="">Last Name</label>
                   <input type="text" className="input" id = "lastname"/>
               </div>
               <div className="inputfield">
                   <label for="">Location</label>
                   <input type="text" className="input" id = "location"/>
               </div>
               <div className="inputfield">
                   <label for="">Email </label>
                   <input type="text" className="input" id = "email"/>
               </div>
               <div className="inputfield">
                   <label for="">Question?</label>
                   <textarea className= "textarea" id = "message"></textarea>
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
                   <button type = 'submit' className = "submitButton">START</button>
               </div>
           </div>
           </form>
       </div>
        </div>
    </div>
     

</div>



        )

    }
}

export default Form;