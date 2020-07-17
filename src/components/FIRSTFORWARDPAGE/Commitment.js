import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Commitment(props){
    return(
        <div className = "CommitmentBin">
   <h1 className = "col-sm-10 CommitmentTitle forwardcommitment">Our Commitment</h1>
   <hr className = "forwardhr abouthr" width= "40%" height="2px"  color ="white"/>
  <div className = "commitmentp">
   <p className = "commitmentDesc col-md-6">At FIRST, we are committed to creating a diverse, inclusive, and equitable community for all participants. It is imperative that our programs are accessible to all students. Because we believe that every young person should have the opportunity to become science and technology leaders.

What steps are we taking to make sure this happens? 
</p>
</div>
<p className = " commitlink">
<a className = "learnfirst" href = "firstroboticscanada.org">Learn about our commitment to EDI.<FontAwesomeIcon color = 'inherit ' icon = {['fa', 'arrow-right']}/></a>
 </p>
   </div>
)
    }
export default Commitment