import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/portfolio/Portfolio"
import Potraits_page from "./pages/potraits_page/Potraits_page"
import Wedding_page from "./pages/wedding_page/Wedding_page";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Booking from "./pages/Booking/Booking";
import Modal from "./pages/Modal/Modal";
import Family from "./pages/Family/Family";
import Commercial_page from "./pages/commercial_page/Commercial_page";
import Contact from "./pages/Contact/Contact";
import Art_page from "./pages/art_page/Art_page";
import Sign_Up from "./pages/Sign_Up/Sign_Up";


function App  () {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element ={<Home/>}/>
        <Route exact path="/portfolio" element={<Portfolio/>}/>
        <Route exact path="/portraits_page" element={<Potraits_page/>}/>
        <Route exact path="/wedding_page" element={<Wedding_page/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/booking" element={<Booking/>}/>
        <Route exact path="/modal" element={<Modal/>}/>
        <Route exact path="/family" element={<Family/>}/>
        <Route exact path="/commercial_page" element={<Commercial_page/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/art_page" element={<Art_page/>}/>
        <Route exact path="/sign_up" element={<Sign_Up/>}/>
        
        

        
      </Routes>
    </Router>
  )
}

export default App
