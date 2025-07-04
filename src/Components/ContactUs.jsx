import React, { useState } from "react";
import emailjs from "emailjs-com";
emailjs.init("v4J4xN9s0rL7eRYnG");

const ContactForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    nature: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLoader(true);
    // Replace placeholders with form data
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      nature: formData.nature,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_gsvaq5j",
        "template_2crg6s8",
        templateParams,
        "NSAHsHhsyTgBAaYKj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowLoader(false);
          setShowPopup(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            nature: "",
          });
          console.log(formData);
        },
        (error) => {
          setShowLoader(false);
          console.error(error.text);
          alert("Failed to submit form. Please try again later.");
        }
      );
  };

  const handleWhatsAppChat = () => {
    const phoneNumber = "7838738916";
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phoneNumber
    )}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex space-x-4 text-sm">
          <div className="mb-4 w-full">
            <label>Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              className=" bg-[#F2F6FD]  border  border-gray-500 rounded-md focus:outline-none py-1 w-full px-2"
              placeholder="Your Enter Name"
              id="name"
            />
          </div>

          <div className="mb-4 w-full">
            <label>Contact Number</label>
            <input
              type="text"
              value={formData.phone}
              onChange={handleChange}
              className=" bg-[#F2F6FD]  border  border-gray-500 rounded-md focus:outline-none py-1 w-full px-2"
              placeholder="Your Contact Number"
              id="phone"
            />
          </div>
        </div>

        <div className="flex space-x-4 text-sm">
          <div className="mb-4 w-full">
            <label>Email</label>
            <input
              type="text"
              value={formData.email}
              onChange={handleChange}
              className=" bg-[#F2F6FD]  border  border-gray-500 rounded-md focus:outline-none py-1 w-full px-2"
              placeholder="Enter Your Email"
              id="email"
            />
          </div>

          <div className="mb-4 w-full">
            <label>Nature Of Business</label>
            <input
              type="text"
              value={formData.nature}
              onChange={handleChange}
              className=" bg-[#F2F6FD]  border  border-gray-500 rounded-md focus:outline-none py-1 w-full px-2"
              placeholder="Enter Your Nature Of Business"
              id="nature"
            />
          </div>
        </div>
        <div className="mb-4 text-sm">
          <label>Tell Us About Your Project</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className=" bg-[#F2F6FD] dark:bg-[#2A384C] border border-gray-500 py-2 rounded-md focus:border focus:border-[#86b7fe] w-full px-2"
            placeholder="Briefly Describe your project needs"
            rows="4"
            id="message"
          ></textarea>
        </div>
        <div className="text-start">
          <button
            type="submit"
            class="mb-6 w-full rounded bg-color1 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0"
          >
            {showLoader ? (
              <svg
                aria-hidden="true"
                class="inline w-4 h-4 text-gray-200 animate-spin  fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              <span class="relative z-10">Submit</span>
            )}
          </button>
        </div>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <section className=" relative z-40 rounded-lg shadow-xl bg-white w-4/5 sm:w-3/5 lg:w-1/3">
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-teal-green-900 mb-4">
                Thank you!!
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                We will connect with you soon.
              </p>
              <button
                className="block w-full px-4 py-2 bg-color1 text-sm font-semibold text-white rounded-lg shadow-md  focus:outline-none "
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

const ContactFormCard = () => (
  <div className="bg-white p-4 rounded-lg">
    <div>
      <h2 className="text-2xl md:text-[30px] leading-none font-semibold mb-4">
        Contact Us
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Let's build your custom IT solution tailored to your needs!
      </p>
    </div>

    <ContactForm />
  </div>
);

