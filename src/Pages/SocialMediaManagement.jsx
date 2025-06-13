import React from "react";
import ContactUs from "../Components/ContactUs";
import { Link } from "react-router-dom";
import c1 from "../assets/clients/c1.png";
import c2 from "../assets/clients/c2.png";
import c3 from "../assets/clients/c3.webp";
import c4 from "../assets/clients/c4.png";
import c6 from "../assets/clients/c7.png";
import c7 from "../assets/clients/c6.svg";
import c8 from "../assets/clients/c8.webp";
import c9 from "../assets/clients/c9.png";
// import c10 from "../assets/clients/c10.png";
import c11 from "../assets/clients/greenlogo.png";
import zelo from "../assets/clients/zelo.png";
import nutz from "../assets/clients/nutz.png";
import logo from "../assets/logo2.png";
import simply from "../assets/clients/simply.jpeg";
import dropmix from "../assets/clients/dropmix.png";

const SocialMediaManagement = () => {
  const services = [
    {
      title: "CONTENT WRITING",
      description:
        "Content is the fuel for your products, and we are the catalysts who can get your ideas in motion! Our strategically developed content ideas for your brand helps you with a blueprint to make your mark. From setting your tone of voice to carefully crafting your brand story, we do it all.",
      bg: "bg-blue-100",
    },
    {
      title: "SOCIAL MEDIA MARKETING",
      description:
        "Our social media marketing specialists curate bespoke brand strategies that connect with the audience. We skillfully combine content, visuals, and engaging stories to create an immersive digital experience that attracts followers and sparks fascinating conversations.",
      bg: "bg-yellow-300",
    },
    {
      title: "DIGITAL DESIGN",
      description:
        "Crafting flawless visuals is key to making a lasting mark in your audience's mind and conveying your brand story. Our creative directors are connoisseurs in shaping your brand's visual identity, ensuring attractive visuals and stunning motion graphics captivate your audience.",
      bg: "bg-green-100",
    },
  ];

  const clients = [
    {
      name: "Zelo India",
      logo: c1,
    },
    {
      name: "Nutzz Magic",
      logo: c2,
    },
    {
      name: "Diamond Ore",
      logo: c3,
    },
    // {
    //   name: "Sofsscroll",
    //   logo: c4,
    // },
    {
      name: "DOC-Labz",
      logo: c11,
    },
    {
      name: "Profile Genie",
      logo: simply,
    },
    {
      name: "CV Genie",
      logo: c7,
    },
    {
      name: "Mentor Institute",
      logo: logo,
    },
    // {
    //   name: "Dropmix",
    //   logo: c9,
    // },
    {
      name: "Viraj Katyayan",
      logo: zelo,
    },
    {
      logo: nutz,
      name: "Nutz Magic",
    },

    {
      logo: dropmix,
      name: "Nutz Magic",
    },
  ];

  return (
    <div className="">
      <div className="relative w-full h-[20vh] md:h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            src="https://www.youtube-nocookie.com/embed/MYCMys_BpBM?autoplay=1&mute=1&controls=0&playsinline=1&showinfo=0&rel=0&enablejsapi=1&loop=1&playlist=MYCMys_BpBM"
            title="Doclabz Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full object-cover pointer-events-none"
          ></iframe>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-10"></div>
        </div>
      </div>

      <section className="py-16 px-6 md:px-40 bg-[#fdf8f3] text-[#333]">
        <h2 className="text-4xl font-bold mb-4 text-color1">About Us</h2>
        <h2 className="text-4xl font-bold mb-4 text-gray-400">
          We are the Social Thali
        </h2>

        <div>
          <p className="mb-6">
            <strong>Doclabz</strong> is your calm in the content chaos — a
            creative collective where strategy meets storytelling. We specialize
            in crafting content that connects, communities that grow, and brands
            that breathe personality.
          </p>
          <p className="mb-6">
            From quirky plushies at <strong>Zelo India</strong> to the bold
            crunch of <strong>Nutzz Magic</strong>, from{" "}
            <strong>Diamond Ore’s</strong> mission to empower HR leaders to{" "}
            <strong>Sofsscroll’s</strong> luxurious sustainability — we build
            brands with a voice and vision.
          </p>
          <p className="mb-6">
            Whether it’s revolutionizing resumes with <strong>CV Genie</strong>,
            creating instant digital impressions with{" "}
            <strong>Profile Genie</strong>, or redefining gifting and mocktails
            with <strong>Dropmix</strong>, DOC doesn’t just manage social media
            — we elevate it.
          </p>
          <p>
            We’ve partnered with language institutes like{" "}
            <strong>Mentor</strong>, supported rising stars like{" "}
            <strong>Viraj Katyayan</strong>, and continue to work with
            innovators and dreamers alike. At DOC, we don’t just deliver — we
            design digital stories worth sharing.
          </p>
        </div>
      </section>

      <div className="flex px-4 lg:px-40 mt-10 bg-color1/40 py-10 items-center flex-col md:flex-row justify-between gap-x-6 md:gap-y-0 gap-y-4">
        <div className="md:max-w-2xl">
          <h1 className="text-2xl mb-10">
            We solve the most difficult puzzles and make things fall into place.
          </h1>
          <p className=" ">
            Every brand faces complex challenges—scattered ideas, inconsistent
            messaging, or just not knowing where to begin. That’s where we come
            in. At Doclabz, we untangle the chaos, connect the dots, and build a
            clear, cohesive strategy tailored to your goals. Whether it's
            turning scattered content into compelling narratives or aligning
            your vision across platforms, we make it all fit—beautifully and
            seamlessly.
          </p>
        </div>

        <div>
          <img
            src="https://i0.wp.com/thesocialturtle.com/wp-content/uploads/2023/09/tst-rubik-280px.gif?w=280&ssl=1"
            alt=""
          />
        </div>
      </div>

      <section className="bg-[#fdf8f3] py-16 px-6 md:px-40">
        <h2 className="text-4xl font-semibold text-gray-800 mb-10">Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bg} rounded-3xl p-6 shadow-md transition hover:shadow-xl`}
            >
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700 text-md leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Clients We Work With
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          From playful plushies to professional platforms, our clients span
          diverse industries. We take pride in building meaningful, lasting
          partnerships that turn ideas into impact.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-6 px-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-y-10 justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-24 object-contain transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="ezy__cta2 mt-4 light relative overflow-hidden py-14 md:py-24 bg-color1">
        <div className="w-[400px] h-[400px] bg-white bg-opacity-5 rounded-full -m-[100px] absolute left-0 top-0"></div>
        <div className="w-[400px] h-[400px] bg-white bg-opacity-5 rounded-full -m-[100px] absolute right-0 bottom-0"></div>

        <div className="container relative px-4">
          <div className="grid grid-cols-12 justify-center text-center text-white">
            <div className="col-span-12 lg:col-span-9 lg:col-start-3 mx-auto">
              <div className="lg:px-16">
                <h2 className="text-2xl md:text-[35px] leading-none font-bold mb-6">
                  Choose DocLabz web solution today so you can scale your
                  tomorrow
                </h2>
                <p className="text-sm leading-6 mb-12">
                  Begin your journey with a trusted partner in web development
                  and Social Media Management.
                </p>
                <Link
                  to={"/book-meeting"}
                  className="bg-white text-black py-3 px-7 rounded transition"
                >
                  Book meeting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
};

export default SocialMediaManagement;
