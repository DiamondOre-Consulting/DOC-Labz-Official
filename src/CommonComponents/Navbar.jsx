import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="shadow-md bg-white fixed w-full z-50 md:px-10 px-6 relative top-0 py-1 md:py-4">
            <div className="max-w-7xl mx-auto ">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div>
                            <img src={logo} alt="Logo" className="w-32 md:w-40" />
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link to={'/'} className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium relative group">
                            Home
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </Link>
                        <a href="#about" className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium relative group">
                            About
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#services" className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium relative group">
                            Services
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#contactus" className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium relative group">
                            Contact Us
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>

                        <Link to={'/start/project'} className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium relative group bg-gradient-to-r from-emerald-200 to-lime-300">
                            Start Your Project
                            {/* <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span> */}
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white">
                    <div className="px-2 items-center flex flex-col justify-cneter pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to={'/'} className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <a href="#about" className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                            About
                        </a>
                        <a href="#services" className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                            Services
                        </a>
                        <a href="#contactus" className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                            Contact
                        </a>
                        <Link to={'/start/project'} className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium relative group bg-gradient-to-r from-emerald-200 to-lime-300">
                            Start Your Project
                            {/* <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span> */}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
