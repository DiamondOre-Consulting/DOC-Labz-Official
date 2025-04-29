import React, { useEffect } from 'react'
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
import Testimonial from '../Components/Testimonial'
import WhyChooseUs from '../Components/WhyChooseUs'
import Faq from '../Components/Faq'
import OurBestWork from '../Components/OurBestWork'

const MainPage = ({language , setLanguage}) => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  console.log("console.log(",language)
  return (
    <div className=''>
      {/* <Navbar language={language} setLanguage={setLanguage}/> */}
     
       <Hero2 language={language} setLanguage={setLanguage}/>
       <WhoWeAre/>
       <Services language={language} setLanguage={setLanguage}/>
     
      <WhyChooseUs/>
       <Teachnologies/>
       {/* <OurWork/> */}
       <WorkProcess/>
    <OurBestWork/>
       <ContactUs/>
       <Testimonial/>
       <Faq/>
       {/* <Footer/> */}
        
    </div>
  )
}

export default MainPage