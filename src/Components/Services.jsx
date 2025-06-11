import React, { useEffect, useRef } from "react";
import "animate.css";
import service1 from "../assets/service1.webp";
import service2 from "../assets/service2.webp";
import service3 from "../assets/service3.webp";
import service4 from "../assets/service4.webp";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import cs1 from "../assets/cs1.png";
import lineimage from "../assets/line2.png";

import img1 from "../assets/service11.jpg";
import img2 from "../assets/service12.webp";
import img3 from "../assets/service13.webp";
import img4 from "../assets/service15.jpg";
import img5 from "../assets/service16.webp";
import img6 from "../assets/service14.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  const data = [
    {
      title: "Website Development <br/> ",
      icon: icon2,
      image: img5,
      link: "/services/1",
    },
    {
      title: "Ecommerce Solutions <br/> ",
      icon: icon1,
      image: img4,
      link: "/services/11",
    },
    {
      title: "Social Media Management <br/> ",
      icon: icon4,
      image: img6,
      link: "/services/12",
    },
    {
      title: "Wordpress Development <br/> ",
      icon: icon4,
      image: img3,
      link: "/services/13",
    },
    {
      title: "Shopify Development <br/> ",
      icon: icon1,
      image: img2,
      link: "/services/14",
    },

    {
      title: "Web/Vps <br/> Hosting",
      icon: icon4,
      image: img1,
      link: "/services/16",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-12 mb-10 lg:mt-10">
      <h1 className="text-center text-5xl font-semibold text-color1 mb-2 ">
        Our Services
      </h1>
      <img
        className="w-fit object-cover md:block hidden mb-8"
        src={lineimage}
        alt=""
      />
      <div className="grid gap-8 mt-4 grid-1 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((data, ind) => {
          return (
            <Link
              to={data?.link}
              className="relative bg-white rounded-[1rem] shadow-lg overflow-hidden max-w-[18rem]  group  hover:shadow-xl"
            >
              <img
                src={data?.image}
                alt="Service"
                className="w-full translate-transform duration-700 group-hover:scale-[1.15] h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-color1 via-transparent to-transparent flex items-end justify-center hover:from-[4%] hover:from-color1/80 hover:to-transparent transition-all duration-300">
                <div className="relative z-10 text-center text-white mb-7">
                  {/* <div className="mb-10 bg-color1 p-4 mx-auto w-fit rounded-lg" >
                                        <img src={data?.icon} alt="Icon" className="w-8 h-auto mx-auto transition-colors duration-300 group-hover:text-[#2B4DFF]"
                                            style={{ color: 'currentColor' }} />
                
                                    </div> */}
                  <div
                    tabIndex="0"
                    className="text-[1.2rem] font-semibold sora-600 leading-tight"
                  >
                    <h2 dangerouslySetInnerHTML={{ __html: data?.title }} />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
