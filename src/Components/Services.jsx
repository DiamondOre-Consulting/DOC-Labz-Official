import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'animate.css';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  // Refs for each service box
  const serviceRefs = useRef([]);

  useEffect(() => {
    // Loop through each serviceRef to create a ScrollTrigger animation
    serviceRefs.current.forEach((serviceRef, index) => {
      gsap.fromTo(
        serviceRef,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: serviceRef,
            start: 'top 80%', // Start animation when the top of the element reaches 80% of the viewport height
            end: 'top 20%', // End animation when the top of the element reaches 20% of the viewport height
            toggleActions: 'play reverse play reverse', // Play animation on enter, reverse on leave, play again on re-enter, and reverse again on leave
          },
        }
      );
    });
  }, []);

  return (
    <div className="mt-28" id="services">
      <h1 className="text-4xl font-semibold mb-10 px-10">What We Do?</h1>
      <div className="grid grid-cols-1 md:grid-cols-1  gap-6 px-6 mb-10">
        {[
          {
            title: 'Website Development',
            description:
              'At our core, we specialize in crafting dynamic and engaging websites designed to elevate your online presence. Whether you’re launching a personal blog, an e-commerce platform, or a corporate website, we bring your vision to life with cutting-edge design and functionality. Our team of experts works closely with you to deliver tailored solutions that reflect your brand identity and meet your unique needs. From responsive layouts and intuitive navigation to SEO optimization and seamless integrations, we ensure your website not only looks stunning but performs exceptionally. Let us help you create a powerful digital platform that connects with your audience and drives results.',
            icon: (
              <svg
                className="h-10 w-10 text-white transition-all"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                />
              </svg>
            ),
          },
        ].map((service, index) => (
          <div
            // key={index}
            className="relative flex-col justify-center overflow-hidden shadow-md md:shadow-sm w-full border border-1"
            // ref={(el) => (serviceRefs.current[index] = el)}
          >
            <div className="group relative  cursor-pointer overflow-hidden shadow-xl bg-white px-6 pt-10 pb-8 ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 sm:mx-auto w-full sm:rounded-lg sm:px-10">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-emerald-200 to-lime-300 transition-all duration-300 group-hover:scale-[40]"></span>
              <div className="relative z-10 mx-auto w-full">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-green-400 transition-all duration-300 group-hover:bg-green-500">
                  {service.icon}
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h1 className="font-bold text-3xl ">{service.title}</h1>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
