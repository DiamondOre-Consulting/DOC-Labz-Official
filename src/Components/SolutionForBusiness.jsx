import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const SolutionForBusineess = () => {
  const categories = [
    {
      id: "e-commerce-website", // Added ID matching mainService
      title: "E-Commerce Website",
      description:
        "We build scalable and secure e-commerce websites with integrated payment gateways and seamless user experience to help you grow your online store.",
    },
    {
      id: "cv-genie", // Added ID matching mainService
      title: "AI Powered Writing Assistance",
      description:
        "Create a standout CV with our CV Genie tool designed to highlight your strengths and increase your chances of landing your dream job.",
    },
    {
      id: "dynamic-catalogue", // Added ID matching mainService
      title: "Dynamic Catalogue",
      description:
        "Easily manage and update your product listings with our Dynamic Catalogue solution — ensuring your customers always see the latest offerings.",
    },
    {
      id: "chat-bot", // Added ID matching mainService
      title: "Chat Bot",
      description:
        "Automate work simplification and manage out-of-office interactions with our intelligent chat bot solutions tailored to your business needs.",
    },
    {
      id: "dynamic-website", // Added ID matching mainService
      title: "Dynamic Website",
      description:
        "We develop dynamic websites with multiple and complex functionalities, delivering a high-performance and customizable user experience.",
    },

    {
      id: "erp", // Added ID matching mainService
      title: "ERP ",
      description:
        "A comprehensive ERP system designed to manage operations efficiently and effectively for your Company",
    },
    {
      id: "static-website", // Added ID matching mainService
      title: "Static Website",
      description:
        "Establish your primary digital presence with a professionally designed static website that communicates your brand effectively.",
    },
    {
      id: "landing-page", // Added ID matching mainService
      title: "Landing Page - Digital Profile",
      description:
        "A dedicated landing page to showcase your professional profile with embedded social links and a clean, modern design.",
    },

    {
      id: "social-media-management",
      title: "Social Media Management",
      description:
        "Manage and grow your brand’s presence on platforms like Instagram, Facebook, and LinkedIn with tailored content, scheduling, and analytics support.",
    },
  ];

  return (
    <section id="my-section" className="py-16 px-8 bg-white text-[#000080]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12  text-color1 text-center">
          Solutions For Various Business Needs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category) => (
            <Link
              to={`/category-service/${category.id}`} // Correct link structure
              key={category.id} // Use id as key for better performance and stability
              className="rounded-2xl bg-white text-[#000080] shadow-lg p-6 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out border border-gray-200 block" // Added 'block' to make Link fill the div
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {category.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {category.description}
              </p>

              <p className="underline mt-1 text-color1">
                {" "}
                Click Here To Know More
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionForBusineess;
