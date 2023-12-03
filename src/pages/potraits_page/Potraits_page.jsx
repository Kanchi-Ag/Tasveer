import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import './potraits_page.css'
import Footer from '../../components/footer/Footer';

const Potraits_page = () => {
  return (
    <div>
      <Navbar/>
      <div className="port_head">PORTRAITS</div>


      <div className="container_pot1">
        <img src='portait1.jpg' className='port1'/>
        <img src='portrait2.jpg' className='port2'/>
        <img src='portrait3.jpg' className='port3'/>

        </div>

        <div className="container_pot2">
        <img src='portrait4.jpg' className='port4'/>
        <img src='portrait5.jpg' className='port5'/>
        <img src='portrait6.jpg' className='port6'/>
        
        </div>

        <div className="container_pot3">
        <img src='portrait7.jpg' className='port7'/>
        <img src='portrait8.jpg' className='port8'/>
        <img src='portrait9.jpg' className='port9'/>
        
        </div>

        <div className="container_pot4">
        <img src='portrait10.jpg' className='port10'/>
        <img src='portrait11.jpg' className='port11'/>
        <img src='portrait12.jpg' className='port12'/>
        
        </div>
        <div className="container_pot5">
        <img src='portrait13.jpg' className='port13'/>
        <img src='portrait14.jpg' className='port14'/>
        <img src='portrait15.jpg' className='port15'/>
        
        </div>


        

        
      <Footer/>
    </div>
  )
}

export default Potraits_page


    