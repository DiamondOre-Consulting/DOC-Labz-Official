import React, { useEffect } from "react";
import "animate.css";
import p1 from "../assets/portfolio/p1.png";
import p2 from "../assets/portfolio/p2.png";
import p3 from "../assets/portfolio/p3.png";
import p4 from "../assets/portfolio/p4.png";
import p5 from "../assets/portfolio/p5.png";
import p6 from "../assets/portfolio/p6.png";
import p7 from "../assets/portfolio/p7.png";
import p8 from "../assets/portfolio/p8.png";
import p9 from "../assets/portfolio/p9.png";
import p10 from "../assets/portfolio/p10.png";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import { Link } from "react-router-dom";
import lineimage from "../assets/line.png";

const OurPortfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      title: "Mentor Language Institute",
      icon: icon2,
      image: p1,
      link: "/services/1",
    },

    {
      title: "Redefine Group",
      icon: icon1,
      image: p2,
      link: "/services/11",
    },
    {
      title: "Viraj Portfolio",
      icon: icon4,
      image: p3,
      link: "/services/12",
    },
    {
      title: "CV Genie",
      icon: icon4,
      image: p4,
      link: "/services/13",
    },
    {
      title: "Neetu Sharma Numerologist",
      icon: icon1,
      image: p5,
      link: "/services/14",
    },
    {
      title: "Profile Genie",
      icon: icon2,
      image: p6,
      link: "/services/3",
    },
    {
      title: "RasKhas",
      icon: icon3,
      image: p7,
      link: "/services/4",
    },

    {
      title: "Referbiz",
      icon: icon3,
      image: p8,
      link: "/services/4",
    },

    {
      title: "Diamondore ",
      icon: icon3,
      image: p9,
      link: "/services/16",
    },
    {
      title: "COA  Transformation",
      icon: icon3,
      image: p10,
      link: "/services/16",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-12 mb-10 lg:mt-10">
        <h1 className="text-center text-5xl font-semibold text-color1 mb-2 ">
          Our Portfolio
        </h1>
        <img
          className="w-fit object-cover md:block hidden mb-8"
          src={lineimage}
          alt=""
        />
        <div className="grid gap-8 mt-4 grid-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {data?.map((data, ind) => {
            return (
              <Link
                to={data?.link}
                className="relative bg-white rounded-[1rem] shadow-lg overflow-hidden max-w-[26rem]  max-h-[20rem] group  hover:shadow-xl"
              >
                <img
                  src={data?.image}
                  alt="Service"
                  className="w-full translate-transform duration-700 group-hover:scale-[1.15] h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-color1 via-transparent to-transparent flex items-end justify-center hover:from-[10%] hover:from-color1 hover:to-transparent transition-all duration-300">
                  <div className="relative z-10 text-center text-white mb-7">
                    {/* <div className="mb-10 bg-color1 p-4 mx-auto w-fit rounded-lg" >
                                              <img src={data?.icon} alt="Icon" className="w-8 h-auto mx-auto transition-colors duration-300 group-hover:text-[#2B4DFF]"
                                                  style={{ color: 'currentColor' }} />
                      
                                          </div> */}
                    <div
                      tabIndex="0"
                      className="text-[1.2rem] uppercase  sora-600 leading-tight"
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
    </div>
  );
};

export default OurPortfolio;