const ContactUs = () => {
  return (
    <>
      <section className=" ezy__contact11 light bg-white   text-zinc-900 dark:text-white overflow-hidden">
        <div className="  bg-no-repeat bg-color1/10 bg-left-bottom bg-cover py-14">
          <div className="container px-4 max-w-[80rem]  mx-auto">
            <div className="grid grid-cols-12  ">
              <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
                <h2 className="text-2xl leading-none font-bold md:text-[40px] mb-6 text-black">
                  Get in Touch
                </h2>
                <p className="text-lg text-black">
                  Your digital success starts here. Contact us today to get
                  started
                </p>
                <div class=" mt-10 w-full ">
                  <div class="flex flex-wrap">
                    <div class="mb-12 ">
                      <div class="flex items-start">
                        <div class="shrink-0">
                          <div class="inline-block rounded-md bg-color1 p-4 text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              class="h-6 w-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="ml-6 grow">
                          <p class="mb-2 font-bold ">Technical support</p>
                          <p class="text-sm text-neutral-700 flex gap-2">
                            <a
                              href="mailto:tech@doclabz.com"
                              className="inline-block cursor-pointer hover:underline"
                            >
                              tech@doclabz.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="mb-12  ">
                      <div class="flex items-start">
                        <div class="srink-0">
                          <div class="inline-block rounded-md bg-color1 p-4 text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              class="w-7 h-7"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="ml-6 grow">
                          <p class="mb-2 font-bold ">Address</p>
                          <p>
                            B-127, Second Floor, B Block, Sector 63, Noida,
                            Uttar Pradesh 201301
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-wrap">
                    <div class="w-full shrink-0 grow-0 basis-auto ">
                      <div class="align-start flex">
                        <div class="shrink-0">
                          <div class="inline-block rounded-md bg-color1 p-4 text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="ml-6 grow">
                          <p class="mb-2 font-bold ">Mobile</p>
                          <p
                            class="text-sm text-neutral-700 cursor-pointer"
                            // onClick={handleWhatsAppChat}
                          >
                            +91 7838738916
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12  lg:col-span-5 lg:col-start-8">
                <ContactFormCard />
              </div>
            </div>
          </div>
        </div>
        <div className="ezy__contact11-blank-card"></div>
      </section>

      {/* <section class="mb-32 mt-20" id='contactus'>
                <div id="map" class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                    <iframe className='w-full rounded-md ' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56039.41861215709!2d77.3733795!3d28.6158626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef068957c2f1%3A0xe72309664887757f!2sDiamond%20Ore%20Consulting%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1706784809360!5m2!1sen!2sin" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="container px-6 md:px-12">
                    <div
                        class="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
                        <div class="flex flex-wrap">
                            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                                <form onSubmit={handleSubmit}>
                                    <div className={`relative mb-6 ${formData.name ? 'active' : ''}`} data-te-input-wrapper-init>
                                        <input type="text"
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                            value={formData.name} onChange={handleChange}
                                            id="name" />
                                        <label
                                            className={`absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.name ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                                            htmlFor="name">Name
                                        </label>
                                    </div>
                                    <div className={`relative mb-6 ${formData.email ? 'active' : ''}`} data-te-input-wrapper-init>
                                        <input type="email"
                                            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                            value={formData.email} onChange={handleChange}
                                            id="email" />
                                        <label
                                            className={`absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.email ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                                            for="exampleInput91">Email
                                        </label>
                                    </div>

                                    <div className={`relative mb-6 ${formData.phone ? 'active' : ''}`} data-te-input-wrapper-init>
                                        <input type="text"
                                            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                            required value={formData.phone} onChange={handleChange}
                                            id="phone" />
                                        <label
                                            className={`absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.phone ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                                            for="exampleInput91">Phone
                                        </label>
                                    </div>
                                    <div className={`relative mb-6 ${formData.message ? 'active' : ''}`} data-te-input-wrapper-init>
                                        <textarea
                                            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                            id="message" rows="3" value={formData.message} onChange={handleChange} ></textarea>
                                        <label
                                            className={`absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.message ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                                            for="exampleInput91">Message
                                        </label>
                                    </div>

                                    <button type="submit"
                                        class="mb-6 w-full rounded bg-green-400 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
                                        {showLoader ? (
                                            <svg aria-hidden="true" class="inline w-4 h-4 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                        ) : (<span class="relative z-10">Submit</span>
                                        )}
                                    </button>
                                </form>

                                {showPopup && (
                                    <div className="fixed inset-0 flex items-center justify-center">

                                        <section className="rounded-lg shadow-xl bg-white w-4/5 sm:w-3/5 lg:w-1/3">
                                            <div className="p-6 text-center">
                                                <h2 className="text-xl font-bold text-teal-green-900 mb-4">Thank you!!</h2>
                                                <p className="text-sm text-gray-600 mb-6">We will connect with you soon.</p>
                                                <button
                                                    className="block w-full px-4 py-2 bg-green-400 text-sm font-semibold text-white rounded-lg shadow-md  focus:outline-none "
                                                    onClick={handleClose}
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </section>
                                    </div>
                                )}
                            </div>
                            <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                <div class="flex flex-wrap">
                                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                        <div class="flex items-start">
                                            <div class="shrink-0">
                                                <div class="inline-block rounded-md bg-green-300 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" class="h-6 w-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="ml-6 grow">
                                                <p class="mb-2 font-bold ">
                                                    Technical support
                                                </p>
                                                <p class="text-sm text-neutral-500">
                                                    <a href="mailto:tech@doclabz.com" className="inline-block cursor-pointer hover:underline">
                                                        tech@doclabz.com
                                                    </a>
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                        <div class="flex items-start">
                                            <div class="srink-0">
                                                <div class="inline-block rounded-md bg-green-300 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" class="w-7 h-7">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="ml-6 grow">
                                                <p class="mb-2 font-bold ">
                                                    Address
                                                </p>
                                                <p>B-127, Second Floor, B Block, Sector 63, Noida, Uttar Pradesh 201301</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="flex flex-wrap">
                                    <div class="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                                        <div class="align-start flex">
                                            <div class="shrink-0">
                                                <div class="inline-block rounded-md bg-green-300 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="ml-6 grow">
                                                <p class="mb-2 font-bold ">Mobile</p>
                                                <p class="text-sm text-neutral-500 cursor-pointer" onClick={handleWhatsAppChat}>
                                                    +91 7838738916
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section> */}
    </>
  );
};

export default ContactUs;
