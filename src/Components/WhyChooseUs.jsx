import React from "react";
import lineimage from "../assets/line.png";
import icon1 from "../assets/icons/wicon1.png";
import icon2 from "../assets/icons/wicon2.png";
import icon3 from "../assets/icons/wicon3.png";
import icon4 from "../assets/icons/wicon4.png";

const WhyChooseUs = () => {
  const serviceList = [
    {
      icon: icon1,
      title: "Strategic Expertise",
      description:
        "We craft customized strategies focused on accelerating your product’s growth and market impact.",
    },
    {
      icon: icon2,
      title: "Reliable Support",
      description:
        "Our dedicated support team guarantees smooth and efficient execution throughout every phase of your project.",
    },
    {
      icon: icon3,
      title: "Creative Design Innovation",
      description:
        "We transform ideas into engaging, user-focused designs that captivate and deliver meaningful experiences.",
    },
    {
      icon: icon4,
      title: "Powerful Branding",
      description:
        "We build distinctive, lasting brand identities that leave a strong and memorable impression on your audience.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-zinc-900 dark:text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-5xl font-semibold text-color1 mb-2">
            Why Choose Us?
          </h1>
          <img
            className="w-fit object-cover md:block hidden mb-8"
            src={lineimage}
            alt=""
          />
          <p className="text-lg opacity-80 max-w-2xl">
            Fuel your business growth with our standout Website Development and
            Social Media Management solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-6 rounded-full bg-color1 flex items-center justify-center shadow-lg">
                <img
                  src={service.icon}
                  className="w-14 h-14 bg-white rounded-full p-2"
                  alt=""
                />
              </div>
              <h4 className="text-xl font-semibold text-zinc-900 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
