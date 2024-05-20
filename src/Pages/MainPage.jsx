import React from 'react'
import Hero from '../Components/Hero'

import Navbar from '../CommonComponents/Navbar'
import Hero2 from '../Components/Hero2'
import Services from '../Components/Services'
import Teachnologies from '../Components/Teachnologies'
import OurWork from '../Components/OurWork'
import WorkProcess from '../Components/WorkProcess'
import ContactUs from '../Components/ContactUs'
import WhoWeAre from '../Components/WhoWeAre'
import Footer from '../CommonComponents/Footer'

const MainPage = () => {
  return (
    <div className=''>
      <Navbar/>
       <Hero2/>
       <Services/>
       <WhoWeAre/>
       <Teachnologies/>
       <OurWork/>
       <WorkProcess/>
       <ContactUs/>
       <Footer/>
        
    </div>
  )
}

export default MainPage