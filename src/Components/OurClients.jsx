import React from "react";
import { Link } from "react-router-dom"; // Import Link
import c1 from "../assets/clients/c1.png";
import c2 from "../assets/clients/c2.png";
import c3 from "../assets/clients/c3.webp";
import c4 from "../assets/clients/c4.png";
import c6 from "../assets/clients/c7.png";
import c7 from "../assets/clients/c6.svg";
import c8 from "../assets/clients/c8.webp";
import c9 from "../assets/clients/c9.png";
import c10 from "../assets/clients/c10.png";
import c11 from "../assets/clients/greenlogo.png";
import lineimage from "../assets/line.png";

const OurClients = () => {
  const clientLogos = [
    { logo: c1, url: "https://www.mentorlanguageinstitute.com/" },
    { logo: c2, url: "https://www.diamondore.in/" },
    { logo: c3, url: "https://www.sofsscrrol.com/" },
    { logo: c4, url: "https://www.redefinegroup.com/" },
    { logo: c7, url: "https://virajkatyayan.in/" },
    { logo: c6, url: "https://neetusharma.in/" },
    { logo: c11, url: "https://www.cvgenie.in/" },
    { logo: c9, url: "https://raskhas.com/" },
    { logo: c10, url: "https://www.profilegenie.store/" },
  ];

  return (
    <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container mx-auto px-4 text-start">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-5xl font-semibold text-color1 mb-2 ">
            {" "}
            Our Trusted Clients
          </h1>
          <img
            className="w-fit object-cover md:block hidden mb-8"
            src={lineimage}
            alt=""
          />
        </div>
        {/* <h2 className="font-bold text-center text-[25px] lg:text-[45px] leading-none mb-6">
          Our Trusted Clients
        </h2> */}
        <p className="text-lg max-w-xl mx-auto text-center leading-2 opacity-70 mb-10">
          At Doc Labz, we proudly collaborate with industry leaders and
          technology innovators. Our clients trust us to create cutting-edge
          websites and digital solutions that elevate their online presence and
          drive business growth.
        </p>

        <div className="overflow-hidden relative w-full">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {clientLogos.concat(clientLogos).map((client, i) => (
              <Link
                to={client.url}
                target="_blank"
                key={i}
                className="flex-shrink-0"
              >
                <div className="bg-color1/10 rounded-md border border-color1/60 p-4 hover:scale-105 transition-transform duration-300">
                  <img
                    src={client.logo}
                    alt={`client-${i}`}
                    className="h-[4rem] w-auto"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
