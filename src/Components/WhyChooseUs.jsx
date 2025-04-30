import React from "react";
import { SiExpertsexchange } from "react-icons/si";
import { AiOutlineSolution } from "react-icons/ai";

const WhyChooseUs = () => {
  const serviceList = [
    {
      color: "red",
      bg: "#ff4d4d",
      icon: <SiExpertsexchange />,
      title: "Strategic Expertise",
      description:
        "We craft customized strategies focused on accelerating your product’s growth and market impact.",
    },
    {
      color: "blue",
      bg: "#4d4dff",
      icon: <AiOutlineSolution />,
      title: "Reliable Support",
      description:
        "Our dedicated support team guarantees smooth and efficient execution throughout every phase of your project.",
    },
    {
      color: "teal",
      bg: "#00b2b3",
      icon: <AiOutlineSolution />,
      title: "Creative Design Innovation",
      description:
        "We transform ideas into engaging, user-focused designs that captivate and deliver meaningful experiences.",
    },
    {
      color: "green",
      bg: "#008000",
      icon: <AiOutlineSolution />,
      title: "Powerful Branding",
      description:
        "We build distinctive, lasting brand identities that leave a strong and memorable impression on your audience.",
    },
  ];

  return (
    <div>
      <section className="ezy__service3  h-full light py-14 md:py-10 my-10  bg-gray-100 text-zinc-900 dark:text-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-center mb-6 md:mb-12">
            <div className="w-full max-w-xl text-center">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-center text-5xl font-semibold text-color1 mb-2 ">
                  {" "}
                  Why Choose Us?
                </h1>
                <img
                  className="w-fit object-cover md:block hidden mb-8"
                  src="https://seoc-html-v2.vercel.app/assets/img/elements/line-img1.png"
                  alt=""
                />
              </div>
              <p className="text-lg opacity-80 mb-6">
                Fuel your business growth with our standout Website Development,
                SEO Optimization, and Social Media Management solutions
              </p>
            </div>
          </div>
          <div className="grid pb-10 gird-cols-1 lg:grid-cols-4 gap-14 lg:gap-6 ">
            {serviceList.map((service, i) => (
              <div className="col-span-3 md:col-span-1" key={i}>
                <div
                  style={{ backgroundColor: service?.bg }}
                  className={`h-full ${
                    i % 2 === 0 ? "lg:mt-8" : ""
                  }   dark:bg-slate-800 shadow-xl rounded-2xl `}
                >
                  <div
                    style={{ backgroundColor: service.color }}
                    className={`w-20 h-20 z-40   rounded-full text-3xl inline-flex justify-center items-center  text-white -mt-12`}
                  >
                    <div>{service.icon} </div>
                  </div>
                  <div className="p-4 lg:pb-12">
                    <h4 className="text-xl font-medium text-white mb-4">
                      {service.title}
                    </h4>
                    <p className="opacity-80 text-white">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
