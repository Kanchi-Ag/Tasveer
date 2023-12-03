import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import "./family.css"
const Family = () => {
  return (
    <div>
      <Navbar/>
      <div className="container_fam1">
        <img src='family1.jpg' className='fam_pic1'/>
        <img src='family2.jpg' className='fam_pic2'/>
        <img src='family3.jpg'className='fam_pic3'/>
      </div>
      <div className="container_fam2">
        <img src='family5.jpg' className='fam_pic5'/>
        <img src='family6.jpg' className='fam_pic6'/>
        <img src='family7.jpg'className='fam_pic7'/>
      </div>
      <div className="container_fam3">
        <img src='family8.jpg' className='fam_pic8'/>
        <img src='family9.jpg' className='fam_pic9'/>
        <img src='family10.jpg'className='fam_pic10'/>
      </div>
      <div className="container_fam4">
        <img src='family11.jpg' className='fam_pic11'/>
        <img src='family12.jpg' className='fam_pic12'/>
        <img src='family13.jpg' className='fam_pic13'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Family
