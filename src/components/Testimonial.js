import React from 'react'

import {Carousel} from '3d-react-carousal'
let slides = [
    <div class = "testimonialSlide" alt = "1">
    
    
    <h1>
        "I hope we make good role models for these kids," she said. "I really want them to know that this is completely attainable for them. There's no reason for First Nations or Indigenous students [not] to be in STEM." "</h1>
    <p>Mary Pangowish - (5672)</p>
</div>,
<div class = "testimonialSlide" alt = "2">
    
    
    <h1>"I am constantly problem-solving, double-checking, and thinking critically in order to get answers out of the politicians that come on the show. I also spend a lot of time networking with various sources -- something else that I first learned with 1305."</h1>
    <p>Alumni - Emily Haws (1305)</p>
</div>,

<div class = "testimonialSlide" alt = "3">
    
    
    <h1>"I have been involved in coaching sports throughout my 30 year tenure as teacher at UMEI and have never experienced a culture of sharing and openness between teams like I have enjoyed with <em className = "FIRST">FIRST </em>  Robotics."</h1>
    <p>Educator - John Fittler (8081)</p>
</div>,
<div class = "testimonialSlide" alt = "4">
    
    
    <h1>
        "..looking back I cannot believe everything I have been able to accomplish along with my teammates, mentors and teachers. No matter what happens in the end, it is the skills and opportunities brought forward that are what really makes the difference.."</h1>
    <p>Student - Natasha Schartner (8081)</p>
</div>

]
function Testimonial (props){
    return (
<div className = "Testimonial">

    <h1 className = "TestimonialSectionTitle">OUR COMMUNITY</h1>
    
    <h2> Hear what educators, alumni and students say about <em className = "FIRST">FIRST! </em></h2>
        <Carousel slides = {slides} autoplay = {true} interval = {10000}/>
</div>

    )
}

export default Testimonial