import React, { useEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import emailjs from 'emailjs-com';
emailjs.init('v4J4xN9s0rL7eRYnG');

const Home = () => {
    const typeRef = useRef(null);

    useEffect(() => {
        const typewriter = new Typewriter(typeRef.current, {
            loop: true,
            delay: 75,
        });

        typewriter
            .typeString('<span class="inline-block font-bold">Let\'s </span>')
            .typeString('<span class="relative whitespace-nowrap text-green-400"><span class="relative"> Work </span></span>')
            .typeString('<span class="inline-block font-bold"> Together !!</span>')
            .pauseFor(2000)
            .deleteChars(11)
            .typeString('<span class="inline-block font-bold">Seamlessly !!</span>')
            .pauseFor(2000)
            .deleteChars(13)
            .typeString('<span class="inline-block font-bold">Unitedly !!</span>')
            .pauseFor(2000)
            .deleteAll()
            .start();

        return () => {
            typewriter.stop();
        };
    }, []);



    const handleCall = () => {
        const confirmCall = window.confirm('Do you want to call us?');

        if (confirmCall) {

            window.location.href = 'tel:9773693017';
        }
    };


    //Form Intigration 

    const [showPopup, setShowPopup] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const handleClose = () => {
        setShowPopup(false);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
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
            message: formData.message
        };

        // Send email using EmailJS
        emailjs.send('service_uqw137a', 'template_blasfys', templateParams, '4MtjCiOtYFQUWMHMt')
            .then((result) => {
                console.log(result.text);
                setShowLoader(false);
                setShowPopup(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                });
                console.log(formData)
            }, (error) => {
                setShowLoader(false);
                console.error(error.text);
                alert('Failed to submit form. Please try again later.');
            });
    };



    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-6 px-10 justify-center justify-items-center content-center'>
                <div class="mx-auto col-span-4   sm:px-6 lg:px-8  pb-16 text-center pt-20  lg:pt-32">


                    <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                        <span className="inline-block font-bold" ref={typeRef}></span>
                    </h1>



                    <div class="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
                        <a class="group inline-flex items-center justify-center rounded-full py-2 px-8 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left"
                            href="#">

                            <span class="" onClick={handleCall}>Call Us</span>
                        </a>

                    </div>

                    <p class="mx-auto max-w-3xl text-lg tracking-tight text-slate-700 mt-10">
                        <span class="inline-block">Or</span> <br></br>
                        <span class="inline-block  mt-4">tech@doclabz@gmal.com</span>
                    </p>

                    {/* <p class="mx-auto mt-6 max-w-3xl text-lg tracking-tight text-slate-700 sm:mt-20">
                        <span class="inline-block">Partner with us to leverage cutting-edge technology solutions and drive your business forward.</span>
                        <span class="inline-block"></span>
                    </p> */}

                </div>


                <div className='col-span-2 w-full mt-10'>
                    <form class="max-w-md mx-auto  p-6 bg-gradient-to-r from-emerald-200 to-lime-300 border rounded-lg shadow-lg" onSubmit={handleSubmit}>
                        <h2 class="text-2xl font-bold mb-6">Contact Form</h2>
                        <div class="mb-4">

                            <input class="shadow appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div class="mb-4">
                            <input class="shadow appearance-none border bg-gray-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                        </div>

                        <div class="mb-4">
                            <input class="shadow appearance-none border bg-gray-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Enter your phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div class="mb-4">

                            <textarea class="shadow appearance-none border  bg-gray-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Enter your message" value={formData.message} onChange={handleChange} ></textarea>
                        </div>
                        <button class="bg-gray-50 rounded-md font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            {showLoader ? (
                                <svg aria-hidden="true" class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </div>

        </>
    )
}

export default Home