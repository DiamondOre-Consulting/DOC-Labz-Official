import React, { useEffect } from "react";
import { services } from "../Hooks/services.js";
import { Link, useParams } from "react-router-dom";
import { FaCheckDouble } from "react-icons/fa6";
import ContactUs from '../Components/ContactUs.jsx'

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s?.id === serviceId);

  if (!service) return <div>Service not found!</div>;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-10 py-10 gap-x-8">
        <div className="py-4">
          <h1 className="text-3xl font-bold">{service.sec1.heading}</h1>
          <p className="mt-4 text-gray-700 text-xl md:text-2xl mb-8">{service.sec1.content}</p>
          <Link className="px-20 py-3 bg-color1 text-white rounded-md ">Book Meating</Link>
        </div>
        <img src={service?.sec1?.image} className="w-full h-96 object-contain" alt="" />
      </div>

      <section className="ezy__service23 light py-14 md:py-24 bg-gray-50 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full text-center mb-12">
              <h3 className="text-3xl font-bold md:text-[45px] mb-2">
                Our Key Features
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
            {service?.keyfeature?.map((ele, index) => (
              <div className="bg-[#040D43] h-[18rem]  hover:bg-gradient-to-b hover:from-transparent group hover:via-color1/50 hover:to-color1 shadow-lg rounded-lg p-6 max-w-xs mx-auto hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center">
                {/* Icon */}
                <div className="flex justify-center mb-4 text-2xl bg-color1 w-10 h-10 flex items-center  mx-auto group-hover:bg-white group-hover:text-color1 text-white p-4 rounded-md transition-all duration-500">
                  {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl sora-500  text-center text-white mb-2">
                  {ele?.heading}
                </h3>

                {/* Description */}
                <p className="text-gray-100 text-center">{ele?.content}</p>
              </div>

              // <div
              //   className={` ${
              //     index % 2 === 0 ? "bg-white" : "bg-red-400"
              //   }  shadow-xl rounded-lg p-4 md:p-12 h-full`}
              // >
              //   <div
              //     className={`flex items-center w-20 h-20 bg-white shadow-xl dark:bg-slate-800 rounded-full justify-center p-5 text-3xl text-${service.color}-500`}
              //   >
              //     <p>{index + 1}</p>
              //   </div>
              //   <div className="mt-4">
              //     <h5 className="text-2xl font-medium mb-3">{ele?.heading}</h5>
              //     <p className="opacity-80 mb-0">{ele?.content}</p>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col py-10 w-full px-2 md:px-10 gap-y-10">
        {service?.features?.map((ele, index) => (
          <div
            className={`flex flex-col md:flex-row w-full md:gap-y-0 gap-y-4 ${
              index%2 == 0 ? "md:flex-row-reverse justify-center items-center" : "justify-center items-center"
            }  p-4 `}
          >
            <div className={`w-full ${
              index % 2 == 0 ? "md:w-[50%] " : "md:w-[50%] "
            } `}>
              <h1 className="text-2xl font-semibold mb-4">{ele?.heading}</h1>
              {ele?.points?.map((points) => (
                <p className="flex items-center space-y-2 text-xl space-x-4">
                  {" "}
                  <span className="text-xl text-green-700">
                    <FaCheckDouble />
                  </span>
                  <span>{points}</span>
                </p>
              ))}
            </div>
            <div className="md:w-[45%] w-full">
              <img src={ele?.image} alt="" className="w-full " />
            </div>
          </div>
        ))}
      </div>


      <section className="ezy__cta2 light relative overflow-hidden py-14 md:py-24 bg-color1">
	
			<div className="w-[400px] h-[400px] bg-white bg-opacity-5 rounded-full -m-[100px] absolute left-0 top-0"></div>
			<div className="w-[400px] h-[400px] bg-white bg-opacity-5 rounded-full -m-[100px] absolute right-0 bottom-0"></div>

			<div className="container relative px-4">
				<div className="grid grid-cols-12 justify-center text-center text-white">
					<div className="col-span-12 lg:col-span-9 lg:col-start-3 mx-auto">
						<div className="lg:px-16">
							<h2 className="text-2xl md:text-[35px] leading-none font-bold mb-6">
							Choose DocLabz web solution today so you can scale your tomorrow
							</h2>
							<p className="text-sm leading-6 mb-12">
              Begin your journey with a trusted partner in web development and  Social Media Management.
							</p>
							<button
								type="submit"
								className="bg-white text-black py-3 px-7 rounded transition"
							>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>

    <ContactUs/>
    </div>
  );
};

export default ServicePage;
