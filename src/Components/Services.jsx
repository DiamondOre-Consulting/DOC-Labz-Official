import React, { useEffect, useRef } from 'react';
import 'animate.css';
import service1 from '../assets/service1.webp'
import service2 from '../assets/service2.webp'
import service3 from '../assets/service3.webp'
import service4 from '../assets/service4.webp'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import { Link } from 'react-router-dom';



const Services = () => {

  const data = [

    {
        title: "Website Development <br/> Services",
        icon: icon2,
        image: service2,
        link: "/services/1"
    },

    {
        title: "Ecommerce Solution <br/> Services",
        icon: icon1,
        image: service1,
        link: "/services/11"
    },
    {
        title: " Social Media Management <br/> Services",
        icon: icon4,
        image: service4,
        link: "/services/12"
    },
    {
        title: "Wordpress Development <br/> Services",
        icon: icon4,
        image: "https://www.infigic.com/wp-content/uploads/2022/03/Wordpress-development-services-390x390.png",
        link: "/services/13"
    },
    {
        title: "Shopify Development <br/> Services",
        icon: icon1,
        image: "https://dolphinwebsolution.com/wp-content/uploads/2023/08/shopify.jpg",
        link: "/services/14"
    },
    {
        title: "Search Engine <br/> Optimization",
        icon: icon2,
        image: "https://shorturl.at/0rSDG",
        link: "/services/3"
    }, {
        title: "Social Media <br/> Optimization",
        icon: icon3,
        image: "https://shorturl.at/4xYt3",
        link: "/services/4"
    }, {
        title: "Web/Vps <br/> Hosting",
        icon: icon4,
        image: "https://codecrafter.co.in/assets/Software-DtkqiIyY.jpg",
        link: "/services/16"
    },
]

  return (
      <div className='flex flex-col items-center justify-center mt-12 mb-10 lg:mt-10'>
                <h1 className = "text-center text-5xl font-semibold text-color1 mb-2 ">Our Services</h1>
                <img
                  className="w-fit object-cover md:block hidden mb-8"
                  src="https://seoc-html-v2.vercel.app/assets/img/elements/line-img1.png"
                  alt=""
              
                />
                    <div className='grid gap-8 mt-4 grid-1 sm:grid-cols-2 lg:grid-cols-4'>
                        {data?.map((data, ind) => {
                           return <Link to={data?.link} className="relative bg-white rounded-[1rem] shadow-lg overflow-hidden max-w-[18rem]  group  hover:shadow-xl">
                            <img src={data?.image} alt="Service" className="w-full translate-transform duration-700 group-hover:scale-[1.15] h-auto" />
                            <div className="absolute inset-0 bg-gradient-to-t from-color1 via-transparent to-transparent flex items-end justify-center hover:from-[10%] hover:from-color1 hover:to-transparent transition-all duration-300">
                                <div className="relative z-10 text-center text-white mb-7">
                                    {/* <div className="mb-10 bg-color1 p-4 mx-auto w-fit rounded-lg" >
                                        <img src={data?.icon} alt="Icon" className="w-8 h-auto mx-auto transition-colors duration-300 group-hover:text-[#2B4DFF]"
                                            style={{ color: 'currentColor' }} />
                
                                    </div> */}
                                    <div tabIndex="0" className="text-[1.2rem] sora-600 leading-tight">
                                        <h2 dangerouslySetInnerHTML={{ __html: data?.title }} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        })}
                    </div>
                </div>
  );
};

export default Services;
