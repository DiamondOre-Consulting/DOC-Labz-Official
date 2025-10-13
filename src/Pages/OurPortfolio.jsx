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
import lineimage from "../assets/line2.png";
import profile from "../assets/profil2.png";
// import sof from "../assets/sofscroll.png";
import plastic from "../assets/plastic.png";
import simplygift from "../assets/simlygift.png";
import zello from "../assets/zello.png";
import godrej from "../assets/godrej.png";
import honda from '../assets/portfolio/honda.png'
import chhaapp from '../assets/portfolio/chhaapp.png'
import branboxx from '../assets/portfolio/branboxx.png'
import cv from '../assets/portfolio/cv.png'
import sof from '../assets/portfolio/sof.png'
import ak from '../assets/portfolio/ak.png'
import event from '../assets/portfolio/event.png'
import pilates from '../assets/portfolio/pilates.png'
import aranyud from '../assets/portfolio/aranyud.png'










const OurPortfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      title: "Mentor Language Institute",
      icon: icon2,
      category: "Dynamic Website",
      image: p1,
      link: "https://www.mentorlanguageinstitute.com/",
    },

    {
      title: "Redefine Group",
      icon: icon1,
      image: p2,
      category: "Static Website",
      link: "https://www.redefinegroup.com/",
    },
    {
      title: "Viraj Portfolio",
      icon: icon4,
      image: p3,
      category: "Static Portfolio Website",
      link: "https://virajkatyayan.in/",
    },
    {
      title: "CV Genie",
      icon: icon4,
      image: cv,
      category: "Dynamic Website",
      link: "https://www.cvgenie.in/",
    },
    {
      title: "Neetu Sharma Numerologist",
      icon: icon1,
      image: p5,
      category: "Static Portfolio Website",
      link: "https://neetusharma.in/",
    },
    {
      title: "Profile Genie",
      icon: icon2,
      image: profile,
      category: "Dynamic Website",
      link: "https://profilegenie.in/",
    },
    // {
    //   title: "RasKhas",
    //   icon: icon3,
    //   image: p7,
    //   link: "/services/4",
    // },

    {
      title: "Referbiz",
      icon: icon3,
      image: p8,
      category: "Dynamic Website",
      link: "https://www.referbiz.in/",
    },

    {
      title: "Diamondore Placement Consulting Company",
      icon: icon3,
      image: p9,
      category: "Dynamic Website",
      link: "https://www.diamondore.in/",
    },
    {
      title: "COA Transformation",
      icon: icon3,
      image: p10,
      category: "Dynamic Website",
      link: "https://conferences-coaindia.org/",
    },

    {
      title: "Sof SScroll",
      icon: icon3,
      category: "Static Website",
      image: sof,
      link: "https://www.sofsscrrol.com/",
    },

    {
      title: "Plastic Engineers and Febricators",
      icon: icon3,
      category: "Static Website",
      image: plastic,
      link: "https://plastengnr.in/",
    },

    {
      title: "Simply Gift",
      icon: icon3,
      category: "WordPress Website",
      image: simplygift,
      link: "https://simplygift.in/",
    },

    {
      title: "Zelo India",
      icon: icon3,
      category: "Shopify Website",
      image: zello,
      link: "https://zeloindia.com/",
    },

    {
      title: "Godrej Riverine ",
      icon: icon3,
      category: "Static Website",
      image: godrej,
      link: "https://godrejriverine44.co.in/",
    },

     {
      title: "Bigwing Honda ",
      icon: icon3,
      category: "Dynamic Website",
      image: honda,
      link: "https://bigwinghonda.in/",
    },
       {
      title: "Chhaapp ",
      icon: icon3,
      category: "Dynamic Website",
      image: chhaapp,
      link: "https://chhaapp.in/",
    },

       {
      title: "Branboxx ",
      icon: icon3,
      category: "Dynamic Website",
      image: branboxx,
      link: "https://branboxx.com/",
    },

        {
      title: "AK CRM ",
      icon: icon3,
      category: "Static Website",
      image: ak,
      link: "https://akcrm.in/",
    },

    
        {
      title: "EVen Tours",
      icon: icon3,
      category: "Static Website",
      image: event,
      link: "https://eventoursindia.com/",
    },


           {
      title: "The pilates room",
      icon: icon3,
      category: "Dynamic Website",
      image: pilates,
      link: "https://thepilatesroom.co.in/",
    },


          {
      title: "Aranyud Architects",
      icon: icon3,
      category: "Static Website",
      image: aranyud,
      link: "https://aranyudarchitects.com/",
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
                target="_blank"
                className="relative bg-white rounded-[1rem] shadow-lg overflow-hidden max-w-[26rem]  max-h-[20rem] group  hover:shadow-xl"
              >
                <img
                  src={data?.image}
                  alt="Service"
                  className="w-full translate-transform duration-700 group-hover:scale-[1.15] h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-color1 via-transparent to-transparent flex items-end justify-center hover:from-[0%] hover:from-color1 hover:to-transparent transition-all duration-300">
                  <div className="relative z-10 text-center text-white mb-2">
                    {/* <div className="mb-10 bg-color1 p-4 mx-auto w-fit rounded-lg" >
                                              <img src={data?.icon} alt="Icon" className="w-8 h-auto mx-auto transition-colors duration-300 group-hover:text-[#2B4DFF]"
                                                  style={{ color: 'currentColor' }} />
                      
                                          </div> */}
                    <div
                      tabIndex="0"
                      className="text-[1.2rem] uppercase  sora-600 leading-tight"
                    >
                      <h2
                        className="font-bold"
                        dangerouslySetInnerHTML={{ __html: data?.title }}
                      />
                      <p className="text-sm">{data.category}</p>
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
