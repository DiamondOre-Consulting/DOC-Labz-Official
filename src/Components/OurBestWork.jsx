import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import bw1 from "../assets/w1.png";
import bw2 from "../assets/bw2.png";
import bw3 from "../assets/bw3.png";
import bw4 from "../assets/bw4.png";
import p5 from "../assets/portfolio/p5.png";
import icon1 from "../assets/icon1.svg";
import icon4 from "../assets/icon4.svg";
import p4 from "../assets/portfolio/p4.png";
import p11 from "../assets/portfolio/p11.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import lineimage from "../assets/line2.png";

import { Link } from "react-router-dom";

const OurBestWork = () => {
  const projects = [
    {
      title: "Transformation COA Static Website",
      image: bw1,
      link: "https://conferences-coaindia.org/",
    },
    {
      title: "Redefine Group Static Website ",
      image: bw2,
      link: "https://www.redefinegroup.com/",
    },
    {
      title: "Viraj Porfolio",
      image: bw3,
      link: "https://virajkatyayan.in/",
    },
    {
      title: "Niyor Dynamic Catalogue",
      image: bw4,
      link: "https://www.profilegenie.in/dynamic-catalogue/1/Ishan_Niyor_Perfumes",
    },
    {
      title: "Neetu Sharma Numerologist Portfolio Website",
      icon: icon1,
      image: p5,
      link: "https://neetusharma.in/",
    },

    {
      title: "CV Genie Static Website",
      icon: icon4,
      image: p4,
      link: "https://www.cvgenie.in/",
    },

    {
      title: "Profile Genie Landing Page",
      icon: icon4,
      image: p11,
      link: "https://profilegenie.in/profile/1/UM99",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto bg-gray-100  pb-10">
      <div className="py-10 w-full  lg:max-w-xl mx-auto font-semibold space-y-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-5xl font-semibold text-color1 mb-2 ">
            Some of our projects
          </h1>
          <img
            className="w-fit object-cover md:block hidden mb-8"
            src={lineimage}
            alt=""
          />
        </div>
        {/* <p className="text-4xl text-center">Our Best Work </p> */}
        <p className="text-center text-gray-500 text-xl">
          DocLabz, based in Noida — We have Expertise in Website Development and
          Social Media Management.
        </p>
      </div>

      <div className="  mx-auto w-full max-w-5xl ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper "
        >
          {projects.map((project, index) => (
            // <div className="bg-black p-10">
            <SwiperSlide
              key={index}
              className="w-[250px] md:w-[450px] h-[150px] md:h-[260px] rounded-xl overflow-hidden relative"
            >
              <Link to={project.link} target="_blank" className="">
                <div className="w-full h-full p-4 bg-white rounded-xl box-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </Link>
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                {project.title}
              </div>
            </SwiperSlide>

            // </div>
          ))}
        </Swiper>
      </div>
      <Link
        to={"/our-portfolio"}
        target="_blank"
        className="px-20 py-4 mx-auto mt-10 text-center rounded-md text-white  bg-color1/80"
      >
        Explore More
      </Link>
    </div>
  );
};

export default OurBestWork;
