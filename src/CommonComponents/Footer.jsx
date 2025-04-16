import React from 'react'
import logo from '..//assets/logo.png'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";


const Footer = () => {
 
    return (
        <>


            <footer class="bg-white rounded-lg shadow  m-4">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a  class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} class="h-20" alt="Flowbite Logo" />
                         
                        </a>
                        <div>
                        <ul class="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                            <li>
                                <Link to={'/'} class="hover:underline me-4 md:me-6">Home</Link>
                            </li>
                            <li>
                                <a href="#about" class="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#services" class="hover:underline me-4 md:me-6">Service</a>
                            </li>
                            <li>
                                <a href="#contactus" class="hover:underline">Contact US</a>
                            </li>
                        </ul>


                        <div className="flex  my-4  space-x-4 ">
                  <div className="relative flex items-center group">

                 <a href="https://www.instagram.com/diamondoreconsulting?igsh=ZXpwZWxpc2t0YTIz" target="_blank"><FaInstagram  className="text-4xl cursor-pointer "/></a>

                    {/* <img
                      src={instalogo}
                      alt="Instagram"
                      className="cursor-pointer w-8"
                    /> */}

                    <div
                      role="tooltip"
                      className="absolute bottom-full mb-2 left-2/3 -translate-x-1/2 z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs dark:bg-gray-700"
                    >
                      DiamondOre 
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <div className="relative flex items-center group">
                  <a href="https://www.instagram.com/profile_genie_1?igsh=MW01amE5aHVwMTVpaw==" target="_blank"><FaInstagram  className="text-4xl cursor-pointer "/></a>

                    <div
                      role="tooltip"
                      className="absolute bottom-full mb-2 left-2/3 -translate-x-1/2 z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs dark:bg-gray-700"
                    >
                     Profile Genie
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>


                  <div className="relative flex items-center group">
                  <a href="https://www.instagram.com/cv_genie_?igsh=bzIwdGQ1aHp6a3Vz" target="_blank"><FaInstagram  className="text-4xl cursor-pointer "/></a>

                    <div
                      role="tooltip"
                      className="absolute bottom-full mb-2 left-2/3 -translate-x-1/2 z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs dark:bg-gray-700"
                    >
                      CV Genie 
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>


                  <div className="relative flex items-center group">
                  <a href="https://www.instagram.com/doc_labz?igsh=YzBsY25wZWM1aXNp" target="_blank"><FaInstagram  className="text-4xl cursor-pointer "/></a>

                    <div
                      role="tooltip"
                      className="absolute bottom-full mb-2 left-2/3  -translate-x-1/2 z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs dark:bg-gray-700"
                    >
                      DOC LABZ 
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>

                  <a href="https://youtube.com/@diamondore-career?si=FTT-w0fUn63CuPX3" target="_blank"><LuYoutube    className="text-4xl cursor-pointer "/></a>
                </div>

                </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center flex justify-center items-center">© 2024 <a href="" class="hover:underline text-green-500 ml-1"> Doc-Labz</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </>
    )
}

export default Footer