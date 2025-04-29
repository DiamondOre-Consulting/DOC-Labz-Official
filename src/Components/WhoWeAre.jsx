import React, { useEffect, useRef } from "react";

const WhoWeAre = () => {
 

  return (
    <div className="px-10 py-10  " id="about">
      <div className="flex items-center flex-col lg:flex-row justify-center gap-x-8">
        <img className="lg:max-w-[35rem]" src="https://codecrafter.co.in/assets/about-BW18IBHy.jpg" alt="" />
        <div className="flex flex-col max-w-[35rem] items-center space-y-3">
          <h2 className="text-3xl font-semibold text-center">
            Best Website Development Company in Noida
          </h2>
          <p className="text-gray-800 text-md  text-center py-4">
            DocLabz is Noida Premier IT Solutions Provider,
            Specializing in Software Development, Web Designing , and Digital
            growth strategies. We Empower businesses with scalable, innovative
            solutions.
          </p>

          <div className="grid  grid-cols-2 gap-x-4 pt-4">
            <div className="bg-color1/10 rounded-xl shadow-lg shadow-color1/20 p-4 border border-color1/20">
              <p className="font-bold text-xl  text-color1 mb-2">Our Mission</p>
              <p className="text-sm">
                To empower businesses with smart, scalable tech solutions that
                drive growth and efficiency in a digital-first world.
              </p>
            </div>

            <div className="bg-color1/10 rounded-xl shadow-lg shadow-color1/20 p-4 border border-color1/20">

              <p className="font-bold text-xl  text-color1 mb-2">Our Vision</p>
              <p className="text-sm">
                To be a leading IT partner, enabling businesses to thrive and
                innovate in an ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
