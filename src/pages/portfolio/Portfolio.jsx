import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import "./portfolio.css"
import Footer from "../../components/footer/Footer";
const Portfolio = () => {
  return (
    <div>
      <Navbar/>
      <div className="portfolio-page">PORTFOLIO</div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Dancing+Script&family=Josefin+Sans:wght@300&family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>

       <div className="portfolio_image1">
       
       <a href="/portraits_page"><div className="image1">
            <span>PORTRAITS</span>
          </div>
          </a>
        </div>

        <div className="portfolio_image2">
          <a href='/family'>
            <div className='image2'>
              <span>FAMILY</span>
            </div>

          </a>
        </div>

        <div className="portfolio_image3">
          <a href="/Wedding_page">
            <div className='image3'>
              <span>WEDDING</span>
            </div>

          </a>
        </div>

        <div className="portfolio_image4">
          <a href='/Commercial_page'>
            <div className='image4'>
              <span>COMMERCIAL</span>
            </div>

          </a>
        </div>
        <div className="portfolio_image5">
          <a href='/Art_page'>
            <div className='image5'>
              <span>ART N ARTIFACTS</span>
            </div>

          </a>
        </div>
        <Footer/>
     </div>
  )
}

export default Portfolio
