import React ,{ useState }from 'react'
import "./modal.css";




const Modal = ({open}) => {
 if(!open) return null
  return (
    <div>
      
      <div className="overlay1">
        <div className="modalContainer">
          <form className='form_modal'>
            
          
            <br/><br/>
            <label className='lb1'>Email</label>
            <br/>
            <input type='text'className='inp1'/> 
            <br/><br/>

            <label className='lb1'>Password</label>
            <br/>
            <input type='text' className='inp1'/>
            <br/><br/>

            <button className='btn_login'>Login
            </button>
            <br/><br/>

            <div className="txt">Don't have an account?
            
            </div>
            <br/>
            <a href='./Sign_Up' className='signup'>Sign Up</a> 
            
             
            
          </form>
          {/* <button className='btn_login'>Login
          </button>
          <div className="txt">Don't have an account?
          <button className='btn_signUp'>Sign Up
          </button>
          </div> */}

        </div>
      </div>
      
      </div>
  )
}

export default Modal