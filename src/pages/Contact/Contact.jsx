import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer';
import "./contact.css"
const Contact = () => {
    return (
    <div>
      <Navbar/>
      <div className="cont_head">CONTACT US HERE!
      </div>
      <div className="cont_box">
        <img src='contact2.jpg' className='contact_img'/>
        <div className="flex_cont">
          <div className="contact_tex">
            Enter your details here
          </div>
          <hr className='cont_line'></hr>

          <p id='para'>
            For inquiries about sessions and pricing fill out the form and someone will get back to you.</p>

          <form className='form_cont'>
            <br/><br/>
            <label className='label_cont'> NAME
            </label>
            <br/>
            <input type='text' className='input_cont'/>

            <br/><br/>
            <label className='label_cont'> E-MAIL
            </label>
            <br/>
            <input type='text' className='input_cont'/>

            <br/><br/>
            <label className='label_cont'> CONTACT
            </label>
            <br/>
            <input type='text' className='input_cont'/>

            <br/><br/>
            <label className='label_cont'> MESSAGE
            </label>
            <br/>
            <input type='text' className='input_msg'/>
           
          </form>
          <br/><br/><br/>
          <button id='btn_form'> Submit </button>
          
          

        </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Contact
