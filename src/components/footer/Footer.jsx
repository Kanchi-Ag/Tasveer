import React from 'react'
import './footer.css'
import { FaFacebookF, FaTwitter} from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <div>
      <div className="Flists">
        
        <ul className='Flist'>
            <li className='list_item'><FaFacebookF/></li>
         </ul>
         <ul className='Flist'>
            <li className='list_item'><BsInstagram/></li>
         </ul>
         <ul className='Flist'>
            <li className='list_item'>
               <FaTwitter/>
            </li>
         </ul>
         
      </div>
        <div className='copy_div'>
            <ul className='copy'>
            <li className='list_copy'>Copyright © 2023 Tasveer</li>
        </ul></div>
    </div>
  )
}

export default Footer
