import React from "react";
import logo from "..//assets/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";
import { CiPhone } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <section class="py-10 bg-white sm:pt-16 lg:pt-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-y-12 gap-x-8 xl:gap-x-12">
            <div class="col-span-2 md:col-span-4 xl:pr-8">
              <img class="w-auto h-20" src={logo} alt="" />

              <p class="text-xs leading-relaxed text-gray-600 ">
                Doc-Labz, a dynamic IT consulting firm where innovation and
                excellence converge. Our company boasts of a dedicated team of
                whiz kids who are committed to delivering unparalleled Customer
                Satisfaction.
              </p>

              <Link
                to={"/book-meeting"}
                class="inline-flex items-center  justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-color1 rounded-md  mt-7"
              >
                <svg
                  class="w-6 h-6 pr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Book Meeting
              </Link>
            </div>

            <div class="lg:col-span-2">
              <p class="text-base font-semibold text-gray-900">Support</p>

              <ul class="mt-6 space-y-5">
                <Link to={"/"}>
                  <a
                    title=""
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    Home
                  </a>
                </Link>

                <li>
                  <Link
                    to={"/about-us"}
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/contact-us"}
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link to={"/privacy-policy"}>
                    <a
                      title=""
                      class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                    >
                      Privacy Policy
                    </a>
                  </Link>
                </li>

                <li>
                  <Link to={"/terms-and-conditions"}>
                    <a
                      title=""
                      class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                    >
                      Terms & Condition
                    </a>
                  </Link>
                </li>

                {/* <li>
                  <a
                    href="#"
                    title=""
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    Privacy Policy
                  </a>
                </li> */}
              </ul>
            </div>

            <div class="lg:col-span-2">
              <p class="text-base font-semibold text-gray-900">Services</p>

              <ul class="mt-6 space-y-5">
                <li>
                  <Link
                    to={"/services/2"}
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    WebSite Design
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/category-service/social-media-management"}
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    Social Media Management
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/services/11"}
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    E-Commerce Solutions
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/services/13"}
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    WordPress Development
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/services/14"}
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    Shopify Development
                  </Link>
                </li>

                {/* <li>
                  <Link
                    to={"/services/3"}
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    SEO
                  </Link>
                </li> */}

                <li>
                  <Link
                    to={"/services/16"}
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    Web/Vps Hosting
                  </Link>
                </li>
              </ul>
            </div>

            <div class="lg:col-span-2">
              <p class="text-base font-semibold text-gray-900">Get In Touch</p>

              <ul class="mt-6 space-y-5">
                <li>
                  <a
                    href="tel:+917838738916"
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    <CiPhone className="text-xl mr-1" />
                    +91 7838738916
                  </a>

                  <a
                    href="tel:+918449625310"
                    class="flex text-sm ml-6 text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    +91 8449625310
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    <FaRegEnvelope className="text-xl mr-2 text-gray-400" />
                    tech@doclabz.com
                  </a>
                </li>

                <li className="flex ">
                  <IoLocationOutline className="text-5xl mr-2" />
                  <a
                    href="#"
                    title=""
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-color1 focus:text-orange-600"
                  >
                    B-127, Second Floor, B Block, Sector 63, Noida, Uttar
                    Pradesh 201301
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr class="mt-16 mb-10 border-gray-200" />

          <div class="sm:flex sm:items-center sm:justify-between">
            <p class="text-sm text-gray-600">
              © Copyright 2024, All Rights Reserved by DocLabz
            </p>

            <ul class="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
              {/* <li>
                <a
                  href="#"
                  title=""
                  class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                >
                  <svg
                    class="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                >
                  <svg
                    class="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
              </li> */}

              <li>
                <a
                  href="https://www.instagram.com/doc_labz/?igsh=YzBsY25wZWM1aXNp#"
                  target="_blank"
                  class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                >
                  <svg
                    class="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                  </svg>
                </a>
              </li>

              {/* <li>
                <a
                  href="#"
                  title=""
                  class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                >
                  <svg
                    class="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </section>
      {/* <footer class="bg-white rounded-lg shadow  m-4">
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
            </footer> */}
    </>
  );
};

export default Footer;
