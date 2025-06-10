import React, { useEffect } from "react";
import Hero from "../Components/Hero";

import Navbar from "../CommonComponents/Navbar";
import Hero2 from "../Components/Hero2";
import Services from "../Components/Services";
import Teachnologies from "../Components/Teachnologies";
import OurWork from "../Components/OurWork";
import WorkProcess from "../Components/WorkProcess";
import ContactUs from "../Components/ContactUs";
import WhoWeAre from "../Components/WhoWeAre";
import Footer from "../CommonComponents/Footer";
import Testimonial from "../Components/Testimonial";
import WhyChooseUs from "../Components/WhyChooseUs";
import Faq from "../Components/Faq";
import OurBestWork from "../Components/OurBestWork";
import OurProducts from "../Components/OurProducts";
import OurClients from "../Components/OurClients";
import HowWeCanHelpYou from "../Components/HowWeCanHelpYou";
import SolutionForBusineess from "../Components/SolutionForBusiness";

const MainPage = ({ language, setLanguage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("console.log(", language);
  return (
    <div className="">
      {/* <Navbar language={language} setLanguage={setLanguage}/> */}

      <Hero2 language={language} setLanguage={setLanguage} />
      <OurBestWork language={language} setLanguage={setLanguage} />
      <SolutionForBusineess />
      <OurClients language={language} setLanguage={setLanguage} />
      <WhoWeAre language={language} setLanguage={setLanguage} />
      <Services language={language} setLanguage={setLanguage} />
      <HowWeCanHelpYou />
      <WhyChooseUs language={language} setLanguage={setLanguage} />
      <Teachnologies language={language} setLanguage={setLanguage} />
      {/* <OurWork/> */}
      <WorkProcess language={language} setLanguage={setLanguage} />

      <ContactUs language={language} setLanguage={setLanguage} />
      <Testimonial language={language} setLanguage={setLanguage} />
      <Faq />

      {/* <Footer/> */}
    </div>
  );
};

export default MainPage;
