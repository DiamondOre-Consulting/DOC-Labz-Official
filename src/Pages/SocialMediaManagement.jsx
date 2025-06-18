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
import profilegenie from "../assets/profilegenie.png";
import reallogo from "../assets/reallogo.png";

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
      name: "Diamondore",
      logo: reallogo,
    },
    {
      name: "Diamond Ore",
      logo: c3,
    },
    // {
    //   name: "Sofsscroll",
    //   logo: c4,
    // },
    // {
    //   name: "DOC-Labz",
    //   logo: c11,
    // },
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

    {
      logo: profilegenie,
      name: "Profile Genie",
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

      <section className="bg-[#fffaf7] py-20 px-4 md:px-20">
        <div className=" mx-auto space-y-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-5xl font-extrabold text-color1">
              Welcome to <span className="text-[#ff4d4f]">Social Platter</span>
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Jahaan freelancer wali cost mein milti hai ek high-end creative
              agency ki craftsmanship.
            </p>
          </div>
          <div className="flex md:flex-row flex-col  w-full md:gap-y-0 gap-y-4  md:gap-x-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
              <div className="flex items-center px-5 py-4">
                <img
                  src={logo}
                  alt="Social Thali"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-[#000080]">social_platter</p>
                  <p className="text-xs text-gray-500">Just now</p>
                </div>
              </div>
              <div className="px-6 pb-4 space-y-4">
                <p>
                  Here, your brand doesn’t just get content — it gets a{" "}
                  <strong>personality</strong>, a <strong>pulse</strong>, and a{" "}
                  <strong>purpose</strong>.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#ff4d4f]">
                  <p className="font-semibold text-[#000080] mb-1">
                    We are a digital dastarkhwan of creativity —
                  </p>
                  <p>
                    From sleek & subtle to loud & lajawab —{" "}
                    <strong>
                      you choose your flavour, your spice, your story
                    </strong>
                    .
                  </p>
                </div>
                <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
                  <p>❤️ 1,204 Likes</p>
                  <p>💬 View 48 Comments</p>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
              <div className="flex items-center px-5 py-4">
                <img
                  src={logo}
                  alt="Social Thali"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-[#000080]">social_platter</p>
                  <p className="text-xs text-gray-500">5 mins ago</p>
                </div>
              </div>
              <div className="px-6 pb-4 space-y-4">
                <p className="italic text-lg text-gray-700">
              "Picture अभी बाकी है मेरे दोस्त"
                </p>
                <p>
                  We <strong>learn daily</strong>, grow relentlessly, and chase
                  campaigns like it’s our last.
                </p>
                <p>
                  <span className="text-[#000080] font-medium">
                    Unfiltered passion
                  </span>{" "}
                  &
                  <span className="font-medium text-[#000080]">
                    {" "}
                    pixel-perfect execution
                  </span>{" "}
                  are our default.
                </p>
                <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
                  <p>❤️ 2,108 Likes</p>
                  <p>💬 View 66 Comments</p>
                </div>
              </div>
            </div>
          </div>
          {/* Post 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
            <div className="flex items-center px-5 py-4">
              <img
                src={logo}
                alt="Social Thali"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold text-[#000080]">social_platter</p>
                <p className="text-xs text-gray-500">10 mins ago</p>
              </div>
            </div>
            <div className="px-6 pb-4 space-y-4">
              <div className="bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-400">
                <p className="font-medium">
                  We're not just making posts —{" "}
                  <span className="text-[#000080]">
                    hum brand mein आवाज़ डालते हैं।
                  </span>
                  .
                </p>
                <p className="italic mt-2 text-gray-800">
                  “Bade bade brands ki छोटी-छोटी कहानियाँ होती हैं… aur
                  hum unhe blockbuster बनाते हैं।”
                </p>
              </div>
              <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
                <p>❤️ 980 Likes</p>
                <p>💬 View 22 Comments</p>
              </div>
            </div>
          </div>

          {/* CTA Post */}
          <div className="bg-[#ff4d4f] text-white rounded-xl shadow-lg px-8 py-10 text-center ">
            <h3 className="text-3xl font-bold">
              Kya aap tayyar hain apne brand ki असली कहानी लिखने ✏️ के लिए?
            </h3>
            <p className="text-lg my-6">
              Toh aaiye… Zindagi ke is digital zayke mein, apni{" "}
              <span className="font-semibold">Social platter</span> serve karte
              hain —
              <span className="italic">
                with strategy, soul, and a whole lot of spice.
              </span>
            </p>
            <Link
              to={"/contact-us"}
              className=" px-6 py-2 bg-white text-[#ff4d4f] rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Let's Build Your Story 🔥
            </Link>
          </div>
        </div>
      </section>

      {/* <div className="flex px-4 lg:px-40 mt-10 bg-color1/40 py-10 items-center flex-col md:flex-row justify-between gap-x-6 md:gap-y-0 gap-y-4">
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
      </div> */}

      {/* <section className="bg-[#fdf8f3] py-16 px-6 md:px-40">
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
      </section> */}

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

      <div className="fixed bottom-10 right-8 ">
        <img
          src="https://camilasocialmedia.com.br/_assets/video/93a7978b89f807738399f61955d9fa02.gif"
          alt=""
          className="w-[60%] absolute bottom-0 right-4"
        />
        <img
          src="https://camilasocialmedia.com.br/_assets/video/b709c1ab41a2d553970313887ca3f7aa.gif"
          alt=""
          className=" z-10 w-[60%] "
        />
      </div>
    </div>
  );
};

export default SocialMediaManagement;
