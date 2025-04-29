import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import { TiMinus } from "react-icons/ti";

const Faq = () => {

    const faqList = [
        {
          isActive: true,
          question: "What is Doc-Labz?",
          answer:
            "Doc-Labz is a premier IT consulting firm that offers innovative and customized web development solutions. We are driven by a passion for excellence and a commitment to customer satisfaction.",
        },
        {
          isActive: false,
          question: "What services does Doc-Labz provide?",
          answer:
            "We specialize in web development and IT consulting, offering tailor-made solutions to help businesses thrive in the digital landscape. Whether you need a stunning website or want to boost your online presence, we’ve got you covered.",
        },
        {
          isActive: false,
          question: "Who can benefit from Doc-Labz's services?",
          answer:
            "Our services are ideal for startups, small businesses, and enterprises looking for professional web solutions, digital transformation, and IT consulting to scale their operations and enhance their digital footprint.",
        },
        {
          isActive: false,
          question: "Why choose Doc-Labz?",
          answer:
            "At Doc-Labz, we combine innovation, expertise, and a client-first approach. Our team is dedicated to delivering high-quality solutions that not only meet but exceed client expectations.",
        },
        {
          isActive: false,
          question: "Does Doc-Labz offer custom website development?",
          answer:
            "Yes, we specialize in building customized websites tailored to your business goals and branding. From responsive design to backend functionality, we craft complete solutions.",
        },
        {
          isActive: false,
          question: "How does Doc-Labz ensure client satisfaction?",
          answer:
            "We follow a collaborative and transparent process, keeping our clients involved at every stage. Our team ensures timely delivery, ongoing support, and top-notch quality in all our projects.",
        },
        {
          isActive: false,
          question: "How can I get started with Doc-Labz?",
          answer:
            "You can reach out to us through our website or contact form. Share your requirements, and our team will get in touch to discuss the best way we can support your project and goals.",
        },
      ];
      

    const FaqItem = ({ faq }) => {
        const [isOpen, setIsOpen] = useState(faq.isActive || false);
    
        const toggleFaq = () => setIsOpen(!isOpen);
    
        return (
            <div className={`${isOpen && "active"} rounded-lg mt-6`}>
                <a
                    href="#!"
                    className="p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
                    onClick={toggleFaq}
                >
                    <span>{faq.question}</span>
                  {isOpen ? <TiMinus /> : <IoIosAdd />} 
                </a>
                <div
                    className={`${
                        isOpen ? "block" : "hidden"
                    } p-4 lg:p-6 bg-color1/85 shadow dark:shadow-none dark:bg-[#1E2735] text-white rounded-xl`}
                >
                    <p className="opacity-90">{faq.answer}</p>
                </div>
            </div>
        );
    };
    

    
    
  return (
    <div>
      	<section className="ezy__faq3  light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container  px-16 md:px-8 lg:px-28">
				<div className="grid grid-cols-12 justify-center md:mb-6">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
						<h2 className="font-bold text-[25px]  md:text-[45px] text-color1/70 leading-none mb-4">
							Frequently Asked Questions
						</h2>
						<p className="">
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!
						</p>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-0 md:gap-6">
					<div className="col-span-12 md:col-span-6">
						{faqList.slice(0, Math.floor(faqList.length / 2)).map((faq, i) => (
							<FaqItem faq={faq} key={i} />
						))}
					</div>
					<div className="col-span-12 md:col-span-6">
						{faqList
							.slice(Math.floor(faqList.length / 2), faqList.length)
							.map((faq, i) => (
								<FaqItem faq={faq} key={i} />
							))}
					</div>
				</div>
			</div>
		</section>
    </div>
  )
}

export default Faq
