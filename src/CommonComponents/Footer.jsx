import React from 'react'
import logo from '..//assets/logo.png'
import { Link } from 'react-router-dom'



const Footer = () => {
 
    return (
        <>


            <footer class="bg-white rounded-lg shadow  m-4">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a  class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} class="h-20" alt="Flowbite Logo" />
                         
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
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
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center ">© 2024 <a href="" class="hover:underline text-green-500 ">Doc-Labz</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </>
    )
}

export default Footer