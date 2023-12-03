import React from "react";
import './header.css'

const Header = () => {
  return (
    <div>
        <div className="header">
        
         <img className="header_potrait" src="./potrait1.jpg"></img> 
         <div className="box1">
            <div className="text1">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital@1&family=Dancing+Script&family=Josefin+Sans:wght@300&family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
              John Michael's
            </div>
            <div className="text2">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Dancing+Script&family=Josefin+Sans:wght@300&family=Montserrat:wght@300&display=swap" rel="stylesheet"/>

              PHOTOGRAPHY SHOP
            </div>
            <br/> <br/> <br/> <br/>
            <a href="/services" className="book_services">Book Now</a>
         </div>


        </div>
        
      
    </div>
  )
}

export default Header
