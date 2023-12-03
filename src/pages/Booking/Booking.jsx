import React from 'react'
import "./booking.css"

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
const Booking = () => {
  return (


    <div>
      <Navbar/>
      <div className="page_heading1">MAKE YOUR BOOKINGS HERE!</div>
        <div className="page_heading2">
          BOOK HERE FOR YOUR BIG DAY </div>

          <div className="main_box">

          <img src='booking_img.jpg' className='booking_img'></img>
          
            <div className="booking_text">
              <div className="book_head">Enter the  your details here</div>
              <hr className='booking_line'></hr>
              <form className='form_book'>
                <br/>
                <br/>

                

                <label className='label_book'>From Date : </label>
                <br/>
                <br/>
                <input type='date' name="date" className='input_book' />
                <br/>
                <br/>

                <label className='label_book' >To Date : </label>
                <br/>
                <br/>
                
                <input type='date' id="from" name="date" className='input_book' />
                <br/>
                <br/>
                <label className='label_book'  >From Time : </label>
                <br/>
                <br/>
                
                <input   type='time' name="time" className='input_book' />

                <br/>
                <br/>
                <label className='label_book' >To Time : </label>
                <br/>
                <br/>
                
                <input type='time' name="time" className='input_book'/>
                <br/>
                <br/>
              
                 
                <button onclick="myFunction()" className='submit'>Pay Now
                </button>
                {/* correct this , make an handle click function and show a message of payment done */}
                 


                
              
              </form>
              <p className='statement'>Already have an account?</p>
              <a href='/login' className='login'>Login</a>
            </div>

            
            <br/> <br/>
     </div>
      <Footer/>
    </div>
  )
}

export default Booking
