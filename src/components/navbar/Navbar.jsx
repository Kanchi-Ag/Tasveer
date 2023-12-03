import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../navbar.css'
import Modal from '../../pages/Modal/Modal';

const Navbar = () => {
    const[openModal , setOpenModal]=useState(false);
    
    const navigate = useNavigate();
    const handlePortfolio = () => {
        navigate("/portfolio");

    }
    const handleServices = () => {
        navigate("/services");
    }
    const handleAbout = () => {
        navigate("/about");
    }
   
    const handleContact = () => {
        navigate("/contact");
    }
    const handleLogin = () => {
        navigate("/modal");
    }
    return (

        <div>

            <nav className='Navbar'>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
                <div className="navbar_logo">TASVEER</div>
                <ul className='navbar_list'>

                    <li className='portfolio'><a href='/portfolio'>Portfolio</a></li>
                    <li className='about'><a href='/about'>About</a></li>
                    <li className='services'><a href='/services'>Services</a></li>
                    
                    <li className='contact'><a href='/contact'>Contact</a></li>
                    {/* <li className='log in'><a href='/login'>log in</a></li> */}
                    <li className='log in'><button className='btn_log' onClick={()=>setOpenModal(true)}>LogIn</button></li>
                    <Modal open={openModal}/>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
