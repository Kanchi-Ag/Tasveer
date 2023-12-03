import React from 'react'
import "./wedding_page.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer"
const Wedding_page = () => {
  return (
    <div>
      <Navbar/>
      <div className="wed_head">WEDDING</div>
      <div className="container_wed1">
        <img src="wedding2.jpg" className='wed2'/>
        <img src='wedding3.jpg' className='wed3'/>
        <img src='wedding4.jpg' className='wed4'/>
      </div>

      <div className="container_wed2">
        <img src="wedding5.jpg" className='wed5'/>
        <img src='wedding6.jpg' className='wed6'/>
        <img src='wedding7.jpg' className='wed7'/>
      </div>

      <div className="container_wed3">
        <img src="wedding9.jpg" className='wed9'/>
        <img src='wedding8.jpg' className='wed8'/>
        <img src='wedding10.jpg' className='wed10'/>
      </div>

      <div className="container_wed4">
        <img src="wedding11.jpg" className='wed11'/>
        <img src='wedding12.jpg' className='wed12'/>
        <img src='wedding13.jpg' className='wed13'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Wedding_page
