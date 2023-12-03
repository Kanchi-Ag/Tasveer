import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./services.css"
import Footer from '../../components/footer/Footer'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <div className="Service_Text1">SERVICES
        </div>
        <div className="Service_Container1">
          <div className="photo1">
          <div className="box_service">
            <div className="box1_text1">
              PORTRAITS
            <hr className='line1'></hr>
              
             </div>
             <div className="box1_text2">
             
             Specializing in portrait photography we provide a professional service of capturing high-quality and visually appealing portraits of individuals or groups
             <br/> <br/> 
             Cost:3$/photo
             
             </div>
             <br/> <br/> 
             <a href="/booking" className='potrait_booking'> Book Now</a>
          </div>
          </div>
          
          

        </div>

{/* Family html  */}
        <div className="Service_Container2">
          <div className="photo2">
          <div className="box_service2">
            <div className="box2_text1">
              FAMILY
            <hr className='line2'></hr>
              
             </div>
             <div className="box2_text2">
             Specializing in family photography we offer a professional service focused on capturing meaningful and memorable moments shared by families.
             <br/><br/>
             Cost: 3$/photo
             </div>
             <br/> <br/> 
             <a href="./booking" className='family_booking'> Book Now</a>
          </div>
          </div>
          
          

        </div>

        {/* Wedding html */}

        <div className="Service_Container3">
          <div className="photo3">
          <div className="box_service3">
            <div className="box3_text1">
              WEDDING
            <hr className='line3'></hr>
              
             </div>
             <div className="box3_text2">Specializing in wedding photography we offer a comprehensive service focused on capturing the significant moments, emotions, and details of a couple's special day.
             <br/><br/>
              Cost: 4$/photo
             </div>
             <br/> 
             <a href="./booking" className='wedding_booking'> Book Now</a>
          </div>
          </div>
          
          

        </div>

        {/* commercial html */}

        <div className="Service_Container4">
          <div className="photo4">
          <div className="box_service4">
            <div className="box4_text1">
              COMMERCIAL
            <hr className='line4'></hr>
              
             </div>
             <div className="box4_text2"> Specializing in commercial photography we offer a professional service focused on creating visually compelling images that effectively promote products, services, or brands.
             <br/><br/>
             Cost: 5$/photo
             </div>
             <br/>  
             <a href="./booking" className='commercial_booking'> Book Now</a>
          </div>
          </div>
          
          

        </div>
      <Footer/>
    </div>
  )
}

export default Services
