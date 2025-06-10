import React from "react";
import { Link } from "react-router-dom";

const HowWeCanHelpYou = () => {
  return (
    <div>
      <section className="ezy__cta2 light relative overflow-hidden py-14 md:py-24 bg-color1/60">
        <div className="w-[400px] h-[400px] bg-white bg-opacity-5 rounded-full -m-[100px] absolute left-0 top-0"></div>
        <div className="w-[400px] h-[400px] bg-white bg-opacity-5 rounded-full -m-[100px] absolute right-0 bottom-0"></div>

        <div className="container relative px-4">
          <div className="grid  justify-center text-center text-white">
            <div className="col-span-12 lg:col-span-9 lg:col-start-3 mx-auto">
              <div className="lg:px-16">
                <h2 className="text-2xl md:text-[35px] leading-none font-bold mb-6">
                  How We Can Help You ?
                </h2>
                <p className="text-sm leading-6 mb-12">
                  Discover the services we offer to empower your digital
                  journey. From development to growth, we’ve got your business
                  covered.
                </p>
                <Link
                  to={"/How-We-Can-Help"}
                  className="bg-white text-black py-3 px-7 rounded transition"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeCanHelpYou;
