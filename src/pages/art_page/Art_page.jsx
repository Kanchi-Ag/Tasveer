import React from 'react'
import "./art_page.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer';
const Art_page = () => {
  return (
    <div>
      <Navbar/>
      <div className="container_art1">
        <img src='art1.jpg' className='art_pic1'/>
        <img src='art2.jpg' className='art_pic2'/>
        <img src='art3.jpg'className='art_pic3'/>
      </div>
      <div className="container_art2">
        <img src='art4.jpg' className='art_pic4'/>
        <img src='art5.jpg' className='art_pic5'/>
        <img src='art6.jpg'className='art_pic6'/>
      </div>
      <div className="container_art3">
        <img src='art7.jpg' className='art_pic7'/>
        <img src='art8.jpg' className='art_pic8'/>
        <img src='art9.jpg'className='art_pic9'/>
      </div>
      <div className="container_art4">
        <img src='art10.jpg' className='art_pic10'/>
        <img src='art11.jpg' className='art_pic11'/>
        <img src='art12.jpg'className='art_pic12'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Art_page
