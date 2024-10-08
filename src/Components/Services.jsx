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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-10">
        {[
          {
            title: 'Website Development',
            description:
              'Your destination for tailored website development solutions. Transform your online presence with our expertly crafted websites.',
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
          {
            title: 'UI/UX',
            description:
              'Doc-Labz Captivating UI/UX design service. We craft immersive interfaces that captivate audiences and elevate user engagement.',
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
                  d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
                />
              </svg>
            ),
          },
          {
            title: 'Digital Marketing',
            description:
              "Empowers your brand's digital journey with digital marketing strategies. From engaging content creation to strategic campaign management.",
            icon: (
              <svg
                className="h-10 w-10 text-white transition-all"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M9 15a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm3.845-1.855a2.4 2.4 0 0 1 1.2-1.226 1 1 0 0 1 1.992-.026c.426.15.809.408 1.111.749a1 1 0 1 1-1.496 1.327.682.682 0 0 0-.36-.213.997.997 0 0 1-.113-.032.4.4 0 0 0-.394.074.93.93 0 0 0 .455.254 2.914 2.914 0 0 1 1.504.9c.373.433.669 1.092.464 1.823a.996.996 0 0 1-.046.129c-.226.519-.627.94-1.132 1.192a1 1 0 0 1-1.956.093 2.68 2.68 0 0 1-1.227-.798 1 1 0 1 1 1.506-1.315.682.682 0 0 0 .363.216c.038.009.075.02.111.032a.4.4 0 0 0 .395-.074.93.93 0 0 0-.455-.254 2.91 2.91 0 0 1-1.503-.9c-.375-.433-.666-1.089-.466-1.817a.994.994 0 0 1 .047-.134Zm1.884.573.003.008c-.003-.005-.003-.008-.003-.008Zm.55 2.613s-.002-.002-.003-.007a.032.032 0 0 1 .003.007ZM4 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm3-2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm6.5-8a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.796l-2.341 2.049a1 1 0 0 1-1.24.06l-2.894-2.066L6.614 9.29a1 1 0 1 1-1.228-1.578l4.5-3.5a1 1 0 0 1 1.195-.025l2.856 2.04L15.34 5h-.84a1 1 0 0 1-1-1Z"
                  clipRule="evenodd"
                />
              </svg>
            ),
          },
        ].map((service, index) => (
          <div
            key={index}
            className="relative flex-col justify-center overflow-hidden shadow-md md:shadow-sm"
            ref={(el) => (serviceRefs.current[index] = el)}
          >
            <div className="group relative cursor-pointer overflow-hidden shadow-xl bg-white px-6 pt-10 pb-8 ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-emerald-200 to-lime-300 transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-green-400 transition-all duration-300 group-hover:bg-green-500">
                  {service.icon}
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h1 className="font-bold text-2xl">{service.title}</h1>
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
