import React from 'react'

import {Carousel} from '3d-react-carousal'
let slides = [
<div class = "testimonialSlide" alt = "1">
    
    <img src = {require("../images/Malavya.jpg")} alt=""/>
    <h1>Student</h1>
    <p>FIRST definitely makes me feel empowered, not just as a student interested in building robots, but as a human being.</p>
</div>,
<div class = "testimonialSlide" alt = "2">
    
    <img src = {require("../images/Malavya.jpg")} alt=""/>
    <h1>Mentor</h1>
    <p>FIRST definitely makes me feel empowered, not just as a student interested in building robots, but as a human being.</p>
</div>,
<div class = "testimonialSlide" alt = "3">
    
    <img src = {require("../images/Malavya.jpg")} alt=""/>
    <h1>Educator</h1>
    <p>FIRST definitely makes me feel empowered, not just as a student interested in building robots, but as a human being.</p>
</div>,
<div class = "testimonialSlide" alt = "4">
    
    <img src = {require("../images/Malavya.jpg")} alt=""/>
    <h1>Student</h1>
    <p>FIRST definitely makes me feel empowered, not just as a student interested in building robots, but as a human being.</p>
</div>,
<div class = "testimonialSlide" alt = "5">
    
    <img src = {require("../images/Malavya.jpg")} alt=""/>
    <h1>Student</h1>
    <p>FIRST definitely makes me feel empowered, not just as a student interested in building robots, but as a human being.</p>
</div>
    
]
function Testimonial (props){
    return (
<div className = "Testimonial">

    <h1 className = "TestimonialSectionTitle">FIRST COMMUNITY</h1>
    
    <h2> Hear what educators, alumni and Student say about FIRST!</h2>
        <Carousel slides = {slides} autoplay = {true} interval = {10000}/>
</div>

    )
}

export default Testimonial