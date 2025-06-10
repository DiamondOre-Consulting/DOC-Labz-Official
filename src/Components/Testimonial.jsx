import React, { useState } from "react";
import { Marquee } from "./magicui/marquee";
import { cn } from "../lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonialList = [
    [
      {
        img: "https://cdn.vectorstock.com/i/500p/95/56/user-profile-icon-avatar-or-person-vector-45089556.jpg",
        name: "Ritika Sharma",
        position: "Product Manager at NexaTech",
        content:
          "Working with Doc-Labz was a game-changer. Their innovative mindset and technical expertise helped us streamline our development process and scale faster than ever. Truly exceptional service!",
      },
      {
        img: "https://cdn.vectorstock.com/i/500p/95/56/user-profile-icon-avatar-or-person-vector-45089556.jpg",
        name: "Mohammed Rahman",
        position: "CTO at CloudSphere Solutions",
        content:
          "Doc-Labz impressed us with their problem-solving skills and deep technical knowledge. They’re not just consultants—they’re true partners in digital transformation.",
      },
      {
        img: "https://cdn.vectorstock.com/i/500p/95/56/user-profile-icon-avatar-or-person-vector-45089556.jpg",
        name: "Sneha Kapoor",
        position: "Founder at EduBridge Innovations",
        content:
          "The team at Doc-Labz went above and beyond to ensure our platform launch was a success. Their dedication and ability to adapt to challenges made all the difference.",
      },
    ],
    [
      {
        img: "https://cdn.vectorstock.com/i/500p/95/56/user-profile-icon-avatar-or-person-vector-45089556.jpg",
        name: "Karan Mehta",
        position: "CEO at FinEdge Pvt. Ltd.",
        content:
          "We chose Doc-Labz for their reputation in IT consulting, and they delivered far beyond expectations. Their agile approach and client-first mindset are rare to find.",
      },
      {
        img: "https://cdn.vectorstock.com/i/500p/95/56/user-profile-icon-avatar-or-person-vector-45089556.jpg",
        name: "Anjali Rao",
        position: "Director of Operations at HealthVerse",
        content:
          "Doc-Labz played a vital role in optimizing our backend systems. The professionalism and creativity of their team were truly outstanding.",
      },
      {
        img: "https://cdn.vectorstock.com/i/500p/95/56/user-profile-icon-avatar-or-person-vector-45089556.jpg",
        name: "David Fernandes",
        position: "Tech Lead at AutoIntelli Systems",
        content:
          "Our collaboration with Doc-Labz has been smooth and incredibly productive. Their team is full of brilliant minds who understand both technology and business needs.",
      },
    ],
  ];

  function ShapeOne() {
    return (
      <svg
        className="md:block hidden absolute bottom-0 left-0 -z-[1]"
        width="404"
        height="572"
        viewBox="0 0 404 572"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="118"
          cy="286"
          r="265.5"
          stroke="#4175DF"
          strokeOpacity="0.2"
          strokeWidth="41"
        />
      </svg>
    );
  }

  function ShapeTwo() {
    return (
      <svg
        className="hidden md:block absolute top-0 right-0 -z-[1]"
        width="269"
        height="479"
        viewBox="0 0 269 479"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="239.5"
          cy="239.5"
          r="239.5"
          fill="#FC4755"
          fillOpacity="0.25"
        />
      </svg>
    );
  }
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);
  return (
    <section className="ezy__testimonial23 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
      <ShapeOne />
      <ShapeTwo />

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6 items-center justify-between mb-6 md:mb-12">
          <div className="col-span-12 md:col-span-12 lg:col-span-12">
            <h2 className="text-[40px] font-bold leading-normal text-color1 text-center mx-auto">
              What Our Client Say's
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-[1.7] opacity-80"></p>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonialList.flat().map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl rounded-2xl h-full p-6 xl:p-8 flex flex-col transition-transform transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-16 h-16 object-cover rounded-full border-2 border-color1 mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 opacity-80">
                  "{testimonial.content}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
