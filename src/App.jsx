import Home from "./views/Home"
import AboutUs from "./views/AboutUs"
import Footer from "./components/Footer"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Services from "./views/Services"
import ContactUs from "./views/ContactUs"
import Booking from "./views/Booking"


function App() {

  return (
    <BrowserRouter>
    <div className="container">
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer/>
      
    </div>
    
    </BrowserRouter>
    
  )
}

export default App
