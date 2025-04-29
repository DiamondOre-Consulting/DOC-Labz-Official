import React, { useEffect } from 'react'
import { FaUsers } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import ContactUs from '../Components/ContactUs';
import { Link } from 'react-router-dom';


const AboutUs = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	  }, []);


const cards = [
	{
		icon: FaUsers,
		count: "50+",
		title: "Client Served",
	},
	{
		icon: CgWebsite,
		count: "100+",
		title: "Project Completed",
	},
];

const CardItem = ({ item }) => (
	<div className="text-center mr-6">
       <p className='text-4xl'> {item.icon}</p>
		{/* <FontAwesomeIcon icon={item.icon} className="text-[40px] text-blue-600" /> */}
		<div className="p-4 pt-2 text-center">
			<h5 className="text-[26px] font-semibold mb-2">{item.count}</h5>
			<p className="font-bold mb-2">{item.title}</p>
		</div>
	</div>
);



const Cards = () => (
	<div className="flex mt-12">
		{cards.map((item, i) => (
			<CardItem item={item} key={i} />
		))}
	</div>
);

  return (
    <div>
       <section
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/futuristic-business-office-space_23-2151003783.jpg?uid=R177576380&ga=GA1.1.119561090.1726138664&semt=ais_hybrid&w=740')" }}
        className="h-80 bg-contain bg-center w-full relative"
      >
        <div className="absolute inset-0 bg-black/40 "></div>

        <div className="flex flex-col justify-center items-center h-full relative z-20">
          <h1 className="text-5xl text-white font-semibold">About Us</h1>
          <div className="text-white flex space-x-3 font-semibold mt-4">
            <Link to={'/'}>Home</Link>
            <p> || </p>
            <p >About us </p>
          </div>
        </div>
      </section>

      <div>
      <section className="ezy__about11 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12 gap-5 justify-center items-center">
					<div className="col-span-12 lg:col-span-6">
                        <img src="https://img.freepik.com/free-vector/two-developers-working-with-big-data-technology-illustration_335657-349.jpg?t=st=1745918743~exp=1745922343~hmac=2c2cecae0ac5561fa56993015736026b1ce2f8546d2d8470a2de09f1e7df2a37&w=826" className='' alt="" />
						{/* <div className="text-center lg:px-20">
							<p className="opacity-75 uppercase">Bit By Bit, Building  Tomorrow</p>
							<h1 className="text-4xl md:text-7xl leading-tight font-light uppercase tracking-wide">
								DOC <span className="font-bold">LABZ</span>
								<span className="inline-flex w-3 h-3 rounded-full bg-blue-600 ml-2"></span>
							</h1>
							<p className="text-xl leading-normal opacity-75 mt-4 mb-6">
								Completely network collaborative web services via user-centric
								initiatives. Quickly promote sticky testing procedures
								collaborator before unique process improvements.
							</p>
							<p className="opacity-50 text-sm lg:mx-12">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Voluptates, sunt dignissimos veritatis possimus assumenda libero
								officiis accusamus ipsum blanditiis.
							</p>
						</div> */}
					</div>
					<div className="col-span-12 lg:col-span-6">
  <div className="lg:ml-12">
    <p className="opacity-75 mb-4">
      <span className="text-[40px] text-color1 font-bold">D</span>oc-Labz is where cutting-edge innovation meets exceptional execution. Our expert team of tech-savvy professionals is driven by a passion for solving complex challenges and delivering real business value through transformative IT consulting solutions.
    </p>
    <p className="opacity-75 mb-4">
      We specialize in user-centric strategies that redefine how digital services are delivered. From intelligent automation to scalable cloud infrastructures, our solutions are tailored to streamline operations, enhance performance, and accelerate growth.
    </p>
    <p className="opacity-75">
      At Doc-Labz, we don’t just build systems — we craft experiences. Our commitment to excellence ensures that every project is executed with precision, transparency, and a relentless focus on customer satisfaction. Partner with us to drive your business forward through innovation.
    </p>
  </div>
</div>

				</div>
			</div>
		</section>

      </div>

      <div>
      <section className="ezy__numbers10 bg-gray-100 light py-14 md:py-24  dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 gap-6 mx-auto max-w-7xl">
					<div className="col-span-12 md:col-span-6">
						<div className="flex flex-col justify-center h-full">
							<h1 className="text-3xl font-bold leading-none md:text-[45px] mb-4">
								Our Achivements
							</h1>
							<p className="text-[17px] opacity-80">
							We are committed to delivering high-quality solutions that drive success across a wide range of industries. By fostering strong client relationships and leading innovative projects, we aim to create exceptional value for every partner we serve.
							</p>
							<Cards />
							
							
									<Link to={'/contact-us'} className="py-3 px-9 w-fit rounded bg-color1 text-white hover:bg-opacity-90 duration-300">
										Contact us
									</Link>
								
							
						</div>
					</div>
					<div className="col-span-12 md:col-span-6">
						<img
							src="https://img.freepik.com/free-photo/business-strategy-concept-grey-white-wall-side-view-man-putting-fingers-step-stairs_176474-6584.jpg?t=st=1745823689~exp=1745827289~hmac=6ce2d33d2acfcd3578af6f94c233d3884e24246b86329f9297c518ff46b2f712&w=900"
							alt=""
							className="rounded-tr-[100px] rounded-bl-[100px] max-w-full h-auto mt-6 md:mt-0"
						/>
					</div>
				</div>
			</div>
		</section>
      </div>


      <ContactUs/>
    </div>
  )
}

export default AboutUs
