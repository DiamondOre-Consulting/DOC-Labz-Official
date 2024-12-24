import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fade } from 'react-awesome-reveal';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  // Create refs for the heading and paragraph elements
  const headingRef = useRef(null);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    // Create a GSAP animation for the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%', // Start animation when the top of the heading reaches 80% of the viewport height
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    // Create GSAP animations for each paragraph
    paragraphRefs.current.forEach((paragraph, index) => {
      gsap.fromTo(
        paragraph,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2, // Stagger animations
          ease: 'power3.out',
          scrollTrigger: {
            trigger: paragraph,
            start: 'top 90%', // Start animation when the top of the paragraph reaches 90% of the viewport height
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className='px-10' id="about">
      <Fade cascade>
        <h1 className='text-center mx-auto text-5xl font-bold mt-20' ref={headingRef}>
          Who We Are?
        </h1>
      </Fade>
      <div className='px-0 md:px-20 mt-10 text-justify'>
        {[
          "Doc-Labz is a premier IT consulting firm dedicated to providing exceptional services in web development. We specialize in crafting unique and innovative solutions tailored to meet the specific needs of our clients. Our team of experts is committed to delivering excellence in every project, ensuring client satisfaction and success. At Doc-Labz, we believe in the power of technology to transform businesses and drive growth. Whether you're looking to create a stunning website or enhance your online presence, we've got you covered. With our comprehensive range of services, we help businesses thrive in the digital landscape, empowering them to reach their full potential and achieve their goals."
        ].map((text, index) => (
          <p key={index} ref={el => (paragraphRefs.current[index] = el)}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
