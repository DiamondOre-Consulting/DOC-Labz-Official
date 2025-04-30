import React from "react";

const WorkProcess = () => {
  return (
    <>
      <div className="pt-20">
        <div className="max-w-xl space-y-2 flex flex-col justify-center items-center  mx-auto">
          <div className="flex flex-col justify-center items-center">
            <h1 className = "text-center text-5xl font-semibold text-color1 mb-2 "> Our Work Process</h1>
                <img
                  className="w-fit object-cover md:block hidden mb-8"
                  src="https://seoc-html-v2.vercel.app/assets/img/elements/line-img1.png"
                  alt=""
              
                />
            </div>
         
          <p className="text-center lg:px-0 px-4">
          We follow a structured and collaborative approach, ensuring every step is aligned with your goals — from planning to execution, delivering results with precision and excellence.
          </p>
        </div>
        <div className="relative py-14 ">
          <div className="w-full container max-w-[75rem] mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
              <div className="flex group lg:hover:transition-40 flex-col items-center text-center w-full mt-20 md:w-1/5  z-10 relative">
                <div className="transition-all flex flex-col  items-center duration-300 lg:group-hover:-mt-10">
                  <div className="w-24 h-24 lg:group-hover:-mt-6 transition-all duration-300 bg-gradient-to-r from-orange-400 via-color1/90 to-color1 z-40 rounded-full flex items-center justify-center shadow-lg">
                    <img
                      src="https://codecrafter.co.in/assets/illustration1-BwZOR1hL.svg"
                      className="w-10 h-10"
                    />
                  </div>

                  <h3 className="text-lg font-bold mt-4 ">Consultation</h3>
                  <p className="text-sm mt-2 text-gray-600 ">
                    Understanding your vision and business needs.
                  </p>
                </div>
                <div
                  className="absolute -top-2 w-60 h-0.5  ml-[15rem] bg-gray-800 z-0 lg:block hidden"
                  style={{ transform: "rotate(-29deg)" }}
                ></div>
              </div>

              <div className="flex flex-col  items-center text-center w-full mt-10 lg:-mt-20 group lg:-20 md:w-1/5 z-10 relative">
                <div className="transition-all flex flex-col  items-center duration-300 lg:group-hover:-mt-10">
                  <div className="w-24 h-24  z-40 rounded-full bg-gradient-to-r from-blue-400 via-color1/90 to-color1 flex items-center justify-center shadow-lg">
                    <img
                      src="https://codecrafter.co.in/assets/illustration1-BwZOR1hL.svg"
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-lg font-bold mt-4">STRATEGY</h3>
                  <p className="text-sm mt-2 text-gray-600">
                    Creating strategic roadmaps and allocating resources for
                    impactful designs.
                  </p>
                </div>
                <div
                  className="absolute top-[5rem] w-64 left-[8rem] h-0.5  bg-gray-800 z-0 lg:block hidden"
                  style={{ transform: "rotate(23deg)" }}
                ></div>
              </div>

              <div className="flex flex-col  group items-center text-center w-full mt-10 lg:mt-20 md:w-1/5 z-10 relative">
                <div className="transition-all flex flex-col  items-center duration-300 lg:group-hover:-mt-10">
                  <div className="w-24 h-24  z-40 bg-gradient-to-r from-pink-400 via-color1/90 to-color1 rounded-full flex items-center justify-center shadow-lg">
                    <img
                      src="https://codecrafter.co.in/assets/illustration1-BwZOR1hL.svg"
                      alt="DEVELOP"
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-lg font-bold mt-4">Planning</h3>
                  <p className="text-sm mt-2 text-gray-600">
                    Crafting a tailored strategy and design blueprint.
                  </p>
                </div>
                <div
                  className="absolute -top-0 w-60 h-0.5 ml-[15rem] bg-gray-800 z-0 lg:block hidden"
                  style={{ transform: "rotate(-19deg)" }}
                ></div>
              </div>

              <div className="flex   flex-col group items-center text-center w-full mt-10 lg:mt-0 mb-10 md:w-1/5 z-10 relative">
                <div className="transition-all flex flex-col  items-center duration-300 lg:group-hover:-mt-10">
                  <div className="w-24 z-40 h-24 bg-gradient-to-r from-color1 via-color1/90 to-indigo-400 rounded-full flex items-center justify-center shadow-lg">
                    <img
                      src="https://codecrafter.co.in/assets/illustration1-BwZOR1hL.svg"
                      alt="TESTING"
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-lg font-bold mt-4">TESTING</h3>
                  <p className="text-sm mt-2 text-gray-600">
                    Evaluating systems, integrating tools, and enhancing team
                    collaboration.
                  </p>
                </div>
                <div
                  className="absolute top-[5rem] w-64 left-[8rem] h-0.5  bg-gray-800 z-0 lg:block hidden"
                  style={{ transform: "rotate(20deg)" }}
                ></div>
              </div>

              <div className="flex  flex-col group items-center text-center w-full mt-10 lg:mt-20 md:w-1/5 z-10 relative">
                <div className="transition-all flex flex-col  items-center duration-300 lg:group-hover:-mt-10">
                  <div className="w-24 h-24 bg-gradient-to-r from-color1 via-color1/90 to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <img
                      src="https://codecrafter.co.in/assets/illustration1-BwZOR1hL.svg"
                      alt="DELIVER"
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-lg font-bold mt-4">DELIVER</h3>
                  <p className="text-sm mt-2 text-gray-600">
                    Fostering community engagement through workshops and team
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkProcess;
