import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import "./commercial_page.css";
import Footer from '../../components/footer/Footer';
const Commercial_page = () => {
  return (
    <div>
        <Navbar/>
      <div className="comm_head">COMMERCIALS</div>
      <div className="comm_cont1">
        <img src='comm1.jpg' className='comm_img1'/>
        <img src='comm2.jpg' className='comm_img2'/>
        <img src='comm3.jpg' className='comm_img3'/>
      </div>

      <div className="comm_cont2">
        <img src='comm4.jpg' className='comm_img4'/>
        <img src='comm5.jpg' className='comm_img5'/>
        <img src='comm6.jpg' className='comm_img6'/>


      </div>
      <div className="comm_cont3">
        <img src='comm7.jpg' className='comm_img7'/>
        <img src='comm8.jpg' className='comm_img8'/>
        <img src='comm9.jpg' className='comm_img9'/>

      </div>
      <div className="comm_cont4">
        <img src='comm10.jpg' className='comm_img10'/>
        <img src='comm11.jpg' className='comm_img11'/>
        <img src='comm12.jpg' className='comm_img12'/>

      </div>
      <div className="comm_cont5">
        <img src='comm13.jpg' className='comm_img13'/>
        <img src='comm14.jpg' className='comm_img14'/>
        <img src='comm15.jpg' className='comm_img15'/>

      </div>
      <Footer/>
    </div>
  )
}

export default Commercial_page
