import React, { useEffect } from 'react'
import Navbar from '../CommonComponents/Navbar'
import Home from '../Components/StratProject/Home'
import WhyUs from '../Components/StratProject/WhyUs'
import QuickStart from '../Components/StratProject/QuickStart'
import Footer from '../CommonComponents/Footer'

const StartProjects = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    
    <Navbar/>
    <Home/>
    <WhyUs/>
    <QuickStart/>
    <Footer/>
    </>
  )
}

export default StartProjects