import React, { useEffect } from "react";
import ContactUs from "../Components/ContactUs";
import icon1 from '../assets/icons/icon1.png'
import icon2 from '../assets/icons/icon2.png'
import icon3 from '../assets/icons/icon3.png'
import icon4 from '../assets/icons/icon4.png'
import icon5 from '../assets/icons/icon5.png'
import icon6 from '../assets/icons/icon6.png'
import icon7 from '../assets/icons/icon7.png'
import icon9 from '../assets/icons/icon9.png'
import icon10 from '../assets/icons/icon10.png'
import icon11 from '../assets/icons/icon11.png'
import icon12 from '../assets/icons/icon12.png'
import icon13 from '../assets/icons/icon13.png'
import icon14 from '../assets/icons/icon14.png'
import icon15 from '../assets/icons/icon15.png'
import icon16 from '../assets/icons/icon16.png'
import icon17 from '../assets/icons/icon17.png'
import icon18 from '../assets/icons/icon18.png'
import icon19 from '../assets/icons/icon6.2.png'
import { Link } from "react-router-dom";




const WhomWeServe = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const industry = [
    {
      name: "E-commerce",
      logo: icon1
    },
    {
      name: "Healthcare",
      logo: icon3,
    },
    {
      name: "Banking",
      logo: icon2
    },
    {
      name: "Insurance",
      logo: icon4
    },

    {
      name: "Automobile",
      logo: icon5
    },
    {
      name: "Cement",
      logo: icon6
    },
    {
      name: "Education",
      logo: icon19
    },
    {
      name: "Gems & Jewellery",
      logo: icon7
    },
    {
      name: "Infrastructure",
      logo: icon9
    },
    {
      name: "Real Estate",
      logo: icon11
    },
    {
      name: "Tourism",
      logo: icon16
    },
    {
      name: "Infrastructure",
      logo: icon18
    },
    {
      name: "Agriculture",
      logo: icon15
    },

    {
      name: "Manufacturing",
      logo: icon14
    },
    {
      name: "Gym",
      logo: icon13
    },
    {
        name: "Laundary",
        logo: icon17
      },
      {
        name: "NGO",
        logo: icon17
      },
      {
        name: "Interior",
        logo: icon11
      },
      {
        name: "Energy",
        logo: icon10
      },
      {
        name: "Energy",
        logo: icon10
      },
  ];

  return (
    <div>
      <section
        style={{ backgroundImage: "url('https://shorturl.at/duRuW')" }}
        className="h-80 bg-contain bg-center w-full relative"
      >
        <div className="absolute inset-0 bg-black/40 "></div>

        <div className="flex flex-col justify-center items-center h-full relative z-20">
          <h1 className="text-5xl text-white font-semibold">Whom We Serve</h1>
          <div className="text-white flex space-x-3 font-semibold mt-4">
            <Link to={'/'}>Home</Link>
            <p> || </p>
            <p>Whom we serve </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-x-6 p-10">
        <div>
          <h1 className="text-6xl font-bold  pb-4">Industries We Serve</h1>
          <p className="text-gray-600 text-2xl">
            We serve businesses across various sectors such as Healthcare,
            Energy, E-commerce, Financial Services, Real Estate, Automobile, and
            more. Trust our skilled IT professionals to bring your vision to
            life effectively.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img src="https://shorturl.at/u7Eef" alt="" className="h-80 " />
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-y-4 px-10">
        {industry?.map((ele) => (
          <div className="w-60 flex bg-white text-wrap items-center space-x-4 shadow-xl  px-4 py-6">
            <img src={ele?.logo} alt="" className="max-w-10 " />
            <p className="text-xl text-wrap overflow-wrap">{ele?.name}</p>
          </div>
        ))}
      </div>

      <ContactUs/>
    </div>
  );
};

export default WhomWeServe;
