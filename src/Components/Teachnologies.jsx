import React, { useEffect, useRef } from "react";

import react from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import typescript from "../assets/typescript.png";
import nextjs from "../assets/nextjs.jpg";
import js from "../assets/js.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import express from "../assets/express.png";
import aws from "../assets/aws.png";
import lineimage from "../assets/line2.png";

const Teachnologies = () => {
  const itemsRef = useRef([]);

  // useEffect(() => {
  //   // Ensure all images load before initializing animations
  //   const handleImageLoad = () => {
  //     itemsRef.current.forEach((item, index) => {
  //       if (item) {
  //         gsap.fromTo(
  //           item,
  //           { opacity: 0, y: 50 },
  //           {
  //             opacity: 1,
  //             y: 0,
  //             duration: 0.8,
  //             ease: 'power3.out',
  //             scrollTrigger: {
  //               trigger: item,
  //               start: 'top 80%',
  //               toggleActions: 'play reverse play reverse',
  //             },
  //             delay: index * 0.2,
  //           }
  //         );
  //       }
  //     });
  //   };

  //   // Check if all images are loaded
  //   const images = document.querySelectorAll('img');
  //   let loadedImages = 0;

  //   images.forEach((image) => {
  //     if (image.complete) {
  //       loadedImages++;
  //     } else {
  //       image.addEventListener('load', () => {
  //         loadedImages++;
  //         if (loadedImages === images.length) {
  //           handleImageLoad();
  //         }
  //       });
  //     }
  //   });

  //   if (loadedImages === images.length) {
  //     handleImageLoad();
  //   }
  // }, []);

  return (
    <>
      <div>
        <div className="flex py-8 flex-col justify-center items-center">
          <h1 className="text-center text-5xl font-semibold text-color1 mb-2 ">
            {" "}
            Technologies We Use
          </h1>
          <img
            className="w-fit object-cover md:block hidden mb-8"
            src={lineimage}
            alt=""
          />
        </div>

        <div className="px-6 md:px-10 grid grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-10">
          {[
            { img: react, label: "REACT" },
            { img: node, label: "NODE JS" },
            { img: mongo, label: "MONGO DB" },
            { img: typescript, label: "TYPE SCRIPT" },
            { img: nextjs, label: "NEXT JS" },
            { img: js, label: "JAVA SCRIPT" },
            { img: html, label: "HTML" },
            { img: css, label: "CSS" },
            { img: express, label: "EXPRESS JS" },
            { img: aws, label: "AWS" },
          ].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <div className="relative w-20 h-20 flex items-center justify-center">
                <img
                  src={tech.img}
                  alt={tech.label}
                  className="object-contain w-full h-full"
                />
              </div>
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teachnologies;
