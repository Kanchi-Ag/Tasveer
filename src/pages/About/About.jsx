import React from 'react'
import './about.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
  

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="about_text1">
        ABOUT US</div>
        <hr className='line'></hr>
      
      <div className="about_container">
      <img src='photographer3.jpg' className='photographer_img'/>
        <div className="about_text2">
         
         John Michael, a talented photographer who specializes in capturing beautiful and candid moments through his lens. With a passion for storytelling, John has honed his skills over the years to become an expert in portrait and lifestyle photography.
         <br/><br/>John has an innate ability to make his clients feel comfortable in front of the camera, allowing him to capture genuine emotions and create stunning images that tell a unique story. His attention to detail and use of lighting techniques help to create images that are both beautiful and timeless.
         <br/> <br/>Whether it's a family portrait, a couple's session or a commercial shoot, John is dedicated to delivering high-quality work that exceeds his clients' expectations. His portfolio showcases a wide range of work, from natural and organic lifestyle portraits to editorial fashion shoots.
         <br/><br/>If you're looking for a photographer who can capture the essence of a moment and turn it into a beautiful memory, John is the perfect choice.


         

         
        </div>
        
         
        </div>
        <Footer/>
      </div>
    
  )
}

export default About
