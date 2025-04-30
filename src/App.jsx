import { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartProjects from "./Pages/StartProjects";
import translate from 'translate';
import { FaArrowDown } from "react-icons/fa";
import WhomWeServer from "./Pages/WhomWeServer";
import Navbar from "./CommonComponents/Navbar";
import Footer from "./CommonComponents/Footer";
import AboutUs from "./Pages/AboutUs";
import ContactusPage from "./Pages/ContactusPage";
import ServicePage from "./Pages/ServicePage";
import CalendlyButton from "./Components/CalendlyButton";
import OurPortfolio from "./Pages/OurPortfolio";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  const [language, setLanguage] = useState("en");

  const translateAllText = async (newLang) => {
    const body = document.querySelector("body");
    const walker = document.createTreeWalker(
      body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    let node;
    while ((node = walker.nextNode())) {
      if (
        !node.parentElement.closest("[data-no-translate]") &&
        node.nodeValue.trim() !== ""
      ) {
        if (newLang === "en") {
          node.nodeValue = node.originalText || node.nodeValue;
        } else {
          const translatedText = await translate(node.nodeValue, {
            from: "en",
            to: newLang,
          });
          if (!node.originalText) node.originalText = node.nodeValue;
          node.nodeValue = translatedText;
        }
      }
    }
  };

  useEffect(() => {
    translateAllText(language);
    
  }, [language]);


  const handleScrollDown = () => {
    window.scrollBy({
      top: 500, 
      behavior: "smooth",
    });
  };



  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route setLanguage={setLanguage} language={language} path="/">
            <Route
              index
              element={<MainPage language={language} setLanguage={setLanguage} />}
            />
            <Route
          
              path="/start/project"
              element={<StartProjects language={language} setLanguage={setLanguage} />}
            />

            <Route path="/whom-we-serve" element={<WhomWeServer/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/contact-us" element={<ContactusPage/>}/>
            <Route path="/services/:serviceId" element={<ServicePage/>}/>
      <Route path='/book-meeting' element={<CalendlyButton/>}/>
      <Route path="/our-portfolio"element={<OurPortfolio/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          </Route>
        </Routes>
        <Footer/>
      </Router>


      <div  onClick={handleScrollDown} className=" cursor-pointer fixed bottom-10 right-10 bg-white rounded-full shadow-xl p-6 text-gray-700 animate-bounce">
      <FaArrowDown   />
      </div>
    </>
  );
}

export default App;
