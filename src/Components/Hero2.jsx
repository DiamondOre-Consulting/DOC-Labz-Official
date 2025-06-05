import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import hero2 from "..//assets/hero2.png";
import PopUpForm from "./PopUpForm";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FlipWords } from "../Components/ui/flip-words";

const Hero2 = ({ language }) => {
  const typeRef = useRef(null);
  const [showModal, setShowModal] = useState(() => {
    const isPopupShown = sessionStorage.getItem("isPopupShown");
    return !isPopupShown;
  });

  useEffect(() => {
    if (showModal) {
      sessionStorage.setItem("isPopupShown", "true");
    }
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  const words = [
    "Web Development",
    "Custom Software",
    "Social Media Managment",
    "E-Commerce Website",
    "Wordpress Development",
    "Shopify Development",
    "Search Engine Optimization",
    "Social Media Optimization",
    "Web/Vps Hosting",
  ];

  return (
    <>
      <div className="bg-color2 relative flex flex-col justify-center items-center pt-10 md:pt-20 overflow-hidden">
        <div>
          <div className="bg-color1/10 w-fit mx-auto  font-semibold rounded-md text-[0.9rem] text-color1 p-2 px-4 mb-4">
            # Bit By Bit, Building Tomorrow
          </div>
          <div className="text-3xl md:text-6xl w-full overflow-hidden flex flex-col  font-semibold  items-center text-warp justify-center space-y-2 md:space-y-6 ">
            <p className="text-center">Drive Your Business</p>
            <p className="text-center">Forward With Our Expert</p>
            <div className="flex flex-wrap justify-center">
              {/* <img
                src="https://seoc-html-v2.vercel.app/assets/img/all-images/header-pera1.png"
                alt=""
                className="h-10 md:h-20 md:block hidden"
              /> */}
              <div className="flex flex-col justify-center items-center ">
                <p className="text-color1 text-center">
                  {" "}
                  <FlipWords words={words} />{" "}
                </p>
                <img
                  className="w-full object-cover md:block hidden"
                  src="https://seoc-html-v2.vercel.app/assets/img/elements/line-img1.png"
                  alt=""
                />
              </div>
            </div>
            <p>Solutions</p>
          </div>

          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-sm px-4 md:px-0 md:max-w-xl text-center mt-10 md:mt-14  mx-auto"
          >
            Doc-Labz, a dynamic IT consulting firm where innovation and
            excellence converge. Our company boasts of a dedicated team of whiz
            kids who are committed to delivering unparalleled Customer
            Satisfaction.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex flex-col  space-y-4 md:space-y-0 md:flex-row justify-center mt-5 md:mt-10 items-center md:space-x-10  w-full"
          >
            <Link
              to={"/our-portfolio"}
              target="_blank"
              class="group relative font-semibold text-sm md:text-xl inline-flex h-12 items-center justify-center overflow-hidden  border-l-0 border-r-0 border border-2 border-t-color1 border-b-color1 bg-transparent px-4 text-color1"
            >
              <span class="relative inline-flex overflow-hidden">
                <div class="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
                  Explore More
                </div>
                <div class="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
                  Explore More
                </div>
              </span>
            </Link>

            <Link
              to={"/book-meeting"}
              class="group relative font-semibold text-sm md:text-xl  inline-flex h-12 items-center justify-center overflow-hidden  border-l-0 border-r-0 border border-2 border-t-neutral-950 border-b-neutral-950 bg-transparent px-4 text-neutral-950"
            >
              <span class="relative inline-flex overflow-hidden">
                <div class="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
                  Book Meeting
                </div>
                <div class="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
                  Book Meeting
                </div>
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-20 relative">
          <img
            className=""
            src="https://seoc-html-v2.vercel.app/assets/img/bg/header-bg4.png"
            alt=""
          />
          <div data-aos="zoom-in" data-aos-duration="1200">
            {" "}
            <img
              className="absolute  bottom-0  w-[14rem] md:w-[27rem] left-1/2 -translate-x-1/2"
              src={hero2}
              alt=""
            />
          </div>
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/icons/sound-icons2.svg"
            className="absolute bottom-20 right-0 md:block hidden"
            alt=""
          />
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/elements/elements9.png"
            className="absolute top-20 left-0 md:block hidden"
            alt=""
          />
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/elements/elements10.png"
            className="absolute top-48 left-0 md:block hidden"
            alt=""
          />
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/all-images/header-img4.png"
            className="absolute -top-28  -left-20 md:block hidden"
            alt=""
          />
          <img
            src="https://img.freepik.com/free-vector/webpage-template-with-code_24908-82158.jpg?uid=R177576380&ga=GA1.1.119561090.1726138664&semt=ais_hybrid&w=140"
            className="absolute bottom-10  duration-0.5 -left-20 md:block hidden"
            alt=""
          />
          {/* <img src="https://seoc-html-v2.vercel.app/assets/img/all-images/header-img5.png" className="absolute top-20  duration-0.5 -right-20 md:block hidden" alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default Hero2;
