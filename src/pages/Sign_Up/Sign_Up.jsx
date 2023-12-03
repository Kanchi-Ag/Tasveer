import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import "./sign_up.css";
import Footer from '../../components/footer/Footer';
const Sign_Up = () => {
  return (
    <div>
      <Navbar/>
      <div className='sign_text'>REGISTER YOURSELF HERE!</div>
      <div className="sign_box">
        <img src='signup.jpg' className='signup1'/>

        <div className="signup_text">
          
          <div className="signup_head">PLEASE ENTER YOUR DETAILS
        </div>
        <form className='sign_form'>
          <br/><br/>
            <label className='slb'> First Name:
            </label><br/>
            <input type="text" className='sinp'/>
            <br/>
            <br/>

            <label className='slb'> Last Name:
            </label>
            <br/>
            <input type="text" className='sinp' />
            <br/><br/>
            <label className='slb'>Email Id:</label>
            <br/>

            <input type="email" className='sinp' />
            <br/><br/>
            <label className='slb'>Password:</label>
            <br/>

            <input type="text" className='sinp'/>
            <br/><br/>
            <label className='slb'>Phone Number:
            </label>
            <br/>

            <input type="text" className='sinp'/>
            <br/><br/>
            <label className='slb'>Message</label>
            <br/>

            <input type="text" className='sinp2' />
            <br/>
            <br/>
            <button className='si_sub'>Submit</button>
            </form>
            


        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Sign_Up
