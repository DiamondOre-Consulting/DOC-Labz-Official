import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
// import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { MdArrowDropDown } from "react-icons/md";
import CalendlyButton from "../Components/CalendlyButton";

const routes = [
  { name: "Home", href: "/", isActive: true },
  // { name: "Scooty", href: "/scooty", isActive: false },
  // { name: "Accessories", href: "/accessories", isActive: false },
  { name: "About", href: "/about-us", isActive: false },
  // { name: "Contact", href: "/contact", isActive: false },
];

const NavMenu = ({ routes, isOpen, setIsOpen  , language, setLanguage }) => {
  const [dropdownOpen, setDropdownOpen] = useState({
    webServices: false,
    digitalMarketing: false,
    customSoftware: false,
    ourProducts: false,
  });

  const webRef = useRef();
  const digitalRef = useRef();
  const customSoftwareRef = useRef();
  const ourProductsRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        webRef.current &&
        !webRef.current.contains(event.target) &&
        digitalRef.current &&
        !digitalRef.current.contains(event.target) &&
        customSoftwareRef.current &&
        !customSoftwareRef.current.contains(event.target) &&
        ourProductsRef.current &&
        !ourProductsRef.current.contains(event.target)
      ) {
        setDropdownOpen({
          webServices: false,
          digitalMarketing: false,
          customSoftware: false,
          ourProducts: false,
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = (type) => {
    setDropdownOpen((prev) => ({
      webServices: type === "webServices" ? !prev.webServices : false,
      digitalMarketing:
        type === "digitalMarketing" ? !prev.digitalMarketing : false,
      customSoftware: type === "customSoftware" ? !prev.customSoftware : false,
      ourProducts: type === "ourProducts" ? !prev.ourProducts : false,
    }));
  };


  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    console.log(newLang)
    setLanguage(newLang); // Update the language state
  
  };
  return (
    <ul
      className={`flex flex-col lg:flex-row lg:justify-center px-3 pt-10 lg:pt-0 lg:items-center text-3xl lg:text-base  lg:gap-3 text-[1rem] fixed z-[10000] top-20 right-0 w-[18rem] h-screen lg:static lg:h-auto  lg:w-fit lg:bg-transparent bg-white text-black transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
      }`}
      id="navbar"
    >
      {routes.map((route, i) => (
        <li key={i}>
          <Link
            onClick={() => {
              setIsOpen(false);
              routes.forEach((r) => (r.isActive = false));
              route.isActive = true;
            }}
            className={`px-2 hover:text-color1 lg:hover:text-color1 ${
              route.isActive
                ? "opacity-100 font-bold text-color1 lg:text-color1"
                : "opacity-90 hover:opacity-100"
            }`}
            to={route.href}
          >
            {route.name}
          </Link>
        </li>
      ))}
      <li className="relative" ref={webRef}>
        <button
          className="flex items-center gap-1 px-2 text-black hover:text-color1 lg:hover:text-color1"
          onMouseEnter={() => handleDropdownToggle("webServices")}
        >
          Web Services
          <MdArrowDropDown />
        </button>
        <ul
          className={`absolute z-20 lg:left-0 right-0 min-w-[13rem] lg:mt-[0.95rem] duration-500 lg:rounded-t-none lg:bg-mainRed bg-white shadow-xl border border-gray-200 rounded-md  text-black rounded-lg shadow-lg transition-transform ease-in-out ${
            dropdownOpen.webServices
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 hidden"
          }`}
          role="menu"
          onClick={() => setIsOpen(false)}
          onMouseLeave={() => handleDropdownToggle("")}
        >
          <li role="menuitem">
            <Link
              to="/services/1"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
              Web Development
            </Link>
          </li>
          <li role="menuitem">
            <Link
              to="/services/2"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
              Web Design
            </Link>
          </li>

          <li role="menuitem">
            <Link
              to="/services/7"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
              Web Maintennance
            </Link>
          </li>

          <li role="menuitem">
            <Link
              to="/services/8"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
              Web Redesign
            </Link>
          </li>
        </ul>
      </li>

      <li className="relative" ref={digitalRef}>
        <button
          className="flex items-center gap-1 px-2 text-black hover:text-color1 lg:hover:text-color1"
          onMouseEnter={() => handleDropdownToggle("digitalMarketing")}
        >
          Social Media Management
          <MdArrowDropDown />
        </button>
        <ul
          className={`absolute z-20 lg:left-0 right-0 min-w-[10rem] lg:mt-[0.95rem] duration-500 lg:rounded-t-none lg:bg-mainRed bg-white text-black rounded-lg shadow-lg transition-transform ease-in-out ${
            dropdownOpen.digitalMarketing
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 hidden"
          }`}
          role="menu"
          onClick={() => setIsOpen(false)}
          onMouseLeave={() => handleDropdownToggle("")}
        >
          {/* <li role="menuitem">
            <Link
              to="/services/3"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
              SEO
            </Link>
          </li> */}
          <li role="menuitem">
            <Link
              to="/services/4"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
              Social Media
            </Link>
          </li>

          <li role="menuitem">
            <Link
              to="/services/5"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
              Product Design
            </Link>
          </li>
          <li role="menuitem">
            <Link
              to="/services/9"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
              Blogs writing
            </Link>
          </li>
          <li role="menuitem">
            <Link
              to="/services/10"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
              Ads Management
            </Link>
          </li>
        </ul>
      </li>

      <li className="relative" ref={customSoftwareRef}>
        <button
          className="flex items-center gap-1 px-2 text-black hover:text-color1 lg:hover:text-color1"
          onMouseEnter={() => handleDropdownToggle("customSoftware")}
        >
          Custom Software
          <MdArrowDropDown />
        </button>
        <ul
          className={`absolute lg:left-0 right-0 min-w-[10rem] lg:mt-[0.95rem] duration-500 lg:rounded-t-none lg:bg-mainRed bg-white text-black rounded-lg shadow-lg transition-transform ease-in-out ${
            dropdownOpen.customSoftware
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 hidden"
          }`}
          role="menu"
          onClick={() => setIsOpen(false)}
          onMouseLeave={() => handleDropdownToggle("")}
        >
          <li role="menuitem">
            <Link
              to="/services/6"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
              ERP & CRM
            </Link>
          </li>

          {/* <li role="menuitem">
            <Link to="/ads" className="block px-4 py-3 text-sm hover:bg-gray-200">
              Ads Management
            </Link>
          </li> */}
        </ul>
      </li>

      {/* <li className="relative" ref={ourProductsRef}>
        <button
          className="flex items-center gap-1 px-2 text-black hover:text-color1 lg:hover:text-color1"
          onMouseEnter={() => handleDropdownToggle("ourProducts")}
        >
          Our Products
          <MdArrowDropDown />
        </button>
        <ul
          className={`absolute lg:left-0 right-0 min-w-[14rem] lg:mt-[0.95rem] duration-500 lg:rounded-t-none lg:bg-mainRed bg-white text-black rounded-lg shadow-lg transition-transform ease-in-out ${
            dropdownOpen.ourProducts
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 hidden"
          }`}
          role="menu"
          onClick={() => setIsOpen(false)}
          onMouseLeave={() => handleDropdownToggle("")}
        >
          <li role="menuitem">
            <Link
              to="/services/6"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
              Save Contact Keychain
            </Link>
          </li>
          <li role="menuitem">
            <Link
              to="/services/6"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
              NFC Business Card
            </Link>
          </li>

          <li role="menuitem">
            <Link
              to="/services/6"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
              NFC Smart Ring
            </Link>
          </li>

          <li>
            <Link
              to="/services/6"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
              Premium Metal NFC Business Card
            </Link>
          </li>


          <li>
            <Link
              to="/services/6"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
            QR POp-Up Sticker
            </Link>
          </li>

          <li>
            <Link
              to="/services/6"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
             Landing Page
            </Link>
          </li>


          <li>
            <Link
              to="/services/6"
              className="block px-4 py-3 text-sm hover:bg-gray-200"
            >
             Dynamic catalogue
            </Link>
          </li>





        </ul>
      </li> */}

      <Link
        to={"/contact-us"}
        className="px-2 md:hidden cursor-pointer hover:text-color1 lg:hover:text-color1"
      >
        Contact Us
      </Link>
      <div className="flex items-center" data-no-translate>
        <div className="relative">
        
          <select
               onChange={handleLanguageChange}
            className="px-2 py-1   mr-4 text-gray-900 rounded-md lg:hidden block"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            {/* <option value="mr">Marathi</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
            <option value="bn">Bengali</option>
            <option value="gu">Gujarati</option>
            <option value="pa">Punjabi</option>
            <option value="ur">Urdu</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="zh">Chinese</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="ru">Russian</option>
            <option value="it">Italian</option> */}

            {/* Add more languages here */}
          </select>
        </div>
      </div>
      
    
    </ul>
  );
};

NavMenu.propTypes = {
  routes: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const Navbar = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    console.log(newLang)
    setLanguage(newLang); // Update the language state
  
  };


  return (
    <>
      <nav>
        <div className="bg-gradient-to-r from-color1 via-color1/90 to-color1 flex px-4  flex-col  md:flex-row text-xs md:text-sm justify-between md:px-10 text-white  py-2 w-full rounded-b-4 rounded-b-[1rem]">
          <div className="flex justify-center items-center space-x-4 md:space-x-5">
            <p className="flex items-center space-x-2">
              <FaPhoneAlt />
              <a href="tel:+917838738916" className="hover:underline">
                +91 7838738916
              </a>
            </p>
            <p className="flex space-x-2 items-center ">
              <FaEnvelope />
              <a href="mailto:tech@doclabz.com" className="hover:underline">
                tech@doclabz.com
              </a>
            </p>
          </div>
          <div className="space-x-4 flex md:mt-0 mt-4 justify-center items-center">
            <Link to={"/privacy-policy"} className=" hover:underline">
              Privacy Policy
            </Link>
            <Link to={"/whom-we-serve"} className=" hover:underline">
              Whom We Serve
            </Link>
            <Link
              to={"/book-meeting"}
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              Book Meeting
            </Link>
          </div>
        </div>
      </nav>

      <nav
        className={` top-0 left-0 w-full z-[10000] py-4 bg-white text-zinc-900  ${
          isSticky ? "fixed top-0 left-0 w-full  z-20" : ""
        }`}
      >
        <div className="mx-auto bg-mainRed relative z-[100000000]">
          <div className="container relative flex lg:py-1 items-center justify-between mx-auto lg:max-w-[95%]">
            <Link to={"/"} className="absolute text-3xl font-white" href="#!">
              <img src={logo} className="w-[8rem] lg:w-[10rem]" alt="" />
            </Link>

            <div className="flex flex-row items-center p-2 ml-auto lg:flex-row-reverse">
              <Link
                to={"/contact-us"}
                className="hover:text-color1 lg:block hidden"
              >
                Contact Us
              </Link>

              <div className="flex items-center" data-no-translate>
        <div className="relative">
        
          <select
               onChange={handleLanguageChange}
            className="px-2 py-1  w-24 mr-4 text-gray-900 rounded-md lg:block hidden"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            {/* <option value="mr">Marathi</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
            <option value="bn">Bengali</option>
            <option value="gu">Gujarati</option>
            <option value="pa">Punjabi</option>
            <option value="ur">Urdu</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="zh">Chinese</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="ru">Russian</option>
            <option value="it">Italian</option> */}

            {/* Add more languages here */}
          </select>
        </div>
      </div>
              <div onClick={() => setIsOpen(false)}></div>
              <button
                className="z-20 block cursor-pointer size-10 lg:hidden"
                type="button"
                id="hamburger"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-color1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <>
                    <div className="h-0.5 w-7 bg-color1 mb-1" />
                    <div className="h-0.5 w-7 bg-color1 mb-1" />
                    <div className="h-0.5 w-7 bg-color1" />
                  </>
                )}
              </button>
              <NavMenu routes={routes} isOpen={isOpen} setIsOpen={setIsOpen} language={language} setLanguage={setLanguage} />
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
