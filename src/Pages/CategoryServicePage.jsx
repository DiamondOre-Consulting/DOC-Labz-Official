import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { mainService } from "../Hooks/mainservice";
import ContactUs from "../Components/ContactUs";

const CategoryServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { serviceId } = useParams();

  // Find the service based on the serviceId from the URL
  // Assuming each service in mainService array has a unique 'heading' that can be used as an ID
  const service = mainService.find(
    (s) => s.heading.toLowerCase().replace(/\s/g, "-") === serviceId
  );

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl font-semibold text-gray-700">
        Service not found!
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center text-color1/80 mb-6">
        {service.heading}
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-x-4 px-4">
        <div className="w-full">
          <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>

        {service.image && (
          <div className="mb-10 lg:mb-14 w-full">
            <img
              src={service.image}
              alt={service.heading}
              className="w-full h-64 md:h-80 lg:h-96 object-contain "
            />
          </div>
        )}
      </div>

      {service.points && service.points.length > 0 && (
        <div className="mb-10 md:mb-12 max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg shadow-inner">
          <h2 className="text-2xl md:text-3xl font-bold text-color1/80 mb-5 text-center">
            Key Features & Benefits
          </h2>
          <ul className="list-none space-y-3 text-gray-700">
            {service.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="text-base md:text-lg">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {service.projects && service.projects.length > 0 && (
        <>
          <hr className="my-10 border-t-2 border-gray-200" />
          <h2 className="text-3xl font-bold text-center text-color1/80 my-10">
            Projects We've Worked On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
            {service.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.imageHeading}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.imageHeading}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium transition duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

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

export default CategoryServicePage;
