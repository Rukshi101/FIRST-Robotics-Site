import React from 'react'

import {Carousel} from '3d-react-carousal'
let slides = [
<div class = "testimonialSlide" alt = "1">
    
    
    <h1>Alumni</h1>
    <p>I am constantly problem-solving, double-checking, and thinking critically in order to get answers out of the politicians that come on the show. I also spend a lot of time networking with various sources -- something else that I first learned with 1305.</p>
</div>,
<div class = "testimonialSlide" alt = "2">
    
    
    <h1>Mentor</h1>
    <p>FIRST definitely makes me feel empowered, not just as a student interested in building robots, but as a human being.</p>
    
</div>,
<div class = "testimonialSlide" alt = "3">
    
    
    <h1>Educator</h1>
    <p>I have been involved in coaching sports throughout my 30 year tenure as teacher at UMEI and have never experienced a culture of sharing and openness between teams like I have enjoyed with First Robotics.</p>
</div>,
<div class = "testimonialSlide" alt = "4">
    
    
    <h1>Student</h1>
    <p>FIRST definitely makes me feel empowered, not just as a student interested in building robots, but as a human being.</p>
</div>,
<div class = "testimonialSlide" alt = "5">
    
    
    <h1>Student</h1>
    <p>FIRST definitely makes me feel empowered, not just as a student interested in building robots, but as a human being.</p>
</div>
    
]
function Testimonial (props){
    return (
<div className = "Testimonial">

    <h1 className = "TestimonialSectionTitle">OUR COMMUNITY</h1>
    
    <h2> Hear what educators, alumni and Student say about <em className = "FIRST">FIRST! </em></h2>
        <Carousel slides = {slides} autoplay = {true} interval = {10000}/>
</div>

    )
}

export default Testimonial